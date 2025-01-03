import Link from "next/link";
import {
  SectionTitleImage,
  WeddingMarry2Icon,
  WeddingMarry3Icon,
  WeddingMarryIcon,
} from "../../assets/images";
import Image from "next/image";

export function Timeline() {
  const items = [
    {
      src: WeddingMarryIcon,
      title: "Lễ gia tiên",
      date: "Thứ Bảy, 15 Mar 2025",
      time: "10:00 AM",
      locationTitle: "Tổ chức tại tư gia",
      locationDescription: "Xuân La, Tây Hồ, Hà Nội",
    },
    {
      src: WeddingMarry2Icon,
      title: "Đón khách",
      date: "Thứ Bảy, 15 Mar 2025",
      time: "10:30h AM",
      locationTitle: "Trung Tâm Hội Nghị Tiệc Cưới Sen Hồng",
      locationDescription: "614 Đ. Lạc Long Quân, Hà Nội",
      mapSrc: "#location",
    },
    {
      src: WeddingMarry3Icon,
      title: "Khởi hành hôn lễ",
      date: "Thứ Bảy, 15 Mar 2025",
      time: "11h AM",
      locationTitle: "Trung Tâm Hội Nghị Tiệc Cưới Sen Hồng",
      locationDescription: "614 Đ. Lạc Long Quân, Hà Nội",
      mapSrc: "#location",
    },
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
          Khi nào & Ở đâu
        </h2>
      </div>
      <div className="flex justify-around mt-48 bg-[#FDF5ED] pb-32 flex-wrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="shadow-outer px-[16px] py-[16px] w-[30%] max-sm:w-full flex items-center justify-center flex-col h-[400px] bg-white -mt-32 max-sm:mt-0"
          >
            <div className="h-1/2 pt-10">
              <Image
                src={item.src}
                alt={item.title}
                width={60}
                className="mx-auto my-0"
              />
              <h4 className="uppercase text-xl mt-5 text-centers">
                {item.title}
              </h4>
            </div>
            <div className="text-center h-1/2">
              <span className="block text-lg">{item.date}</span>
              <span className="block text-lg">{item.time}</span>
              <span className="block text-lg capitalize">
                {item.locationTitle}
              </span>
              {item.mapSrc ? (
                <Link href={item.mapSrc}>
                  <span className="block text-lg underline hover:opacity-50">
                    {item.locationDescription}
                  </span>
                </Link>
              ) : (
                <span className="block text-lg">
                  {item.locationDescription}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
