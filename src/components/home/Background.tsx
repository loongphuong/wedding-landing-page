import CountdownTimer from "./CountDownTimer";

export function Background() {
  return (
    <section id="home">
      <div className="relative flex select-none">
        <div>
          <div className="overflow-hidden">
            <div className="h-screen w-screen bg-bg_slider bg-cover bg-top animate-all"></div>
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
