import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";  // CSSファイルをインポート
import PasswordProtectedPage from '../components/PasswordProtectedPage';
import Slideshow from '../components/Slideshow';

export default function Home() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  const images = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide4.png",
    "/images/slide5.png",
    "/images/slide6.png",
    "/images/slide7.png",
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // ロードアニメーションの表示時間を設定
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const audio = new Audio("/audio/bgm.mp3");
      audio.loop = true;
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [isPlaying]);

  const handleAccept = () => {
    setIsAccepted(true);
    setIsPlaying(true);
  };

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStart = () => {
    router.push({
      pathname: "/step1",
      query: router.query,
    });
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (!isAccepted) {
    return (
      <div className={styles.messageContainer}>
        <p>このページでは音が流れます。</p>
        <button className={styles.acceptButton} onClick={handleAccept}>
          OK
        </button>
      </div>
    );
  }

  return (
    <PasswordProtectedPage>
    <div className={styles.container}>
      {/*<button className={styles.musicToggle} onClick={handleMusicToggle}>
        {isPlaying ? "音楽をオフにする" : "音楽をオンにする"}
      </button>*/}

      {/* 中央揃え */}
      <div className={styles.slideShowWrapper}>
      <Slideshow images={images} />
      </div>

      <div className={styles.largeImage}>
        <img src="/images/description.png" className={styles.description} alt="Large Image" />
      </div>

      <button className={styles.startButton} onClick={handleStart}>
        スタート
      </button>
    </div>
    </PasswordProtectedPage>
  );
}