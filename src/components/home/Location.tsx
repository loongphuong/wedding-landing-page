import Image from "next/image";
import { PinkHeartIcon, WhiteHeartIcon } from "../../assets/images";

export function Location() {
  return (
    <footer id="location" className="mt-20">
      <div className="bg-footer h-[550px] relative bg-cover bg-scroll bg-[center_center] bg-no-repeat text-white">
        <div className="absolute block w-full h-full bg-black opacity-30 top-0"></div>
        <div className="absolute table h-full w-full">
          <div className="align-middle text-center table-cell">
            <div className="mx-auto px-[15px]">
              <div>
                <div className="text-center text-white rotate-[-10deg] mt-10 mb-[25px] pr-[30px]">
                  <div className="text-[55px] leading-[45px]">Thank</div>
                  <div className="text-[55px] leading-[45px]">You</div>
                </div>
                <div className="h-full w-full text-center mx-auto my-5">
                  <span className="w-[30px] h-2 inline-block border-t border-t-solid border-t-white"></span>
                  <Image
                    alt="icon"
                    src={PinkHeartIcon}
                    className="inline-block"
                  />
                  <Image
                    alt="icon"
                    src={WhiteHeartIcon}
                    className="inline-block"
                  />
                  <span className="w-[30px] h-2 inline-block border-t border-t-solid border-t-white"></span>
                </div>
                <div className="text-xl text-white tracking-[3px] mt-2.5">
                  Thành Long & Hồng Thái
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
