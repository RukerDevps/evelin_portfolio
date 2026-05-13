import type { Metadata } from "next";
import localFont from "next/font/local";
import { InitialLoadGate } from "@/components/layout/InitialLoadGate";
import "./globals.css";

const bileDemo = localFont({
  src: "../../public/fonts/Bile Demo.ttf",
  variable: "--font-display",
});

const kudryashev = localFont({
  src: "../../public/fonts/Kudryashev Display Sans.ttf",
  variable: "--font-kudryashev",
});

export const metadata: Metadata = {
  title: "Evelin Elizabeth VP | Copywriter Portfolio",
  description:
    "A scrapbook-style portfolio for Evelin Elizabeth VP, showcasing editorial storytelling, brand voice, and content writing.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${bileDemo.variable} ${kudryashev.variable}`}
    >
      <body>
        <InitialLoadGate>{children}</InitialLoadGate>
      </body>
    </html>
  );
};

export default RootLayout;
