import { SkillsText } from '../../constants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { titleFadeIn, iconScaleIn, staggeredText } from '../animations';

// Import Icons
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiFigma, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiRedux, SiFirebase, SiJest } from 'react-icons/si';

// Mapping skills to their respective icons
const skillIcons = {
  "React.js": <FaReact className="text-blue-500 w-10 h-10" />,
  "Next.js": <SiNextdotjs className="text-black w-10 h-10" />,
  "JavaScript": <SiJavascript className="text-yellow-400 w-10 h-10" />,
  "TypeScript": <SiTypescript className="text-blue-700 w-10 h-10" />,
  "Redux": <SiRedux className="text-purple-600 w-10 h-10" />,
  "Node.js": <FaNodeJs className="text-green-500 w-10 h-10" />,
  "MongoDB": <SiMongodb className="text-green-600 w-10 h-10" />,
  "Firebase": <SiFirebase className="text-yellow-500 w-10 h-10" />,
  "Jest": <SiJest className="text-red-500 w-10 h-10" />,
  "Figma": <SiFigma className="text-red-500 w-10 h-10" />,
  "CSS3": <FaCss3Alt className="text-blue-600 w-10 h-10" />,
  "HTML5": <FaHtml5 className="text-orange-500 w-10 h-10" />,
  "Tailwind CSS": <SiTailwindcss className="text-blue-400 w-10 h-10" />,
};


export const About = () => {
  const sectionRef = useRef(null);

  // Track scroll progress for smooth Y translation effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 2400]), {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  return (
    <section id="about" ref={sectionRef} className="w-full md:pt-50 pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Side */}
        <motion.div className='hidden md:flex flex-col p-5' style={{ y: translateY }}>
          <motion.h2 className="text-4xl md:text-6xl font-bold" variants={titleFadeIn} initial="hidden" whileInView="visible">
            Skills
          </motion.h2>

          <motion.div  className="py-10 flex flex-wrap justify-start gap-4 max-w-100"variants={iconScaleIn} initial="hidden" whileInView="visible">
            {Object.values(skillIcons)}
          </motion.div>
        </motion.div>

        {/* Right Side (Text Content) */}
        <div className="space-y-42">
          {SkillsText.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-6 max-w-140 mt-20 md:mt-60 p-10"
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
