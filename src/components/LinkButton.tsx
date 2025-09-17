import { motion } from 'framer-motion';
import { useRipple } from '../hooks/useRipple';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  index: number;
}

export const LinkButton = ({ href, children, index }: LinkButtonProps) => {
  const createRipple = useRipple();
  
  // Alternate colors: beige for even indices (0,2), brown for odd indices (1,3)
  const isBeige = index % 2 === 0;
  const bgGradient = isBeige 
    ? "from-[#D4B5A0] to-[#C4968A]" 
    : "from-[#8B6F47] to-[#6B5B47]";
  const textColor = isBeige ? "text-[#5D4037]" : "text-white";

  return (
    <motion.a
      href={href}
      className={`group relative block w-full h-16 bg-gradient-to-r ${bgGradient} rounded-full font-bold ${textColor} overflow-hidden focus:outline-none focus:ring-[3px] focus:ring-[#E8C5B5]/30 focus:shadow-[0_0_0_6px_rgba(232,197,181,0.15)] transition-all duration-220`}
      role="button"
      aria-label={`Visit ${children}`}
      initial={{ y: 18, scale: 0.98, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 0.48,
        delay: 0.6 + (index * 0.08),
        type: "spring",
        damping: 15
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.22 }
      }}
      whileTap={{
        y: 2,
        scale: 0.98,
        transition: { duration: 0.14 }
      }}
      onClick={createRipple}
      style={{
        boxShadow: isBeige 
          ? 'inset 0 -6px 18px rgba(93,64,55,0.25), 0 4px 12px rgba(0,0,0,0.15)'
          : 'inset 0 -6px 18px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.25)'
      }}
    >
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Sheen effect */}
      <motion.div
        className="absolute top-0 w-2/5 h-full bg-gradient-to-r from-white/10 via-white/25 to-white/10 transform -skew-x-12"
        initial={{ x: '-120%' }}
        whileHover={{ x: '120%' }}
        transition={{ duration: 0.42, ease: 'linear' }}
      />
      
      {/* Button content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.span
          whileHover={{
            letterSpacing: '0.02em',
            color: isBeige ? '#4A2C2A' : '#F5F5F5'
          }}
          transition={{ duration: 0.22 }}
        >
          {children}
        </motion.span>
      </div>
      
      {/* Bottom rim lighting */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isBeige ? 'via-[#5D4037]/30' : 'via-white/20'} to-transparent`} />
    </motion.a>
  );
};