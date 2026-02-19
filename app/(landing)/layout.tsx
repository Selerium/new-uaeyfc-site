import Navbar from "@/components/navbar/navbar";
import { jost } from "../layout";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.className}>
      <body>
        <Navbar
          paths={[
            { name: "HOME", link: "/" },
            { name: "PROGRAMS", link: "/programs" },
            { name: "CONTACT", link: "/#contact" },
          ]}
          sidebutton={{ name: "BLOG", link: "/blog" }}
        />
        {children}
        <footer className="h-fit px-16 py-24 border-t border-neutral-300 bg-neutral-800 text-white flex justify-between">
        <div className="w-1/3">
          <Image src="/logo.png" width={200} height={0} className={`w-48 invert grayscale-100`} alt="UAEYFC Logo" />
        </div>
        <div className="flex flex-col items-start gap-2 w-1/3">
          <Link href='/about' className="font-semibold w-fit h-fit">About</Link>
          <Link href='/programs' className="font-semibold w-fit h-fit">Programs</Link>
          <Link href='/#contact' className="font-semibold w-fit h-fit">Contact</Link>
          <Link href='/blog' className="font-semibold w-fit h-fit">Blog</Link>
        </div>
        <div className="flex gap-4 w-1/3">
          <Link href='https://instagram.com/uaeyfc' className="w-fit h-fit"><Instagram className="w-8 h-8" /></Link>
          <Link href='https://instagram.com/uaeyfc' className="w-fit h-fit"><Youtube className="w-8 h-8" /></Link>
          <Link href='https://instagram.com/uaeyfc' className="w-fit h-fit"><Facebook className="w-8 h-8" /></Link>
        </div>
      </footer>
      </body>
    </html>
  );
}
