import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, goNext, goPrev, onClose]);

  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 50) goPrev();
    if (diff < -50) goNext();
  };

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 px-4"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory"
          >
            ✕
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory sm:flex"
          >
            ‹
          </button>
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            src={images[index]}
            alt={`Gallery image ${index + 1}`}
            className="max-h-[85vh] max-w-[92vw] rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory sm:flex"
          >
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-ivory/60">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
