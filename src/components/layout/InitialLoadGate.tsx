// "use client" - requires browser preloading APIs, video events, and mount-time state for the entry gate.
"use client";

import { useEffect, useMemo, useState } from "react";

interface InitialLoadGateProps {
  children: React.ReactNode;
}

const LOADER_VIDEO_SRC = "/video/loading%20animation.mp4";

const CRITICAL_IMAGE_ASSETS = [
  "/images/background_notebook.jpg",
  "/images/header.png",
  "/images/landon.png",
  "/images/map.png",
  "/images/paperclip.png",
  "/images/portrait-happy-woman-with-diary-sitting-cafe.jpg",
  "/images/ship.png",
  "/images/sketch_underline.png",
  "/images/about.png",
  "/images/whatido01.jpg",
  "/images/whatido02.jpg",
  "/images/whatido03.jpg",
  "/images/whatido04.jpeg",
  "/images/whatido05.jpg",
  "/images/whatido06.png",
  "/images/brand01.png",
  "/images/brand02.png",
  "/images/brand03.png",
  "/images/brand004.png",
  "/images/brand05.png",
  "/images/brand06.png",
  "/images/brand07.png",
  "/images/brand08.png",
  "/images/adsbranding_images01.jpg",
  "/images/adsbranding_images02.jpg",
  "/images/adsbranding_images03.jpg",
  "/images/website_images01.jpg",
  "/images/website_images02.jpg",
  "/images/website_images03.jpg",
];

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;

    if (image.complete) {
      resolve();
    }
  });

const preloadVideo = (src: string) =>
  new Promise<void>((resolve) => {
    const video = document.createElement("video");

    const finish = () => {
      video.onloadeddata = null;
      video.onerror = null;
      resolve();
    };

    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.onloadeddata = finish;
    video.onerror = finish;
    video.src = src;
    video.load();

    if (video.readyState >= 2) {
      finish();
    }
  });

export const InitialLoadGate = ({ children }: InitialLoadGateProps) => {
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const assetCount = useMemo(
    () => CRITICAL_IMAGE_ASSETS.length + 1,
    []
  );

  useEffect(() => {
    let isCancelled = false;

    document.body.style.overflow = "hidden";

    const assetPromises = [
      ...CRITICAL_IMAGE_ASSETS.map((src) => preloadImage(src)),
      preloadVideo(LOADER_VIDEO_SRC),
    ];

    const minimumIntro = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1800);
    });

    Promise.all(assetPromises)
      .then(() => minimumIntro)
      .then(() => {
        if (isCancelled) {
          return;
        }

        setIsExiting(true);
        window.setTimeout(() => {
          if (isCancelled) {
            return;
          }

          setIsReady(true);
          document.body.style.overflow = "";
        }, 480);
      });

    return () => {
      isCancelled = true;
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {!isReady ? (
        <div
          className={`fixed inset-0 z-[120] flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-base)] transition-opacity duration-500 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90"

          />

          <div className="relative flex w-full max-w-[32rem] flex-col items-center px-6 text-center sm:px-8">
            <div className="">
              <video
                className="aspect-[4/5] w-full max-w-[23rem] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={LOADER_VIDEO_SRC} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


          </div>
        </div>
      ) : null}

      <div
        className={`transition-opacity duration-700 ${
          isReady ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};
