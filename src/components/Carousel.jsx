import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { frontendSkills } from '../constants';

const Carousel = () => {
  const carouselRef = useRef(null);

  // Track the scroll position of the entire page
  const { scrollYProgress } = useScroll();

  // Move the carousel left based on scroll (adjust values for speed)
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -500]); // Moves left up to -1000px

  return (
    <div ref={carouselRef} className='w-full overflow-hidden py-4 bg-gray-100 flex justify-center mt-20 '>
      <motion.div
        className='carousel flex space-x-4 whitespace-nowrap w-max'
        style={{ x: translateX }} // Moves dynamically with scroll
      >
        {[...frontendSkills, ...frontendSkills].map((item, index) => (
          <div
            key={index}
            className='min-w-[200px] bg-white rounded-full px-6 py-2 text-center shadow-md text-lg font-semibold'>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
