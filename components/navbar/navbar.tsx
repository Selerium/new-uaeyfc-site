'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(props: {
  paths: { name: string; link: string }[];
  sidebutton?: {
    name: string;
    link: string;
  };
}) {
  const [flipColor, setFlipColor] = useState(false);
  const [chosenElement, setChosenElement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setFlipColor(window.scrollY > (window.innerHeight - 25));
      console.log(window.scrollY - 25);
      console.log(window.innerHeight);
      console.log(chosenElement);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed flex items-center justify-between top-0 py-8 px-16 w-full z-50 ${flipColor ? 'text-black bg-white/75 backdrop-blur-2xl border-b border-neutral-300' : 'text-white'}`}>
      <Link href="/">
        <Image src="/logo.png" width={200} height={0} className={`w-48 ${flipColor ? '' : 'invert-100 grayscale'}`} alt="UAEYFC Logo" />
      </Link>
      <div className="flex gap-10">
        {props.paths.map((path, idx) => (
          <Link className={idx + 1 == chosenElement ? 'font-semibold' : 'font-normal'} key={path.name} href={path.link}>{path.name}</Link>
        ))}
      </div>
      {props.sidebutton && (
        <Link className="w-48 text-right" href={props.sidebutton.link}>{props.sidebutton.name}</Link>
      )}
    </nav>
  );
}
