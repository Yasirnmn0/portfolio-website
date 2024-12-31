import { Html, Head, Main, NextScript } from "next/document";
import { inter, calistoga } from "@/pages/_app";
import { twMerge } from "tailwind-merge";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
