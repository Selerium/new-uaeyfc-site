import Navbar from "@/components/navbar/navbar";
import { jost } from "../layout";

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
            { name: "ABOUT", link: "/about" },
            { name: "PROGRAMS", link: "/programs" },
            { name: "CONTACT", link: "#contact" },
          ]}
          sidebutton={{ name: "BLOG", link: "/blog" }}
        />
        {children}
      </body>
    </html>
  );
}
