"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EmblaCarousel(props: {
  images: { url: string; alt: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const goTo = (index: number) => emblaApi?.scrollTo(index);
  const setupSnaps = (api: typeof emblaApi) =>
    setScrollSnaps(api?.scrollSnapList());
  const setActiveSnap = (api: typeof emblaApi) =>
    setSelectedSnap(api?.selectedScrollSnap() ?? 0);

  useEffect(() => {
    if (!emblaApi) return;

    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);

    emblaApi.on("reinit", setupSnaps);
    emblaApi.on("reinit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  return (
    <div className="embla flex flex-col items-center gap-4 w-full">
      <div
        className="embla__viewport overflow-hidden w-full rounded-lg"
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y touch-pinch-zoom ">
          {props.images.map((image) => (
            <div
              className="embla__slide grow-0 shrink-0 basis-full min-w-0 w-full"
              key={image.url}
            >
              <div className="w-full relative aspect-video">
                <Image
                  className="embla_slide w-full h-full rounded-lg aspect-video object-cover"
                  src={image.url}
                  alt={image.alt}
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots flex gap-4 justify-center items-center">
        {scrollSnaps.map((_, index) => (
          <div
            className={"cursor-pointer rounded-full w-4 h-4 border border-neutral-600 embla__dot".concat(
              index === selectedSnap
                ? " embla__dot--selected bg-neutral-600"
                : "",
            )}
            key={index}
            onClick={() => goTo(index)}
          ></div>
        ))}
      </div>

      {/* <div className="flex justify-between items-center w-full">
        <button className="embla__prev rounded-lg p-2 font-semibold border hover:bg-black hover:text-white text-black transition-all cursor-pointer" onClick={goToPrev}>
          Back
        </button>
        <button className="embla__next rounded-lg p-2 font-semibold border hover:bg-black hover:text-white text-black transition-all cursor-pointer" onClick={goToNext}>
          Next
        </button>
      </div> */}
    </div>
  );
}
