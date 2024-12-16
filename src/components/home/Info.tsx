import Image from "next/image";
import { BrideImage, GroomImage, SectionTitleImage } from "../../assets/images";
import { Milestone } from "./Milestone";
import { formatDate } from "../../helpers";

export function Info() {
  const contents = [
    {
      title: "Our love story.",
      time: formatDate(new Date()),
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat, quidem modi iste qui recusandae voluptatem officiis natus`,
    },
    {
      title: "First time we met.",
      time: formatDate(new Date()),
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat, quidem modi iste qui recusandae voluptatem officiis natus`,
    },
    {
      title: "He asked & she said yes.",
      time: formatDate(new Date()),
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat, quidem modi iste qui recusandae voluptatem officiis natus`,
    },
    {
      title: "The wedding day!",
      time: formatDate(new Date()),
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
          Cô Dâu & Chú Rể
        </h2>
      </div>
      <div className="flex items-center mt-20 flex-wrap">
        <div
          id="left-side-info"
          className="w-1/3 max-sm:w-full flex items-center flex-col bg-[#FDF5ED] h-[800px] justify-center p-4"
        >
          <Image src={BrideImage} alt="bride" />
          <p className="font-name text-4xl mt-10 text-center">Hồng Thái</p>
          <span className="mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quisquam aperiam veniam assumenda, recusandae voluptatum ipsum
            corporis in quibusdam. Quisquam quam, ullam assumenda porro
            blanditiis maxime rerum corrupti tempore doloribus!
          </span>
        </div>
        <div
          id="milestone-info"
          className="w-1/3 max-sm:w-full flex items-center flex-col px-10 py-20 shadow-outer"
        >
          <div>
            {contents.map((item, i) => (
              <Milestone
                time={item.time}
                title={item.title}
                content={item.content}
                key={i}
              />
            ))}
          </div>
        </div>
        <div
          id="right-side-info"
          className="w-1/3 max-sm:w-full flex items-center flex-col bg-[#FDF5ED] h-[800px] justify-center p-4"
        >
          <Image src={GroomImage} alt="groom" />
          <p className="font-name text-4xl mt-10 text-center">Thành Long</p>
          <span className="mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quisquam aperiam veniam assumenda, recusandae voluptatum ipsum
            corporis in quibusdam. Quisquam quam, ullam assumenda porro
            blanditiis maxime rerum corrupti tempore doloribus!
          </span>
        </div>
      </div>
    </section>
  );
}
