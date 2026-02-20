"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Programs(props: { fullView?: boolean }) {
  const programsInfo = [
    {
      name: "BIG WEEKEND",
      description:
        "Big Weekend is UAEYFC's annual youth conference, inviting teens and youth leaders from across the UAE for a weekend of workshops, teaching, and fellowship.",
      imageUrl: "/big-weekend.jpg",
      imageAlt: "A picture of Big Weekend",
      pageLink: "/big-weekend",
      active: true,
      nextDate: "NOV 2026",
    },
    {
      name: "LAUNCH CONFERENCE",
      description:
        "Launch is an event that helps graduating students with the transition from high school to university and beyond. It is a significant event to help facilitate the transition from teenage to adulthood.",
      imageUrl: "/launch-conf.jpg",
      imageAlt: "",
      pageLink: "/launch-conference",
      active: true,
      nextDate: "FEB 2027",
    },
    {
      name: "OUTREACH JAPAN",
      description:
        "Outreach is an opportunity for young people to encounter volunteer work and gain experience in supporting communities, all while serving the less supported to then have the chance to be encouraged and motivated.",
      imageUrl: "/outreach-japan.jpg",
      imageAlt: "",
      pageLink: "/outreach-japan",
      active: true,
      nextDate: "JUL 2026",
    },
    {
      name: "TANGIBLE SUPPORT",
      description:
        "A podcast created with the intention to provide tangible resources for young people who grew up and/or live in the Gulf pertaining to their multicultural needs and realities.",
      imageUrl: "/tangible-support.jpg",
      imageAlt: "",
      pageLink: "/event-name",
      active: true,
      nextDate: "SPRING 2026",
    },
    {
      name: "EQUIP/EQUIP+",
      description:
        "Equip and Equip+ are youth leader training/retreat events that provide a space for youth leaders to be trained with leadership skills and be refreshed mentally alongside leaders across the UAE.",
      imageUrl: "/equip.jpg",
      imageAlt: "",
      pageLink: "/event-name",
      active: true,
      nextDate: "APRIL 2026",
    },
    {
      name: "ILLUMINATE",
      description:
        "A one day event for teens and youth to practically grow in knowledge and skills while developing community outside of their usual environments.",
      imageUrl: "/illuminate.jpg",
      imageAlt: "",
      pageLink: "/event-name",
      active: false,
      nextDate: "SEP 2026",
    },
    {
      name: "TCK/CCK TRAINING",
      description:
        "Training events to educate about the TCK/CCK world, for parents to learn about its impact on their kids, and for youth to learn about how this environment affects their life & how to live through and around it.",
      imageUrl: "/tck-cck.jpg",
      imageAlt: "",
      pageLink: "/event-name",
      active: false,
      nextDate: "SEP 2026",
    },
  ];

  useEffect(() => {
    const slider = window.document.querySelector(".scroll-container");
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    if (slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseup", () => (isDown = false));
      slider.addEventListener("mouseleave", () => (isDown = false));
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        slider.scrollLeft = scrollLeft - (x - startX);
      });
    }
  });

  return (
    <div
      className={`select-none ${props.fullView ? "flex-wrap justify-center" : "scroll-container cursor-grab active:cursor-grabbing justify-start"} flex items-center overflow-x-scroll gap-4 lg:gap-10 w-full h-fit pb-10 lg:py-20 text-black relative`}
    >
      {programsInfo.map((program) => (
        <div
          key={program.name}
          className="flex flex-col rounded-lg min-w-[275px] lg:min-w-[450px] max-w-[450px] min-h-fit border border-neutral-300 overflow-hidden bg-white transition-all hover:shadow-xl hover:-translate-y-2"
        >
          <div className="w-full aspect-video relative">
            <Image
              src={program.imageUrl}
              alt={program.imageAlt}
              className="w-full aspect-video object-cover select-none"
              fill
            />
          </div>
          <div className="flex flex-col p-4 justify-between h-92 lg:h-64">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center w-full">
                <p className="select-none font-semibold text-xl lg:text-2xl">
                  {program.name}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <div
                    className={`select-none p-2 font-semibold rounded-lg ${program.active ? "bg-green-600" : "bg-neutral-600"} text-white`}
                  >
                    {program.active ? program.nextDate : "UPCOMING"}
                  </div>
                </div>
              </div>
              <p className="select-none">{program.description}</p>
            </div>
            <Link
              className="select-none w-full text-center p-4 rounded-lg border border-neutral-300 hover:bg-black hover:text-white font-semibold transition-all"
              href={`/programs${program.pageLink}`}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
