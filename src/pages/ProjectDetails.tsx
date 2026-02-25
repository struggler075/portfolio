import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { MagneticButton } from '../components/ui/MagneticButton';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Проект не найден</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-950 text-white relative"
    >
      <div className="container mx-auto px-4 py-24">
        <Link to="/" className="inline-block mb-12">
          <MagneticButton>
            <span className="flex items-center gap-2">
              <ArrowLeft size={20} />
              На Главную
            </span>
          </MagneticButton>
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-zinc-400 uppercase tracking-widest">{project.category}</p>
            </div>
            
          </div>

          <p className="text-2xl text-zinc-300 leading-relaxed max-w-4xl mb-24">
            {project.description}
          </p>
        </motion.div>

        <div className="grid gap-16">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800"
            >
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Texture/Noise Overlay - Reuse from App.tsx or make global */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[90] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </motion.div>
  );
};
