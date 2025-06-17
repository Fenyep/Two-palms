import fs from "node:fs/promises";
import { glob } from "glob";
import { getPlaiceholder } from "plaiceholder";
import { ContentfulImage } from "./contentful";

export const getLocalImagesBase64 = async (pattern: string) =>
  Promise.all(
    glob.sync(pattern).map(async (file) => {
      const src = file.replace("./public", "");
      const buffer = await fs.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src: src.replace("public", "") } };
    })
  );

export async function getRemoteBase64Image(imageUrl: string) {
  try {
    // console.log(imageUrl);

    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const plaiceholder = await getPlaiceholder(Buffer.from(buffer));

    console.log(`base64: ${plaiceholder}`);

    return plaiceholder;
  } catch (e) {
    if (e instanceof Error) console.error(e.stack);
  }
}

export type ContentfulImageWithBlur = ContentfulImage & {
  blurredDataUrl?: string;
  plaiceholder?: Awaited<ReturnType<typeof getPlaiceholder>>;
};

export default async function getRemoteBase64ImagesWithBlur(
  images: ContentfulImage[]
): Promise<ContentfulImageWithBlur[]> {
  // Make all requests at once instead of awaiting each one - avoiding waterfall
  const base64Promises = images.map((photo) =>
    getRemoteBase64Image(`https:${photo.url}`)
  );

  // // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: ContentfulImageWithBlur[] = images.map(
    (photo, index) => {
      const blurredImage: ContentfulImageWithBlur = {
        ...photo,
        blurredDataUrl: base64Results[index]?.base64,
        plaiceholder: base64Results[index],
      };
      return blurredImage;
    }
  );

  return photosWithBlur;
}
