import EmblaCarousel from "@/components/carousel/carousel";
import ContactForm from "@/components/form/ContactForm";
import Programs from "@/components/programsDisplay/Programs";
import {
  Church,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-fit">
      <section className="w-full h-dvh min-h-fit flex flex-col gap-10 justify-center items-center">
        <video
          className="fixed -z-10 w-full h-full object-cover pointer-events-none opacity-50"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/uaeyfc-hero-video.mp4"></source>
        </video>
        <h1 className="z-0 text-4xl lg:text-7xl font-medium uppercase max-w-6xl text-center">
          Empowering young people from every walk of life
        </h1>
        <div className="z-0 flex gap-4">
          <Link className="button" href="#about">
            LEARN MORE
          </Link>
          <Link className="button" href="#contact">
            GET IN TOUCH
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="w-full h-dvh min-h-fit flex flex-col gap-4 lg:gap-10 justify-center items-start bg-neutral-100 px-8 lg:px-16 py-32 "
      >
        <h1 className="text-4xl text-black font-semibold">WHAT WE DO</h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-start items-start gap-4">
            <p className="text-lg text-black w-full">
              UAEYFC is committed to creating opportunities that allow teens and
              young people to grow and build each other up in a safe
              environment. We want to see young people make their own decisions
              and choices to be authentic and genuine in their walk in life,
              equipping them with the knowledge and skills to be the best
              version of themselves.
            </p>
            <div className="flex flex-col gap-4 w-full text-black">
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 bg-white border border-neutral-200 text-black shadow-sm rounded-lg">
                <Church strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold text-lg">
                  Events for young people to grow and be encouraged
                </p>
              </div>
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 bg-white border border-neutral-200 text-black shadow-sm rounded-lg">
                <Heart strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold text-lg">
                  The chance to make educated, personal choices for their life
                </p>
              </div>
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 bg-white border border-neutral-200 text-black shadow-sm rounded-lg">
                <Globe strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold text-lg">
                  A safe place to explore & respond along a community of young
                  people
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
            <EmblaCarousel
              images={[
                { alt: "A UAEYFC event photo", url: "/carousel-1.jpg" },
                { alt: "A UAEYFC event photo", url: "/carousel-2.jpg" },
                { alt: "A UAEYFC event photo", url: "/carousel-3.jpg" },
              ]}
            />
          </div>
        </div>
      </section>
      <section
        id="programs"
        className="w-full h-fit min-h-fit flex flex-col gap-10 items-center bg-neutral-100 px-8 lg:px-16"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl text-black font-semibold">PROGRAMS</h1>
          <p className="text-black text-center text-lg">
            Scroll and see what we're up to in the region
          </p>
        </div>
        <Programs />
      </section>
      <section
        id="contact"
        className="w-full h-dvh min-h-fit flex flex-col gap-4 justify-center items-center px-8 lg:px-16 py-32 relative bg-[url('/cross.jpg')] bg-fixed bg-cover bg-center"
      >
        <div className="flex flex-col gap-4 justify-center items-center w-full text-white">
          <h1 className="text-4xl text-center font-semibold">CONTACT US</h1>
          <p className="text-center">Fill out the form and we&apos;ll get in touch</p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
