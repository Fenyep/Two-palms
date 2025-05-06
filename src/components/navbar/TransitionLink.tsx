"use client";

import { animatePageOut } from "@/lib/animations";
import { cn } from "@/lib/utils";
// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface TransitionLinkProps {
  href: string;
  label?: string;
  children?: React.ReactNode;
  className?: React.ComponentProps<"button">["className"];
}

const TransitionLink = ({ href, children, className }: TransitionLinkProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className={cn("cursor-pointer", className)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default TransitionLink;
