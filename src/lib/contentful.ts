import { Document } from "@contentful/rich-text-types";
import { createClient } from "contentful";
// import getRemoteBase64ImagesWithBlur, {
//   ContentfulImageWithBlur,
// } from "./getLocalBase64";

export const contentfulClient = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
});

export type ContentfulImage = {
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

// Define TypeScript interfaces to match your Contentful content models
export interface ICarouselFields {
  description: string;
  slug?: string;
  images: {
    fields: {
      file: ContentfulImage;
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
          file: ContentfulImage;
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

  console.log("Passed");

  const page = pageResult.items[0];

  if (!page) {
    return null;
  }

  return {
    page: page as unknown as IPage,
  };
}

type ProjectType = {
  fields: {
    clientName: string;
    slug: string;
    authorDetails?: {
      content: Document[];
    };
    thumbnailImage: {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        description: string;
        file: ContentfulImage;
      };
    };
    projectImages?: {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        description: string;
        file: ContentfulImage;
      };
    }[];
  };
};

type ProjectsPageType = {
  fields: {
    name: string;
    projects: ProjectType[];
  };
};

// Fetch all page slugs for static path generation
export async function getProjectFromSlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);

  const pageResults = await contentfulClient.getEntries({
    content_type: "portFolioProject",
    "fields.slug": decodedSlug,
    include: 1,
  });

  const page = pageResults.items[0];

  if (!page) {
    return null;
  }

  return page as unknown as ProjectType;
}

export async function getProjectsPageFromName(name: string) {
  const pageResult = await contentfulClient.getEntries({
    content_type: "projectsPage",
    "fields.name": name,
    // include: 5,
  });

  const page = pageResult.items[0];

  console.log("page", page);

  if (!page) {
    return null;
  }

  return {
    page: page as unknown as ProjectsPageType,
    // carousels,
  };
}
