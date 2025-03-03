import Image from "next/image";
import {
  Bride,
  BrideQR,
  FacebookIcon,
  Groom,
  GroomQR,
  QrCodeIcon,
  SectionTitleImage,
} from "../../assets/images";
import { Milestone } from "./Milestone";
import { formatDate } from "../../helpers";
import { Social } from "./Social";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../common/Modal";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Info() {
  const contents = [
    {
      title: "Câu chuyện của chúng mình.",
      // time: formatDate(new Date()),
      content: `Từ ĐỒNG NGHIỆP trở thành BẠN ĐỜI.`,
    },
    {
      title: "Lần đầu gặp nhau.",
      time: formatDate(new Date("2020/12/28")),
      content: `Ngày đầu chúng mình gặp nhau cũng là ngày đầu tiên Long chính thức là thành viên của trung tâm.`,
    },
    {
      title: "Lời yêu đầu.",
      time: formatDate(new Date("2022/01/08")),
      content: `Chúng mình đã có 1 khoảng thời gian khá dài tìm hiểu nhau, và sau hơn 1 năm đi quay cơm cùng nhau, chúng mình quyết định từ đồng nghiệp trở thành người yêu.`,
    },
    {
      title: "Anh úp sọt.",
      time: formatDate(new Date("2025/02/15")),
      content: `Ban đầu mình không tính lấy Long đâu, vì Long chưa chịu cầu hôn mình. Nhưng vào ngày dạm ngõ, trước thời điểm 2 bên gia đình chốt sổ, Long đã đeo nhẫn và thì thầm vào tai mình lời cầu hôn, úp sọt mình thành công. Dù sai quy trình nhưng vẫn đúng kết quả 😝`,
    },
    {
      title: "Ngày chung đôi!",
      time: formatDate(new Date("2025/03/15")),
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
          Chú Rể & Cô Dâu
        </h2>
      </div>
      <div className="flex items-center mt-20 flex-wrap">
        <div
          id="right-side-info"
          className="w-1/3 max-sm:w-full flex items-center flex-col bg-info h-[800px] justify-center p-4"
        >
          <Image
            src={Groom}
            alt="groom"
            className="rounded-[50%] max-w-[300px] w-full"
          />
          <p className="font-name text-4xl mt-10 text-center">Thành Long</p>

          <div id="socials" className="flex mt-3">
            <Social
              src={FacebookIcon}
              alt="facebook"
              href="https://www.facebook.com/longpt99"
              isBlank={true}
            />
            <Dialog>
              <DialogTrigger>
                <Image
                  width={25}
                  height={25}
                  src={QrCodeIcon}
                  alt={"qrcode"}
                  className={"mr-1 cursor-pointer"}
                />
              </DialogTrigger>
              <DialogContent className="p-0 w-auto border-none">
                <VisuallyHidden>
                  <DialogTitle>QR Code</DialogTitle>
                </VisuallyHidden>
                <Image
                  src={GroomQR}
                  alt="qr"
                  className="max-w-[500px] max-sm:w-[300px]"
                />
              </DialogContent>
            </Dialog>
          </div>
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
          id="left-side-info"
          className="w-1/3 max-sm:w-full flex items-center flex-col bg-info h-[800px] justify-center p-4"
        >
          <Image
            src={Bride}
            alt="bride"
            className="rounded-[50%] max-w-[300px] w-full"
          />
          <p className="font-name text-4xl mt-10 text-center">Hồng Thái</p>

          <div id="socials" className="flex mt-3">
            <Social
              src={FacebookIcon}
              alt="facebook"
              href="https://www.facebook.com/nht.4497"
              isBlank={true}
            />
            <Dialog>
              <DialogTrigger>
                <Image
                  width={25}
                  height={25}
                  src={QrCodeIcon}
                  alt={"qrcode"}
                  className={"mr-1 cursor-pointer"}
                />
              </DialogTrigger>
              <DialogContent className="p-0 w-auto border-none">
                <VisuallyHidden>
                  <DialogTitle>QR Code</DialogTitle>
                </VisuallyHidden>
                <Image
                  src={BrideQR}
                  alt="qr"
                  className="max-w-[500px] max-sm:w-[300px]"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
