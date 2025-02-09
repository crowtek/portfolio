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
        <motion.div variants={slideInLeft} initial="initial" animate="animate" transition={{ duration: 2, delay: 1.5 }}>
          <h3>👋Hallo, mein Name ist Meik und ich bin Frontend-Entwickler</h3>
          <h1 className="leading-[1.8] scale-y-[1.8] scale-x-[1.5] tracking-tighter title ">Frontend Developer</h1>
        </motion.div>

        <motion.div variants={slideInRight} initial="initial" animate="animate" transition={{ duration: 2, delay: 1.5 }}>
          <h1 className="secondTitle leading-[1.7] scale-y-[1.8] scale-x-[1.5] tracking-tight">& UI/UX Designer</h1>
        </motion.div>

        {/* Location & Tech Icons */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 2, delay: 2.5 }} className="flex flex-col lg:flex-row justify-between items-center gap-10 py-6 lg:w-6xl">
          <p className="text-2xl md:text-3xl text-black mb-8">Based in Germany, Hamburg</p>
          <div className="flex items-center gap-4">
            {techIcons.map((icon, index) => (
              <motion.img key={index} src={icon.src} alt={icon.alt} width={50} height={50} />
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 1 }} className="flex justify-center space-x-4 mt-8">
          <LinkButton text="Meine Projekte" link="#projects" type="primary" />
          <LinkButton text="Kontakt" link="#contact" />
        </motion.div>
      </div>


    </section>
  );
};
