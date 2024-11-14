import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="navbar bg-base-100">
            <div className="flex-1 flex items-center space-x-2">
              <Link href="/" className="btn text-lg font-semibold">
                CV Maker
              </Link>
            </div>

            <div className="flex justify-center items-center flex-1">
              <Link href="/" className="normal-case">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={90}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="flex flex-none space-x-2 items-center">
              <Link href="/" className="btn">
                Home
              </Link>
              <Link href="/editor" className="btn">
                Create CV
              </Link>
              <Link href="/previous-cv" className="btn">
                Old CV
              </Link>
              <Link href="/about" className="btn">
                About
              </Link>
              <Header />

              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
