import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (revealed && e.deltaY < 0 && window.scrollY <= 5) {
        setRevealed(false);
        e.preventDefault();
      } else if (!revealed) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setRevealed(true);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (revealed && deltaY < -20 && window.scrollY <= 5) {
        setRevealed(false);
        e.preventDefault();
      } else if (!revealed) {
        e.preventDefault();
        // Sensibilidade maior no mobile, especialmente ao voltar o scroll
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setRevealed(true);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!revealed) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, revealed, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // A foto mantém um tamanho fixo e compacto: o scroll não a expande,
  // apenas revela (fade + leve subida) o conteúdo logo abaixo dela.
  const mediaWidth = isMobileState ? 240 : 320;
  const mediaHeight = isMobileState ? 300 : 400;

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-screen'>
        <div className='relative w-full flex flex-col items-center min-h-screen'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 0.4 }}
            transition={{ duration: 0.1 }}
          >
            {bgImageSrc ? (
              <img
                src={bgImageSrc}
                alt='Background'
                className='w-screen h-screen object-cover object-center'
                style={{ width: '100vw', height: '100vh' }}
              />
            ) : (
              <div
                className='w-screen h-screen'
                style={{
                  background:
                    'radial-gradient(circle at 50% 15%, var(--primary) 0%, transparent 45%), radial-gradient(circle at 85% 75%, var(--accent-2) 0%, transparent 40%), var(--bg)',
                  opacity: 0.35,
                }}
              />
            )}
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center relative z-10 pt-24 md:pt-28 pb-10 px-4'>
            <div
              className={`flex items-center justify-center text-center gap-1 w-full mb-6 flex-col ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold transition-none'
                style={{ color: 'var(--text)' }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-center transition-none'
                style={{ color: 'var(--text)' }}
              >
                {restOfTitle}
              </motion.h2>
            </div>

            <div
              className='relative rounded-2xl overflow-hidden transition-none'
              style={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
                maxWidth: '85vw',
                maxHeight: '50vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
              }}
            >
              {mediaType === 'video' ? (
                mediaSrc.includes('youtube.com') ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={
                        mediaSrc.includes('embed')
                          ? mediaSrc +
                            (mediaSrc.includes('?') ? '&' : '?') +
                            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                          : mediaSrc.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                            mediaSrc.split('v=')[1]
                      }
                      className='w-full h-full rounded-xl'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                    <div
                      className='absolute inset-0 z-10'
                      style={{ pointerEvents: 'none' }}
                    ></div>

                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover rounded-xl'
                      style={{ width: '100%', height: '100%' }}
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    <div
                      className='absolute inset-0 z-10'
                      style={{ pointerEvents: 'none' }}
                    ></div>

                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )
              ) : (
                <div className='relative w-full h-full'>
                  <img
                    src={mediaSrc}
                    alt={title || 'Media content'}
                    className='w-full h-full object-cover rounded-xl'
                    style={{ width: '100%', height: '100%' }}
                  />

                  <motion.div
                    className='absolute inset-0 bg-black/20 rounded-xl'
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 0.2 - scrollProgress * 0.15 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              )}
            </div>

            <div className='flex flex-col items-center text-center relative z-10 mt-5 transition-none'>
              {date && (
                <p className='text-2xl' style={{ color: 'var(--accent)' }}>
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <motion.p
                  className='font-medium text-center'
                  style={{ color: 'var(--muted)' }}
                  animate={{ opacity: 1 - scrollProgress * 1.5 }}
                >
                  {scrollToExpand}
                </motion.p>
              )}
            </div>
          </div>

          <motion.section
            className='flex flex-col w-full px-4 py-10 md:px-16 lg:py-20 relative z-10'
            animate={{
              opacity: scrollProgress,
              y: (1 - scrollProgress) * 24,
            }}
            transition={{ duration: 0.1 }}
            style={{ pointerEvents: scrollProgress > 0.5 ? 'auto' : 'none' }}
          >
            {children}
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
