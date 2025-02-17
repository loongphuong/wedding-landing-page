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
      src: WeddingMarry2Icon,
      title: "Tiệc cưới nhà gái",
      date: "Thứ Sáu, 14 tháng 3, 2025",
      time: "05:00 PM",
      locationTitle: "Tại tư gia nhà gái",
      locationDescription:
        "SN 40, ngõ 59 đường Đình Hát, Sơn Đồng, Hoài Đức, Hà Nội",
      mapSrc: "https://goo.gl/maps/Xt1v3e21U8sScUN48",
    },
    {
      src: WeddingMarryIcon,
      title: "Lễ vu quy",
      date: "Thứ Bảy, 15 tháng 3, 2025",
      time: "08:00 AM",
      locationTitle: "Tại tư gia nhà gái",
    },
    {
      src: WeddingMarry2Icon,
      title: "Đón khách",
      date: "Thứ Bảy, 15 tháng 3, 2025",
      time: "10:30h AM",
      locationTitle: "Tại Trung Tâm Hội Nghị Tiệc Cưới Sen Hồng",
      locationDescription: "614 Đ. Lạc Long Quân, Hà Nội",
      mapSrc:
        "https://maps.google.com/maps?q=Trung+Tâm+Hội+Nghị+Tiệc+Cưới+Sen+Hồng",
    },
    {
      src: WeddingMarry3Icon,
      title: "Khởi hành hôn lễ",
      subTitle: "Khai tiệc",
      date: "Thứ Bảy, 15 tháng 3, 2025",
      time: "11h AM",
      locationTitle: "Tại Trung Tâm Hội Nghị Tiệc Cưới Sen Hồng",
      locationDescription: "614 Đ. Lạc Long Quân, Hà Nội",
      mapSrc:
        "https://maps.google.com/maps?q=Trung+Tâm+Hội+Nghị+Tiệc+Cưới+Sen+Hồng",
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
            className="shadow-outer px-[16px] py-[16px] w-[20%] max-md:w-[90%] max-sm:w-full flex items-center justify-center flex-col h-[400px] bg-white -mt-32 max-md:mt-0"
          >
            <div className="h-1/2 pt-10">
              <Image
                src={item.src}
                alt={item.title}
                width={60}
                className="mx-auto my-0"
              />
              <h4 className="uppercase text-xl mt-5 font-bold text-center">
                {item.title}
              </h4>
              {item.subTitle && (
                <h5 className="uppercase text-xl font-bold text-center">
                  {item.subTitle}
                </h5>
              )}
            </div>
            <div className="text-center h-1/2">
              <span className="block text-lg">{item.date}</span>
              <span className="block text-lg mt-2">{item.time}</span>
              <span className="block text-lg capitalize mt-2">
                {item.locationTitle}
              </span>
              {item.mapSrc ? (
                <Link href={item.mapSrc} target="_blank">
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
