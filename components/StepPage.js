// components/StepPage.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './StepPage.module.css';

export default function StepPage({ title, videoSrc, correctAnswer, nextRoute, displayText, displayImageSrc, hintMessage }) {
  const [answer, setAnswer] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupWrong, setShowPopupWrong] = useState(false);
  const [showPopupHint, setShowPopupHint] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === correctAnswer) {
      setShowPopup(true);
    } else {
      setShowPopupWrong(true);
    }
  };

  const handleVideoEnd = () => {
    if (title === "ending") {
      router.push(nextRoute);
    }
    setShowContent(true);
  };

  return (
    <div className={styles.container}>
    {/*<h1>{title}</h1>*/}
    <video className={styles.video} controls onEnded={handleVideoEnd}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      {/* 動画終了後のコンテンツ表示 */}
      {showContent && (
        <div>
          <div className={styles.extraContent}>
            {displayText && <p>{displayText}</p>}
            {displayImageSrc && <img src={displayImageSrc} className={styles.displayImage} alt="Additional content" />}
          </div>
        
          <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="駅名を入力（ひらがな）"
          />
          <button type="submit" className={styles.button}>送信</button>
          </form>
        </div>
      )}

      {/* ポップアップ */}
      {showPopup && (
        <>
          <div className={`${styles.popupBackground} ${styles.show}`} />
          <div className={`${styles.popupContainer} ${styles.show}`}>
            <div className={styles.popupMessage}>正解！</div>
            {/* OKボタンを押すと次のステップに進む */}
            <button className={styles.popupButton} onClick={() => router.push(nextRoute)}>次へ</button>
          </div>
        </>
      )}

      {/* ポップアップ */}
      {showPopupWrong && (
        <>
          <div className={`${styles.popupBackground} ${styles.show}`} />
          <div className={`${styles.popupContainer} ${styles.show}`}>
            <div className={styles.popupMessage}>不正解</div>
            {/* OKボタンを押すとポップアップを閉じる */}
            <button className={styles.popupButton} onClick={() => setShowPopupWrong(false)}>OK</button>
          </div>
        </>
      )}
    </div>
  );
}