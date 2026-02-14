export default function HomePage() {
  return (
    <section className="w-full h-dvh flex flex-col gap-10 justify-center items-center">
      <video
        className="absolute z-0 w-full h-full object-cover pointer-events-none opacity-50"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/uaeyfc-hero-video.mp4"></source>
      </video>
      <h1 className="z-10 text-7xl uppercase max-w-6xl text-center">
        Empowering young people from every walk of life
      </h1>
      <div className="z-10 flex gap-4">
        <button className="rounded-lg p-4 border">LEARN MORE</button>
        <button className="rounded-lg p-4 border">GET IN TOUCH</button>
      </div>
    </section>
  );
}
