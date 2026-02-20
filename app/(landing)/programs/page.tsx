import Programs from "@/components/programsDisplay/Programs";

export default function ProgramsPage() {
  return (
    <div className="w-full h-fit">
      <section className="w-full h-[50dvh] min-h-fit flex flex-col gap-10 justify-center items-center bg-fixed bg-cover bg-bottom bg-brightness-50 bg-[url('/illuminate.jpg')]">
        <div className="flex flex-col w-full h-full bg-black/50 justify-center items-center gap-2">
          <h1 className="text-center text-2xl lg:text-4xl font-semibold">OUR PROGRAMS</h1>
          <p className="text-center text-lg">Learn more about our intiatives in the region</p>
        </div>
      </section>
      <section className="w-full px-2 py-16 lg:p-16 min-h-fit flex flex-col gap-10 justify-center items-center bg-neutral-100">
        <Programs fullView={true} />
      </section>
    </div>
  );
}
