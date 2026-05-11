import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bileDemo = localFont({
  src: "../../public/fonts/Bile Demo.ttf",
  variable: "--font-display",
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
      className={bileDemo.variable}
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
