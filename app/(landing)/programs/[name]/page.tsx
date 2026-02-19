export default async function SpecificProgram({ params }: {
    params: {
        name: string
    }
}) {
    const { name } = await params;

    return (
      <div className="w-full h-fit">
        <section className="w-full h-[50dvh] min-h-fit flex flex-col gap-10 justify-center items-center bg-fixed bg-cover bg-bottom bg-brightness-50 bg-[url('/big-weekend.jpg')]">
        <div className="flex flex-col w-full h-full bg-black/50 justify-center items-center gap-2">
          <h1 className="text-4xl font-semibold">BIG WEEKEND</h1>
        </div>
        </section>
      </div>
    )
}