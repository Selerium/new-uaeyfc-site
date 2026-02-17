import EmblaCarousel from "@/components/carousel/carousel";
import { Church, Globe, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const programsInfo = [
    {
      name: "BIG WEEKEND",
      description:
        "Big Weekend is UAEYFC's annual youth conference, inviting teens and youth leaders from across the UAE for a weekend of worship, prayer, teachings and fellowship.",
      imageUrl: "/test1.png",
      imageAlt: "A picture of Big Weekend",
      pageLink: "/big-weekend",
      active: true,
      nextDate: "NOV 2026",
    },
    {
      name: "LAUNCH CONFERENCE",
      description:
        "Launch is an event that helps graduating students with the transition from high school to university and beyond. It is a significant event to help facilitate the transition from teenage to adulthood.",
      imageUrl: "/test1.png",
      imageAlt: "",
      pageLink: "/launch-conference",
      active: true,
      nextDate: "FEB 2027",
    },
    {
      name: "OUTREACH JAPAN",
      description:
        "Outreach is an opportunity for young people to encounter mission work and gain experience in sharing their faith, all while serving the least reached who can thus have the chance to be exposed & encounter the Gospel.",
      imageUrl: "/test1.png",
      imageAlt: "",
      pageLink: "/outreach-japan",
      active: true,
      nextDate: "JUL 2026",
    },
    {
      name: "TANGIBLE SUPPORT",
      description:
        "A podcast created with the intention to provide tangible resources for young people who grew up and/or live in the Gulf pertaining to their spiritual and multicultural needs and realities",
      imageUrl: "/test1.png",
      imageAlt: "",
      pageLink: "/event-name",
      active: true,
      nextDate: "SPRING 2026",
    },
    {
      name: "EQUIP/EQUIP+",
      description:
        "Equip and Equip+ are youth leader training/retreat events that provide a space for youth leaders to be trained with ministry skills and be refreshed spiritually & mentally with leaders across the UAE.",
      imageUrl: "/test1.png",
      imageAlt: "",
      pageLink: "/event-name",
      active: true,
      nextDate: "APRIL 2026",
    },
    {
      name: "ILLUMINATE",
      description:
        "A one day event for teens/youth to practically grow in their faith while developing Christian community outside of their usual Christian environment.",
      imageUrl: "/test1.png",
      imageAlt: "",
      pageLink: "/event-name",
      active: false,
      nextDate: "SEP 2026",
    },
    {
      name: "TCK/CCK TRAINING",
      description:
        "Training events to educate about the TCK/CCK world, for parents to learn about its impact on their kids, and for youth to learn about how this environment affects their life & how to live through and around it.",
      imageUrl: "/test1.png",
      imageAlt: "",
      pageLink: "/event-name",
      active: false,
      nextDate: "SEP 2026",
    },
  ];

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
          <button>LEARN MORE</button>
          <button>GET IN TOUCH</button>
        </div>
      </section>
      <section
        id="about"
        className="w-full h-dvh flex flex-col gap-10 justify-center items-start bg-neutral-100 px-16 py-32"
      >
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
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 bg-white border border-neutral-200 text-black shadow-sm rounded-lg">
                <Church strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold text-lg">
                  Events for young people to encounter the Gospel
                </p>
              </div>
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 bg-white border border-neutral-200 text-black shadow-sm rounded-lg">
                <Heart strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold text-lg">
                  The chance to make an educated, personal response to Christ
                </p>
              </div>
              <div className="grow flex flex-col justify-center items-center gap-4 p-4 bg-white border border-neutral-200 text-black shadow-sm rounded-lg">
                <Globe strokeWidth={1} className="w-16 h-16" />
                <p className="font-semibold text-lg">
                  A safe place to explore & respond along a community of
                  believers
                </p>
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
      <section
        id="programs"
        className="w-full h-dvh flex flex-col gap-10 justify-start items-center bg-neutral-100 px-16 py-32"
      >
        <h1 className="text-4xl text-black font-semibold">PROGRAMS</h1>
        <div className="flex justify-start items-center overflow-x-scroll gap-10 w-full h-full text-black relative ">
          {programsInfo.map((program) => (
            <div className="flex flex-col rounded-lg min-w-1/4 h-11/12 border border-neutral-300 overflow-hidden bg-white transition-all hover:shadow-xl hover:-translate-y-2">
              <Image
                src={program.imageUrl}
                alt={program.imageAlt}
                className="w-full"
                width={0}
                height={0}
              />
              <div className="flex flex-col p-4 justify-between h-full">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-semibold text-2xl">{program.name}</p>
                    <div className="flex gap-2 flex-wrap">
                      <div
                        className={`p-2 font-semibold rounded-lg ${program.active ? "bg-green-600" : "bg-neutral-600"} text-white`}
                      >
                        {program.active ? program.nextDate : "UPCOMING"}
                      </div>
                    </div>
                  </div>
                  <p>{program.description}</p>
                </div>
                <Link
                  className="w-full text-center p-4 rounded-lg border border-neutral-300 hover:bg-black hover:text-white font-semibold transition-all"
                  href={program.pageLink}
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
