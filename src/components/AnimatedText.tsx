import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedName = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.h1 
      className={className}
      style={{ fontFamily: 'Fredoka One, cursive' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8, skewX: -2 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{
            duration: 0.42,
            delay: delay + (index * 0.025),
            ease: [0.2, 0.9, 0.3, 1]
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const AnimatedBio = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{
        duration: 0.52,
        delay,
        ease: [0.2, 0.9, 0.3, 1]
      }}
      className={className}
    >
      {text}
    </motion.p>
  );
};