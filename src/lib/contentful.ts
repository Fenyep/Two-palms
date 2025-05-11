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

type ProjectsPageType = {
  fields: {
    name: string;
    projects: {
      fields: {
        clientName: string;
        slug: string;
        image: {
          sys: {
            id: string;
          };
          fields: {
            title: string;
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
        };
      };
    }[];
  };
};

// Fetch all page slugs for static path generation
export async function getProjectDetailsPageFromSlug(slug: string) {
  const pageResults = await contentfulClient.getEntries({
    content_type: "projectDetails",
    "fields.slug": slug,
    include: 1,
  });

  console.log("ProjectDetailsPageResult", pageResults);

  const page = pageResults.items[0];

  if (!page) {
    return null;
  }

  return page as unknown as ProjectDetailsType;

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

export async function getProjectsPageFromName(name?: string) {
  const pageResult = await contentfulClient.getEntries({
    content_type: "projectsPage",
    "fields.name": name,
    include: 1,
  });

  console.log("pageResult", pageResult);

  const page = pageResult.items[0];

  if (!page) {
    return null;
  }

  // console.log("page", page);

  return {
    page: page as unknown as ProjectsPageType,
    // carousels,
  };
}
