import { SkillsText } from '../../constants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

// Import React Icons
import { FaReact } from 'react-icons/fa';
import { SiFigma, SiJavascript } from 'react-icons/si';

export const About = () => {
  const sectionRef = useRef(null);

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const translateYRaw = useTransform(scrollYProgress, [0, 1], [0, 2300]);

  const translateY = useSpring(translateYRaw, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  return (
    <section id='about' ref={sectionRef} className='w-full pt-148 pb-32 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative'>
        {/* Left Side */}
        <motion.div style={{ y: translateY }}>
          <h2 className='text-4xl md:text-6xl font-bold'>Frontend Skills</h2>
          <div className='py-10 flex items-center gap-4'>
            {/* React Icons instead of Images */}
            <FaReact className='text-blue-500 w-10 h-10' />
            <SiFigma className='text-red-500 w-10 h-10' />
            <SiJavascript className='text-yellow-400 w-10 h-10' />
          </div>
        </motion.div>

        {/* Right Side */}
        <div className='space-y-42'>
          {SkillsText.map((skill, index) => {
            const itemRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: itemRef,
              offset: ['start 80%', 'start 50%'],
            });

            const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

            return (
              <motion.div key={index} ref={itemRef} className='space-y-6 max-w-140 mt-100' style={{ opacity }}>
                <h2 className='text-4xl font-semibold'>{skill.title}</h2>
                <p className='mt-2 text-2xl break-text'>{skill.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
