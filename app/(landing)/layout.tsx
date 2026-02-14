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
            { name: "About", link: "/" },
            { name: "Programs", link: "/programs" },
            { name: "Contact", link: "/contact" },
          ]}
          sidebutton={{ name: "Blog", link: "/blog" }}
        />
        {children}
      </body>
    </html>
  );
}
