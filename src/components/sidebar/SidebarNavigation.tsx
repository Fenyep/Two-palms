import Link from "next/link";
import React from "react";

/**
 * Navigation component for the sidebar
 * Contains links to different sections of the site
 */
export default function SidebarNavigation() {
  return (
    <nav className="flex flex-col gap-11">
      <div className="flex flex-col gap-5">
        <Link href="#" className="text-3xl leading-7 underline">
          Home
        </Link>
        <Link href="#" className="text-3xl leading-7">
          Portfolio
        </Link>
        <Link href="#" className="text-3xl leading-7">
          Location
        </Link>
        <Link href="#" className="text-3xl leading-7">
          About
        </Link>
      </div>
      <Link href="#" className="text-3xl leading-7">
        Contact
      </Link>
    </nav>
  );
}
