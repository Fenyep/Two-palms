import { Document } from "@contentful/rich-text-types";
import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
});

// Define TypeScript interfaces to match your Contentful content models
export interface ICarouselFields {
  description: string;
  slug?: string;
  images: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
      title: string;
      description?: string;
    };
  }[];
}

export interface IPageFields {
  name: string;
  slug?: string;
  carousels: {
    sys: {
      id: string;
    };
    fields: {
      description: string;
      images: {
        sys: {
          id: string;
        };
        fields: {
          description: string;
          file: {
            url: string;
            fileName: string;
            title: string;
            contentType: string;
            details: {
              size: number;
              image: {
                width: number;
                height: number;
              };
            };
          };
        };
      }[];
    };
  }[];
}

export interface ICarousel {
  sys: {
    id: string;
  };
  fields: ICarouselFields;
}

export interface IPage {
  sys: {
    id: string;
  };
  fields: IPageFields;
}

export async function getPageWithCarousels(name?: string) {
  const pageResult = await contentfulClient.getEntries({
    content_type: "page",
    // "fields.slug": slug,
    "fields.name": name,
    include: 1,
  });

  const page = pageResult.items[0];

  if (!page) {
    return null;
  }

  console.log("page", page);

  //   // For any carousel references not included in the initial query
  //   const carouselIds = page.fields.carousels.map((carousel) => carousel.sys.id);
  //   let carousels: ICarousel[] = [];

  //   // If we have carousel IDs, fetch all the referenced carousels
  //   if (carouselIds.length > 0) {
  //     const carouselResults = await contentfulClient.getEntries({
  //       content_type: "carousel",
  //       "sys.id[in]": carouselIds.join(","),
  //     });

  //     carousels = carouselResults.items as ICarousel[];
  //   }

  return {
    page: page as unknown as IPage,
    // carousels,
  };
}

type ProjectDetailsType = {
  fields: {
    title: string;
    slug: string;
    authorDetails: {
      content: Document[];
    };
    carousels: {
      sys: {
        id: string;
      };
      fields: {
        description: string;
        images: {
          sys: {
            id: string;
          };
          fields: {
            description: string;
            file: {
              url: string;
              fileName: string;
              title: string;
              contentType: string;
              details: {
                size: number;
                image: {
                  width: number;
                  height: number;
                };
              };
            };
          };
        }[];
      };
    }[];
  };
};

// Fetch all page slugs for static path generation
export async function getProjectDetailsPageFromSlug() {
  const pageResults = await contentfulClient.getEntry("1LTNraLWMFTbPqZLZkdqxG");

  console.log(pageResults);

  return pageResults as unknown as ProjectDetailsType;

  // return pageResults.items.map((page) => ({
  //   params: {
  //     slug: page.fields.slug,
  //   },
  // }));
}

// Fetch all page slugs for static path generation
// export async function getAllPageSlugs() {
//   const pageResults = await contentfulClient.getEntries<IPageFields>({
//     content_type: "page",
//     select: "fields.slug",
//   });

//   return pageResults.items.map((page) => ({
//     params: {
//       slug: page.fields.slug,
//     },
//   }));
// }
