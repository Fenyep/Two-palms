"use client";

// import { getBase64 } from "@/lib/getLocalBase64";
import Image from "next/image";

interface DynamicImageCardProps {
  image: string;
  alt?: React.ComponentProps<"img">["alt"];
  className?: React.ComponentProps<"img">["className"];
  height?: number;
  width?: number;
  onClick?: () => void;
}

export default function DynamicImage({
  image,
  alt,
  height = 0,
  width = 0,
  onClick,
}: DynamicImageCardProps) {
  //   const blurredDataUrl = await getBase64(image);

  return (
    <Image
      src={image}
      alt={alt ?? image}
      width={width}
      height={height}
      onClick={onClick}
      placeholder="blur"
      blurDataURL={image}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
