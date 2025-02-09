import { motion, useScroll, useTransform } from 'framer-motion';
import { frontendSkills } from '../constants';
import { carouselScroll } from './animations';

const Carousel = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, carouselScroll.inputRange, carouselScroll.outputRange);

  return (
    <div className="w-full overflow-hidden py-4 flex justify-center mt-20">
      <motion.div
        className="carousel flex space-x-4 whitespace-nowrap w-max"
        style={{ x: translateX }}
      >
        {[...frontendSkills, ...frontendSkills].map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] text-stone-300 rounded-full px-12 py-2 text-center text-6xl font-semibold"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
