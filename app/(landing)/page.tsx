export default function HomePage() {
  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <video
        className="absolute z-0 w-full h-full object-fill pointer-events-none"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/uaeyfc-hero-video.mp4"></source>
      </video>
      <h1 className="z-10 text-4xl uppercase max-w-lg text-center">
        Empowering young people from every walk of life
      </h1>
    </section>
  );
}
