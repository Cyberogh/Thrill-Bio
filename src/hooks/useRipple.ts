import { useCallback } from 'react';

interface RippleEvent extends React.MouseEvent<HTMLElement> {
  currentTarget: HTMLElement;
}

export const useRipple = () => {
  const createRipple = useCallback((event: RippleEvent) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.className = 'absolute rounded-full bg-white/12 pointer-events-none animate-ripple';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'scale(0)';
    
    button.appendChild(ripple);
    
    // Trigger animation
    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(4)';
      ripple.style.opacity = '0';
    });
    
    // Clean up
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 420);
  }, []);

  return createRipple;
};