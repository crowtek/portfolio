// 🔹 Fade-in from bottom
export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };
  
  // 🔹 Slide-in from the left
  export const slideInLeft = {
    initial: { x: '-100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  
  // 🔹 Slide-in from the right
  export const slideInRight = {
    initial: { x: '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  
  // 🔹 Project card animation (staggered appearance)
  export const projectCardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: index * 0.3 },
    }),
  };
  
  // 🔹 Section title fade-in effect
  export const titleFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  // 🔹 Icon scale-in effect
  export const iconScaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };
  
  // 🔹 Text block staggered fade-in (alternating from left and right)
  export const staggeredText = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: index * 0.2 } },
  });
  
  export const carouselScroll = {
  inputRange: [0, 1], // Tracks full page scroll
  outputRange: [0, -1000], // Moves left for smooth transition
};