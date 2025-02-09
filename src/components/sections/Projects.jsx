import { ProjectsData } from '../../constants';
import { motion } from 'framer-motion';
import Carousel from '../Carousel';
import { projectCardAnimation } from '../animations';

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 relative z-10">
      <div className="px-4">
        <h2 className="text-5xl font-bold mb-20 text-left">Featured Projects</h2>
        <div className="flex flex-col md:flex-row gap-5">
          {ProjectsData.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`projectCard w-[80vw] md:w-[30vw] h-[50vw] md:h-[18vw] hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all ${project.class}`}
              variants={projectCardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
            />
          ))}
        </div>
      </div>
      <Carousel />
    </section>
  );
};
