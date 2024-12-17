import { GalleryImage, SectionTitleImage } from "../../assets/images";
import Image from "next/image";

export function Gallery() {
  const images = [
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
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
            <Image className="w-full" height={200} src={img} alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}
