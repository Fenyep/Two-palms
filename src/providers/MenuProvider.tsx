"use client";

import MenuContext from "@/contexts/MenuContext";
import React from "react";

const navlinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Location", href: "/location" },
  { label: "About", href: "/about" },
];

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <MenuContext.Provider value={{ isOpened, setIsOpened, navlinks }}>
      {children}
    </MenuContext.Provider>
  );
}
