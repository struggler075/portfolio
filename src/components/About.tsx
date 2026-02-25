import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const techStack = [
  "React", "Tailwind CSS", "JSX", "Spring Framework", "Redis", 
  "PostgreSQL", "Docker", "Kubernetes", "Helm"
];

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 text-white overflow-hidden relative" id="about">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Разработчик, который
            <span className="text-lime-400 block">любит свое дело.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Занимаюсь веб-разработкой, создаю удобные интерфейсы и надежные серверные решения. Мне нравится превращать идеи в работающие проекты.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Основной стек — React и Spring. Стараюсь делать сайты быстрыми и понятными для пользователей.
          </p>
        </div>
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-9xl font-black opacity-20 rotate-12 select-none">
            DEV
          </div>
          {/* Add a placeholder or actual image here if available */}
        </div>
      </div>

      <div className="mt-24 w-full overflow-hidden py-8 border-y border-zinc-800 bg-zinc-900/30">
        <motion.div 
          className="flex whitespace-nowrap gap-16 text-5xl md:text-7xl font-bold text-zinc-700 uppercase"
          style={{ x }}
        >
          {/* Duplicate the array to create seamless loop effect */}
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={index} className="flex items-center gap-4">
              {tech} <span className="text-lime-400 text-2xl">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
