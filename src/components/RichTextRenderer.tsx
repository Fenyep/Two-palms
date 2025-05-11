/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  Document,
  Block,
  Inline,
} from "@contentful/rich-text-types";
import { Asset } from "contentful";
import Image from "next/image";
import { ComponentProps, ReactNode } from "react";

interface RichTextRendererProps {
  content: Document;
  className?: string;
  paragraphClassName?: ComponentProps<"p">["className"];
  heading1ClassName?: ComponentProps<"h1">["className"];
}

interface EmbeddedAssetProps {
  data: {
    target: Asset;
  };
}

export default function RichTextRenderer({
  content,
  className = "",
  paragraphClassName = "",
  heading1ClassName = "",
}: RichTextRendererProps) {
  if (!content) {
    return null;
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <strong className="font-bold">{text}</strong>
      ),
      [MARKS.ITALIC]: (text: ReactNode) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text: ReactNode) => (
        <u className="underline">{text}</u>
      ),
      [MARKS.CODE]: (text: ReactNode) => (
        <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <p className={`mb-4 ${paragraphClassName}`}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: ReactNode) => (
        <h1 className={`text-4xl font-semibold mt-8 mb-4 ${heading1ClassName}`}>
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => (
        <h2 className="text-3xl font-bold mt-8 mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: ReactNode) => (
        <h4 className="text-xl font-bold mt-6 mb-2">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: ReactNode) => (
        <h5 className="text-lg font-bold mt-4 mb-2">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: ReactNode) => (
        <h6 className="text-base font-bold mt-4 mb-2">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) => (
        <li className="mb-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: ReactNode) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </a>
      ),
      // Handle embedded assets (images)
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        if ("data" in node && "target" in node.data) {
          const embeddedAssetProps = node as unknown as EmbeddedAssetProps;
          // ... rest of the code ...
          // Make sure you have access to the asset data
          if (embeddedAssetProps.data?.target?.fields) {
            const { title, description, file } = node.data.target.fields;
            const imageUrl = file?.url;
            const alt = description || title || "Embedded image";

            return (
              <div className="my-6">
                <Image
                  src={`https:${imageUrl}`}
                  alt={alt}
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
                {title && <p className="text-sm text-gray-600 mt-2">{title}</p>}
              </div>
            );
          }
        } else {
          return null;
        }

        return null;
      },
    },
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {documentToReactComponents(content, options)}
    </div>
  );
}
