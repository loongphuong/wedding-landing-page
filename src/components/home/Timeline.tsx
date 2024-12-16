import Link from "next/link";
import { Icon1Image, Icon2Image, SectionTitleImage } from "../../assets/images";
import Image from "next/image";

export function Timeline() {
  const items = [
    {
      src: Icon2Image,
      title: "Lễ gia tiên",
      date: "Thứ Bảy, 16 Mar 2025",
      time: "10:00 AM",
      locationTitle: "Tổ chức tại tư gia",
      locationDescription: "Xuân La, Tây Hồ, Hà Nội",
    },
    {
      src: Icon1Image,
      title: "Đón khách",
      date: "Thứ Bảy, 16 Mar 2025",
      time: "10:30h AM",
      locationTitle: "Trung Tâm Hội Nghị Tiệc Cưới Sen Hồng",
      locationDescription: "614 Đ. Lạc Long Quân",
      mapSrc: "#location",
    },
    {
      src: Icon2Image,
      title: "Khởi hành hôn lễ",
      date: "Thứ Bảy, 16 Mar 2025",
      time: "11h AM",
      locationTitle: "Trung Tâm Hội Nghị Tiệc Cưới Sen Hồng",
      locationDescription: "614 Đ. Lạc Long Quân",
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
      <div className="flex justify-around mt-48 bg-[#FDF5ED] pb-32">
        {items.map((item, i) => (
          <div
            key={i}
            className="shadow-outer px-28 py-10 w-[30%] flex items-center flex-col h-[400px] bg-white -mt-32"
          >
            <div>
              <Image src={item.src} alt={item.title} className="mx-auto my-0" />
              <h4 className="uppercase text-xl mt-5">{item.title}</h4>
            </div>
            <div className="text-center">
              <span className="block text-lg mt-10">{item.date}</span>
              <span className="block text-lg">{item.time}</span>
              <span className="block text-lg">{item.locationTitle}</span>
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
