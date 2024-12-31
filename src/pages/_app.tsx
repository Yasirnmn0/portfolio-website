import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Calistoga } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
