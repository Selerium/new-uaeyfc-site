import Link from "next/link";

export async function generateStaticParams() {
  return [{ name: "big-weekend" }];
}

export default async function SpecificProgram({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const { name } = await params;
  const disable = true;

  return (
    <div className="w-full h-fit">
      {disable && (
        <div className="flex flex-col justify-center items-center gap-4 w-full h-full fixed top-0 left-0 bg-neutral-100 text-black z-50">
          <h1 className="text-4xl font-semibold">
            {"THIS PAGE IS UNDER CONSTRUCTION :)"}
          </h1>
          <p>{"(sorry about that)"}</p>
          <Link href="/" className="button">
            GO TO HOME
          </Link>
        </div>
      )}
      <section className="w-full h-[50dvh] min-h-fit flex flex-col gap-10 justify-center items-center bg-fixed bg-cover bg-bottom bg-brightness-50 bg-[url('/big-weekend.jpg')]">
        <div className="flex flex-col w-full h-full bg-black/50 justify-center items-center gap-2"></div>
      </section>
    </div>
  );
}
