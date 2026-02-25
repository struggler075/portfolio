import { motion } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { TelegramIcon, VKIcon } from './ui/Icons';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.h2 
          className="text-5xl md:text-8xl font-black mb-12 tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Давайте создадим<br />
          <span className="text-zinc-600">что-то новое.</span>
        </motion.h2>

        <div className="flex justify-center gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MagneticButton onClick={() => window.open('https://t.me/optimusmac', '_blank')}>
              <span className="flex items-center gap-3 text-lg">
                <TelegramIcon className="w-5 h-5 fill-current" />
                Telegram
              </span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MagneticButton onClick={() => window.open('https://vk.com/by4igiry', '_blank')}>
              <span className="flex items-center gap-3 text-lg">
                <VKIcon className="w-5 h-5 fill-current" />
                VKontakte
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <footer className="mt-32 text-zinc-600 text-sm flex justify-between items-center">
          <p>© {new Date().getFullYear()} Портфолио. Все права защищены.</p>
          <p>Разработано с ❤️</p>
        </footer>
      </div>
    </section>
  );
};
