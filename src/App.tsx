import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ProfileAvatar } from './components/ProfileAvatar';
import { AnimatedName, AnimatedBio } from './components/AnimatedText';
import { LinkButton } from './components/LinkButton';
import { SocialIcons } from './components/SocialIcons';

// ✅ Add icon imports
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms
  const backgroundX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-15, 15]);
  const backgroundY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-20, 20]);
  const overlayX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-35, 35]);
  const overlayY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-45, 45]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    const handleMouseMove_ = requestAnimationFrame
      ? (e: MouseEvent) => requestAnimationFrame(() => handleMouseMove(e))
      : handleMouseMove;

    window.addEventListener('pointermove', handleMouseMove_);
    return () => window.removeEventListener('pointermove', handleMouseMove_);
  }, [mouseX, mouseY]);

  // ✅ Add icons to link data
  const linkData = [
    { href: '#portfolio', text: 'Instagram', icon: FaInstagram },
    { href: '#blog', text: 'WhatsApp', icon: FaWhatsapp },
    { href: '#contact', text: 'Get In Touch', icon: FaPhoneAlt },
    { href: '#newsletter', text: 'Website', icon: FaGlobe }
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
    >
      {/* Animated background layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          x: backgroundX,
          y: backgroundY,
          scale: 1.1
        }}
      />

      {/* Blurred parallax overlay layer */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'blur(8px)',
          x: overlayX,
          y: overlayY,
          scale: 1.2
        }}
      />

      {/* Dark warm overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(180deg, rgba(10,8,6,0.18) 0%, rgba(8,6,5,0.45) 60%)'
        }}
      />

      {/* Vignette */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 0.1 }}
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.3) 70%)'
        }}
      />

      {/* Drifting spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={{
          background: [
            'radial-gradient(600px circle at 30% 20%, rgba(201,189,169,0.08) 0%, transparent 50%)',
            'radial-gradient(600px circle at 70% 80%, rgba(201,189,169,0.08) 0%, transparent 50%)',
            'radial-gradient(600px circle at 30% 20%, rgba(201,189,169,0.08) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main card container */}
      <motion.main
        className="relative z-20 w-full max-w-[420px] px-5 py-14 text-center text-white"
        style={{
          borderRadius: '28px'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <header className="mb-8">
          <ProfileAvatar
            src="https://i.ibb.co/JFWcjW8Z/493854166-122113725602823820-7348013424259068912-n.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face"
            alt="Profile picture"
          />

          <AnimatedName text="THRIll TRAIL" className="text-4xl mb-4 tracking-wide" />

          <AnimatedBio
            text="Creative developer & digital storyteller crafting meaningful experiences through code and design."
            className="text-base leading-relaxed opacity-90 max-w-sm mx-auto"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          />
        </header>

        {/* ✅ Updated nav with icons */}
        <nav className="space-y-[18px] mb-8">
          {linkData.map((link, index) => (
            <LinkButton
              key={link.href}
              href={link.href}
              index={index}
              icon={link.icon} // ✅ passing the icon prop
            >
              {link.text}
            </LinkButton>
          ))}
        </nav>

        <SocialIcons />
      </motion.main>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: -20,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 8
            }}
            style={{ opacity: Math.random() * 0.3 + 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;