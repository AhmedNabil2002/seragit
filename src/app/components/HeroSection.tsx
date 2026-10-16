import { motion } from "framer-motion";

type HeroSectionProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            {subtitle}
          </p>
        )}

        {children}
      </motion.div>
    </section>
  );
}
