import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    console.log(`base64: ${base64}`);

    return base64;
  } catch (e) {
    if (e instanceof Error) console.error(e.stack);
  }
}

type Photo = {
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  blurredDataUrl?: string;
};
type ImagesResults = {
  photos: Photo[];
};

export default async function addBlurredDataUrls(
  images: ImagesResults
): Promise<Photo[]> {
  // Make all requests at once instead of awaiting each one - avoiding waterfall
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, index) => {
    photo.blurredDataUrl = base64Results[index];
    return photo;
  });

  return photosWithBlur;
}
