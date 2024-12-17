import Image from "next/image";
import { BackgroundImage } from "../../assets/images";
import CountdownTimer from "./CountDownTimer";

export function Background() {
  return (
    <section id="home">
      <div>
        <div className="relative flex">
          <div className="overflow-hidden">
            <Image
              src={BackgroundImage}
              alt="background"
              priority={true}
              className="h-screen w-screen object-cover animate-all"
            />
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] animate-topToBottom font-bold text-[6rem] font-name max-sm:text-[3rem] text-center select-none text-[white] w-full">
            Thái & Long
          </h1>
          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] animate-bottomToTopBgText text-white text-xl font-thin uppercase text-center w-full max-sm:-translate-x-2/4 max-sm:translate-y-[-5%] max-sm:text-base max-sm:animate-smBottomToTopBgText">
            We are getting married at Mar 15, 2025
          </h3>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 animate-bottomToTopBgTimer text-white max-sm:w-[95%] max-sm:-translate-x-2/4 max-sm:translate-y-2/4 max-sm:animate-smBottomToTopBgTimer">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
