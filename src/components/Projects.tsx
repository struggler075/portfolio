import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-32 bg-zinc-950 text-white relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-16 border-b border-zinc-800 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Избранные Работы
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to={`/project/${project.id}`} className="block h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-lime-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-sm uppercase tracking-wider">
                        {project.category}
                      </p>
                    </div>
                    {project.link && project.link !== '#' && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-lime-400 hover:text-black transition-colors z-10 relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
