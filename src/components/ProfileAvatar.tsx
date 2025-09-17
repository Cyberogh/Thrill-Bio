import { motion } from 'framer-motion';

interface ProfileAvatarProps {
  src: string;
  alt: string;
}

export const ProfileAvatar = ({ src, alt }: ProfileAvatarProps) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ y: -18, scale: 0.98, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 12,
        duration: 0.42
      }}
    >
      {/* Gradient ring wrapper */}
      <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px]">
        {/* Inner background and avatar */}
        <motion.div
          className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden"
          animate={{
            rotate: [0, 1.25, 0, -1.25, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.06,
            transition: { duration: 0.18 }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-[100%] h-[100%] rounded-full object-cover"
          />
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-150"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
