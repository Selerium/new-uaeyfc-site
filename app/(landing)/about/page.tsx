export default function AboutPage() {
  return (
    <div className="w-full h-fit">
      <section className="w-full h-[50dvh] min-h-fit flex flex-col gap-10 justify-center items-center bg-fixed bg-cover bg-bottom bg-brightness-50 bg-[url('/team.jpg')]">
        <div className="flex flex-col w-full h-full bg-black/50 justify-center items-center gap-2">
          <h1 className="text-4xl font-semibold">ABOUT US</h1>
          <p className="text-lg">
            Get to know us better
          </p>
        </div>
      </section>
      <section className="w-full p-16 min-h-fit flex flex-col gap-10 justify-center items-center bg-neutral-100">
        
      </section>
    </div>
  );
}
