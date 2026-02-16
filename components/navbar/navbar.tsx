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

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      console.log('---')
      console.log(window.innerHeight)
      setFlipColor(window.scrollY > (window.innerHeight - 25));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed flex items-center justify-between top-0 py-4 px-16 w-full z-50 rounded-lg ${flipColor ? 'text-black' : 'text-white'}`}>
      <Link href="/">
        <Image src="/logo.png" width={51} height={0} alt="UAEYFC Logo" />
      </Link>
      <div className="flex gap-10">
        {props.paths.map((path) => (
          <Link key={path.name} href={path.link}>{path.name}</Link>
        ))}
      </div>
      {props.sidebutton && (
        <Link className="w-12" href={props.sidebutton.link}>{props.sidebutton.name}</Link>
      )}
    </nav>
  );
}
