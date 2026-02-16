import Image from "next/image";
import Link from "next/link";

export default function Navbar(props: {
  paths: { name: string; link: string }[];
  sidebutton?: {
    name: string;
    link: string;
  };
}) {
  return (
    <nav className="fixed flex items-center justify-between absolute top-0 py-4 px-16 w-full z-50 bg-linear-to-b from-black/75 to-black/0 rounded-lg">
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
