import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' }
];

export const SocialIcons = () => {
  return (
    <motion.footer
      className="flex justify-center space-x-6 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
    >
      {socialLinks.map(({ icon: Icon, href, label }, index) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          className="group relative p-3 focus:outline-none focus:ring-2 focus:ring-[#C9BDA9]/40 rounded-full"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.0 + (index * 0.08),
            duration: 0.32,
            ease: [0.2, 0.9, 0.3, 1]
          }}
          whileHover={{
            scale: 1.18,
            rotate: [0, -6, 6, 0],
            transition: { duration: 0.22 }
          }}
          whileTap={{
            scale: 1.05,
            transition: { duration: 0.1 }
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/8"
            whileHover={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.8, 0.4]
            }}
            transition={{ duration: 0.4 }}
          />
          <Icon 
            size={20} 
            className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-220" 
            strokeWidth={1.5}
          />
        </motion.a>
      ))}
    </motion.footer>
  );
};