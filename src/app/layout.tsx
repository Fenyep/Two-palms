import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuProvider from "@/providers/MenuProvider";
import Main from "@/components/main/Main";

const century_gothic = localFont({
  src: [
    {
      path: "./font/CenturyGothic/centurygothic.ttf",
      weight: "300",
      style: "regular",
    },
    {
      path: "./font/CenturyGothic/centurygothic_bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/images/landingPage/image7.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "Two Palms Productions",
    description: "We are a BRAZILIAN Full-Service Production Company",
  },
  title: "Two Palms",
  description: "We are a BRAZILIAN Full-Service Production Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${century_gothic.className} relative antialiased bg-white`}>
        <MenuProvider>
          <Main>{children}</Main>
        </MenuProvider>
      </body>
    </html>
  );
}
