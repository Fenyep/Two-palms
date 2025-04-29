"use client";

import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import MobileNavigation from "@/components/navbar/MobileNavigation";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
import Reveal from "../animations/Reveal";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpened } = useMenuContext();
  return (
    <div className={`relative ${isOpened ? "h-dvh overflow-hidden" : ""}`}>
      <MobileNavigation />
      <Navbar />
      {children}

      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
