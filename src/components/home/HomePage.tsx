"use client";

import { useState, useRef, useEffect } from "react";
import { Background } from "./Background";
import { Gallery } from "./Gallery";
import { Info } from "./Info";
import { Location } from "./Location";
import { Timeline } from "./Timeline";
import Link from "next/link";
import Image from "next/image";
import { TopIcon } from "../../assets/images";

export function HomePage() {
  const [showScrollToHome, setShowScrollToHome] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollToHome(!entry.isIntersecting); // Show button when Background is not visible
      },
      { threshold: 0.1 } // Adjust threshold to trigger when 10% of Background is visible
    );

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      if (backgroundRef.current) {
        observer.unobserve(backgroundRef.current);
      }
    };
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    // Kiểm tra khi người dùng cuộn trang lần đầu tiên
    if (!hasScrolled) {
      setHasScrolled(true);
      console.log(audioRef.current);
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Lỗi phát nhạc:", error);
        });
      }
    }
  };

  useEffect(() => {
    // Thêm sự kiện cuộn khi trang được tải
    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/music/marryyou.mp3" type="audio/mp3" />
        Trình duyệt của bạn không hỗ trợ thẻ audio.
      </audio>
      <div ref={backgroundRef}>
        <Background />
      </div>
      <Info />
      <Gallery />
      <Timeline />
      <Location />
      {showScrollToHome && (
        <Link
          href="#home"
          className="fixed bottom-6 right-4 rounded-full shadow-lg"
        >
          <Image src={TopIcon} alt="scroll_to_top" height={40} width={40} />
        </Link>
      )}
    </div>
  );
}
