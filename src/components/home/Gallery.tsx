import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../common/Modal";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  SectionTitleImage,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery7,
  Gallery8,
  Gallery6,
  Gallery5,
  Gallery4,
} from "../../assets/images";
import Image from "next/image";
import AutoHeight from "embla-carousel-auto-height";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../common/Carousel";

export function Gallery() {
  const images = [
    Gallery7,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery8,
    Gallery6,
    Gallery1,
  ];
  return (
    <section id="person-info" className="mt-20 max-w-[1400px] ml-auto mr-auto">
      <div className="text-center">
        <Image
          src={SectionTitleImage}
          alt="section_image"
          className="flex ml-auto mr-auto"
        />
        <h2 className="text-3xl uppercase font-extralight mt-2">
          Khoảnh khắc đáng nhớ
        </h2>
      </div>
      <div className="flex flex-wrap mt-10">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-1/4 max-md:w-1/2 p-4 max-sm:p-0 max-sm:w-full"
          >
            <Dialog>
              <DialogTrigger className="w-full">
                <Image className="w-full" src={img} alt="Gallery" />
              </DialogTrigger>
              <DialogContent className="p-0 w-auto border-none">
                <VisuallyHidden>
                  <DialogTitle>Image</DialogTitle>
                </VisuallyHidden>
                <div>
                  <Carousel
                    opts={{
                      loop: true,
                      startIndex: i,
                    }}
                    plugins={[AutoHeight()]}
                  >
                    <CarouselContent className="h-full">
                      {images.map((img, i) => (
                        <CarouselItem key={i} className="h-full">
                          <Image className="w-full" src={img} alt="Gallery" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white" />
                    <CarouselNext className="bg-white" />
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
