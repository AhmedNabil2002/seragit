import { motion } from "framer-motion";
import { Code2, Cpu, Shield, Cloud, Smartphone, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
// Import your background image
// import heroImage from "@/assets/images/hero-background.jpg";

export function HeroSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  } as const;

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  return (
    <M.section
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Replace with your actual background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)',
            // Replace with: backgroundImage: `url(${heroImage})`,
          }}
        ></div>
        {/* Color overlay - adjust opacity here */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-blue-700/70 to-blue-900/95"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <M.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        ></M.div>
        <M.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        ></M.div>
        <M.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
        ></M.div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Radial gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Title with better width control */}
          <M.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
          >
            Your Digital Backbone
            <span className="text-blue-200 block mt-2">
              for Industrial Transformation
            </span>
          </M.h1>

          {/* Subtitle with better sizing */}
          <M.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We design, build, and scale industrial software solutions that
            optimize operations, enhance efficiency, and accelerate business
            growth.
          </M.p>

          {/* Service Icons with enhanced animations */}
          <M.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          >
            {[
              { Icon: Code2, label: "Software" },
              { Icon: Cpu, label: "AI" },
              { Icon: Shield, label: "Security" },
              { Icon: Cloud, label: "Cloud" },
              { Icon: Smartphone, label: "Mobile" },
              { Icon: Wrench, label: "Support" },
            ].map(({ Icon, label }, index) => (
              <M.div
                key={index}
                whileHover={{ 
                  scale: 1.15, 
                  translateY: -8,
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-100 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {label}
                </span>
              </M.div>
            ))}
          </M.div>

          {/* CTA Buttons with enhanced styling */}
          <M.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/services#contact">
              <M.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Start Your Journey
              </M.button>
            </Link>
            <Link 
              to="/services"
              onClick={() => window.scrollTo(0, 0)}
            >
              <M.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Our Services
              </M.button>
            </Link>
          </M.div>
        </div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <M.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </M.section>
  );
}