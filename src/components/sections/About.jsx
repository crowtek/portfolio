import { SkillsText } from '../../constants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { titleFadeIn, iconScaleIn, staggeredText } from '../animations';

// Import React Icons
import { FaReact } from 'react-icons/fa';
import { SiFigma, SiJavascript } from 'react-icons/si';

export const About = () => {
  const sectionRef = useRef(null);

  // Track scroll progress for smooth Y translation effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 2000]), {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  return (
    <section id="about" ref={sectionRef} className="w-full pt-50 pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Side */}
        <motion.div style={{ y: translateY }}>
          <motion.h2 className="text-4xl md:text-6xl font-bold" variants={titleFadeIn} initial="hidden" whileInView="visible">
            Skills
          </motion.h2>

          <motion.div className="py-10 flex items-center gap-4" variants={iconScaleIn} initial="hidden" whileInView="visible">
            <FaReact className="text-blue-500 w-10 h-10" />
            <SiFigma className="text-red-500 w-10 h-10" />
            <SiJavascript className="text-yellow-400 w-10 h-10" />
          </motion.div>
        </motion.div>

        {/* Right Side (Text Content) */}
        <div className="space-y-42">
          {SkillsText.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-6 max-w-140 mt-60"
              variants={staggeredText(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
            >
              <h2 className="text-4xl font-semibold">{skill.title}</h2>
              <p className="mt-2 text-2xl break-text">{skill.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
