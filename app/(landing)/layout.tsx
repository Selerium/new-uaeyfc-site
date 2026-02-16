import Navbar from "@/components/navbar/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar
          paths={[
            { name: "ABOUT", link: "/#about" },
            { name: "PROGRAMS", link: "/programs" },
            { name: "CONTACT", link: "/contact" },
          ]}
          sidebutton={{ name: "BLOG", link: "/blog" }}
        />
        {children}
      </body>
    </html>
  );
}
