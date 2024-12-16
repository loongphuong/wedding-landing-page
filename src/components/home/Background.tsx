import Image from "next/image";
import { BackgroundImage } from "../../assets/images";
import CountdownTimer from "./CountDownTimer";

export function Background() {
  return (
    <section id="home">
      <div>
        <div className="relative flex">
          <Image
            src={BackgroundImage}
            alt="background"
            className="h-screen w-100% object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[white]">
            <h1 className="font-bold text-[6rem] font-name">Thái & Long</h1>
            <h3 className="mt-10 mb-10 text-xl font-thin uppercase">
              We are getting married at Mar 16, 2025
            </h3>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
