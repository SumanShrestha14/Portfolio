import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Suman Shrestha",
    default: "Suman Shrestha",
  },
  description:
    "A unique creative portfolio designed by Suman Shrestha with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter min-h-screen"
        )}
      >
        <main>{children}</main>

        <FireFliesBackground />

        <Footer />

        <div id="my-modal" />
      </body>
    </html>
  );
}
