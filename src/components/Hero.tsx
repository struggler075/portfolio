import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { TextReveal } from './ui/TextReveal';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <div className="container px-4 text-center z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400 backdrop-blur-sm"
        >
          Открыт для предложений и фриланса
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
          <TextReveal className="inline-block">
            Full Stack
          </TextReveal>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Разработчик
          </span>
        </h1>

        <motion.p 
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Занимаюсь веб-разработкой, создаю удобные и быстрые сайты. Люблю свое дело и всегда открыт к интересным задачам.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Смотреть Работы
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
