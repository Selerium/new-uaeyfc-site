import EmblaCarousel from "@/components/carousel/carousel";
import { Church, Globe, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full h-fit">
      <section className="w-full h-dvh flex flex-col gap-10 justify-center items-center">
        <video
          className="fixed -z-10 w-full h-full object-cover pointer-events-none opacity-50"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/uaeyfc-hero-video.mp4"></source>
        </video>
        <h1 className="z-0 text-7xl font-medium uppercase max-w-6xl text-center">
          Empowering young people from every walk of life
        </h1>
        <div className="z-0 flex gap-4">
          <button className="rounded-lg p-4 border hover:bg-white hover:text-black transition-all cursor-pointer">
            LEARN MORE
          </button>
          <button className="rounded-lg p-4 border hover:bg-white hover:text-black transition-all cursor-pointer">
            GET IN TOUCH
          </button>
        </div>
      </section>
      <section className="w-full h-dvh flex flex-col gap-10 justify-center items-start bg-white px-16 py-32">
        <h1 className="text-4xl text-black font-semibold">ABOUT US</h1>
        <div className="flex gap-10 justify-center items-center">
          <div className="w-1/2 h-full flex flex-col justify-start items-start gap-4">
            <p className="text-lg text-black w-full">
              UAEYFC is committed to creating opportunities that allow teens to
              be exposed to and encounter Jesus. We want to see people make
              their own decisions and choices to respond to the Gospel truth
              with authenticity and genuinity in their faith walk.
            </p>
            <div className="flex flex-col gap-4 w-full text-black">
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 border border-neutral-500 rounded-lg">
                <Church strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold">Events that explore faith for teens to encounter the Gospel</p>
              </div>
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 border border-neutral-500 rounded-lg">
                <Heart strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold">Chance to make an educated & personal response to the story</p>
              </div>
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 border border-neutral-500 rounded-lg">
                <Globe strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold">Continue to explore & respond in a community of believers</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <EmblaCarousel
              images={[
                { alt: "image", url: "/test1.png" },
                { alt: "image", url: "/test2.png" },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
