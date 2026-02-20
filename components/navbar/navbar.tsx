'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(props: {
  paths: { name: string; link: string }[];
  sidebutton?: {
    name: string;
    link: string;
  };
}) {
  const [flipColor, setFlipColor] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setFlipColor(window.scrollY > ((window.innerHeight / 2) - 25));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-all fixed flex items-center justify-between top-0 py-8 px-8 lg:px-16 w-full z-50 ${flipColor || menu ? 'text-black bg-white/75 backdrop-blur-2xl' : 'text-white'}`}>
      <Link href="/" className="not-lg:w-1/3 z-30">
        <Image src="/logo.png" width={200} height={0} className={`w-48 ${flipColor || menu ? '' : 'invert-100 grayscale'}`} alt="UAEYFC Logo" />
      </Link>
      <div className="hidden lg:flex gap-10">
        {props.paths.map((path) => (
          <Link className={path.link.toLowerCase() == pathname.toLowerCase() ? 'font-semibold' : 'font-normal'} key={path.name} href={path.link}>{path.name}</Link>
        ))}
      </div>
      {props.sidebutton && (
        <Link className="hidden lg:block w-48 text-right" href={props.sidebutton.link}>{props.sidebutton.name}</Link>
      )}
      {!menu && <Menu className="w-6 h-6 lg:hidden z-30" onClick={() => {setMenu(true)}} />}
      {menu && <X className="w-6 h-6 lg:hidden z-30" onClick={() => {setMenu(false)}} />}
      <div className={`fixed top-0 left-0 bg-white/100 backdrop-blur-2xl w-dvw h-dvh flex flex-col justify-center items-center text-black transition-all ${menu ? 'opacity-100' : 'opacity-0 -translate-y-full pointer-options-none'}`}>
        <div className="flex flex-col items-center gap-10 z-20">
          {props.paths.map((path) => (
            <Link onClick={() => setMenu(false)} className={path.link.toLowerCase() == pathname.toLowerCase() ? 'font-semibold' : 'font-normal'} key={path.name} href={path.link}>{path.name}</Link>
          ))}
          {props.sidebutton && (
            <Link onClick={() => setMenu(false)} className="hidden lg:block w-48 text-right" href={props.sidebutton.link}>{props.sidebutton.name}</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
