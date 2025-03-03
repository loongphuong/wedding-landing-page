"use client";

import { Background1 } from "../../assets/images";
import CountdownTimer from "./CountDownTimer";
import { Carousel, CarouselContent, CarouselItem } from "../common/Carousel";
import AutoPlay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useState } from "react";

export function Background() {
  const delayTime = 7000;
  const [activeIndex, setActiveIndex] = useState(0); // Track active index

  const handleChangeActive = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section id="home">
      <div className="relative flex select-none">
        <div>
          <div className="static">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoPlay({
                  delay: delayTime,
                  stopOnInteraction: false,
                }),
                Fade(),
              ]}
              handleChangeActive={handleChangeActive}
            >
              <CarouselContent>
                {[Background1].map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden h-screen w-screen bg-bg_slider bg-cover bg-top animate-all"></div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] max-sm:-translate-y-[250%] max-sm:animate-smBottomToBottom animate-topToBottom font-bold text-[8rem] max-lg:text-[6rem] font-name max-sm:text-[3.5rem] text-center text-[white] w-full">
          Long & Thái
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] animate-bottomToTopBgTimer text-white max-sm:px-10 max-w-[600px] w-full">
          <CountdownTimer />
        </div>
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2  translate-y-[400%] animate-bottomToTopBgText text-white text-4xl font-thin uppercase text-center w-full max-sm:-translate-x-2/4 max-sm:translate-y-[400%] max-sm:text-lg max-sm:animate-smBottomToTopBgText">
          Nhà có hỷ - 15 tháng 3, 2025
        </h3>
      </div>
    </section>
  );
}
