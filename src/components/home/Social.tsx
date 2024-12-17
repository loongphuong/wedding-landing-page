import Link from "next/link";
import Image from "next/image";

interface SocialProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  styles?: string;
  href?: string;
  isBlank?: boolean;
}
export function Social(props: SocialProps) {
  const {
    src,
    width = 20,
    height = 20,
    alt,
    styles,
    href = "#",
    isBlank = false,
  } = props;
  let target = "_self";

  if (isBlank) {
    target = "_blank";
  }

  return (
    <Link href={href} target={target}>
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={styles || "mr-1"}
      />
    </Link>
  );
}
