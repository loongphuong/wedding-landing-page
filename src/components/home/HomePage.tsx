"use client";

import { useState, useRef, useEffect } from "react";
import { Background } from "./Background";
import { Gallery } from "./Gallery";
import { Info } from "./Info";
import { Footer } from "./Footer";
import { Timeline } from "./Timeline";
import Link from "next/link";
import Image from "next/image";
import { TopIcon } from "../../assets/images";

export function HomePage() {
  const [showScrollToHome, setShowScrollToHome] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollToHome(!entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const handleStart = () => {
    setIsOverlayVisible(false); // Ẩn overlay
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Lỗi phát nhạc:", error);
      });
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/music/marryyou.mp3" type="audio/mp3" />
        Trình duyệt của bạn không hỗ trợ thẻ audio.
      </audio>

      {/* Overlay */}
      {isOverlayVisible && (
        <div
          className="fixed bg-footer bg-cover bg-center inset-0 flex items-center justify-center bg-opacity-80 text-white text-xl cursor-pointer"
          onClick={handleStart}
        >
          <p className="animate-bounce text-2xl font-semibold">
            Chạm để mở thiệp cưới ❤️
          </p>
        </div>
      )}

      {/* Nội dung chính */}
      {!isOverlayVisible && (
        <>
          <div ref={backgroundRef}>
            <Background />
          </div>
          <Info />
          <Gallery />
          <Timeline />
          <Footer />
          {showScrollToHome && (
            <Link
              href="#home"
              className="fixed bottom-6 right-4 rounded-full shadow-lg"
            >
              <Image src={TopIcon} alt="scroll_to_top" height={40} width={40} />
            </Link>
          )}
        </>
      )}
    </div>
  );
}
