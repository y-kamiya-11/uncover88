// components/Slideshow.js
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // 8秒ごとに切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence>
        {images.map((image, i) => (
          i === index && (
            <motion.img
              key={image}
              src={image}
              alt={`Slide ${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }} // ディゾルブの時間
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                top: 0,
                left: 0,
              }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;