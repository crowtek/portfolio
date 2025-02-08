import { ProjectsData } from '../../constants';
import { motion } from 'framer-motion';
import Carousel from '../Carousel';

export const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex flex-col items-center justify-center py-20'>
      <div className=' px-4'>
        <h2 className='text-5xl font-bold mb-20 text-left'>Featured Projects</h2>
        <div className='flex gap-5'>
          {ProjectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`projectCard hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all ${project.class}`}
              initial={{ opacity: 0 }} // Start invisible and slightly lower
              whileInView={{ opacity: 1 }} // Animate into view
              viewport={{ amount: 0.2 }} // Triggers animation when 20% visible
              transition={{ duration: 1, delay: index * 0.5 }} // Smooth staggered delay
            ></motion.div>
          ))}
        </div>
      </div>
      <Carousel />
    </section>
  );
};
