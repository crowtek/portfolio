import { LinkButton } from '../buttons/Button';
import Background3d from '@/components/BackgroundElement';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '../animations';

import ReactIcon from '@/assets/icons/react.png';
import FimgaIcon from '../../assets/icons/figma.png';
import JSIcon from '@/assets/icons/javascript.png';


const techIcons = [
  { src: ReactIcon, alt: 'React Icon' },
  { src: FimgaIcon, alt: 'Figma Icon' },
  { src: JSIcon, alt: 'JS Icon' },
];

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center relative z-10 flex flex-col">
        {/* Title Section */}
        <motion.div variants={slideInLeft} initial="initial" animate="animate" transition={{ type: 'spring', stiffness: 100, duration: 1, delay: 2 }}>
          <h3>👋Hi, my name is Meik and I am a Frontend Developer</h3>
          <h1 className="leading-[1.8] scale-y-[1.8] scale-x-[1.5] tracking-tighter title">Frontend Developer</h1>
        </motion.div>

        <motion.div variants={slideInRight} initial="initial" animate="animate" transition={{ type: 'spring', stiffness: 100, duration: 1, delay: 2 }}>
          <h1 className="secondTitle leading-[1.7] scale-y-[1.8] scale-x-[1.5] tracking-tight">& UI/UX Designer</h1>
        </motion.div>

        {/* Location & Tech Icons */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 2.5 }} className="flex justify-between items-center gap-6 py-6">
          <p className="text-4xl md:text-3xl text-gray-500 mb-8">Based in Germany, Hamburg</p>
          <div className="flex items-center gap-4">
            {techIcons.map((icon, index) => (
              <motion.img key={index} src={icon.src} alt={icon.alt} width={50} height={50} />
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 1 }} className="flex justify-center space-x-4 mt-8">
          <LinkButton text="View Projects" link="#projects" type="primary" />
          <LinkButton text="Contact Me" link="#contact" />
        </motion.div>
      </div>

      {/* Background 3D Element */}
      <div className="absolute inset-0 z-1 opacity-1">
        <Background3d />
      </div>
    </section>
  );
};
