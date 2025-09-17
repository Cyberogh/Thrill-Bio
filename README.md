# Linktree Clone - Production Ready

A pixel-accurate, responsive Linktree-style page with rich micro-interactions built with React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first with phone-frame aesthetics on wider screens
- **Rich Animations**: Letter-by-letter reveals, spring physics, parallax backgrounds
- **Micro-Interactions**: Hover sheens, ripple effects, tactile feedback
- **Accessibility**: Full keyboard navigation, screen reader support, reduced motion
- **Performance**: Optimized assets, GPU-accelerated animations, 60fps targeting

## Design System

### Colors
- Primary Brown: `#6C6353` (warm desaturated brown)
- Accent Beige: `#C9BDA9` (subtle highlights and glows)
- Background Overlays: `rgba(8,6,5,0.45)` (dark warm)

### Typography
- Headers: Special Elite (typewriter style)
- Body/Buttons: Inter (clean, readable)

### Easing Curves
- Fast: `cubic-bezier(.2,.9,.3,1)` (quick UI responses)
- Spring: `cubic-bezier(.22,1.4,.36,1)` (bouncy entrances) 
- Soft: `cubic-bezier(.25, .46, .45, .94)` (gentle transitions)

### Animation Timings
- Micro-interactions: 180-280ms
- Page entrances: 320-620ms  
- Ambient effects: 6-30s loops

## Accessibility Features

- Semantic HTML structure (header, nav, main, footer)
- ARIA labels and roles for all interactive elements
- Keyboard navigation with visible focus rings
- Screen reader friendly announcements
- Reduced motion support via `prefers-reduced-motion`
- High contrast mode compatibility

## Performance Optimizations

- WebP images with fallbacks
- Font preloading with `font-display: swap`
- GPU-accelerated transforms (`will-change: transform`)
- Debounced pointer tracking with `requestAnimationFrame`
- Lazy-loaded non-critical assets
- Minimal JavaScript bundles

## Browser Support

- Modern browsers (Chrome 88+, Firefox 87+, Safari 14+, Edge 88+)
- Progressive enhancement for older browsers
- Fallback styles for unsupported features

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
npm run preview
```

## Customization

Update the following files to customize:
- `src/App.tsx` - Profile data, background images, social links
- `src/index.css` - Color variables, custom animations
- `tailwind.config.js` - Design system extensions

## License

MIT License - Feel free to use for personal or commercial projects.