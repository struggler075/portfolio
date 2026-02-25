import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal = ({ children, className }: TextRevealProps) => {
  const words = children.split(' ');

  return (
    <motion.span
      className={`text-4xl font-bold leading-tight ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
