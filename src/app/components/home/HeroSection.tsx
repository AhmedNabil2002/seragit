
import { motion } from "framer-motion";
import { Code2, Cpu, Shield, Cloud, Smartphone, Wrench } from "lucide-react";
// Ensure this path is correct relative to this file
// previously: ../../assets/images/background.png
// now: ../../../assets/images/background.png
// import heroImage from "../../../assets/images/background.png"; 

export function HeroSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  return (
    <M.section
      className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white py-24 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <M.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
          >
            Integrated Solution For
            <span className="text-blue-300 block mt-2">Industrial Services</span>
          </M.h1>
          
          <M.p
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you are a long-term partner or a first-time customer, advancing 
            your digital operations is essential. We are dedicated to being the 
            digital backbone of your company's growth.
          </M.p>

          <M.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
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
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 shadow-lg group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-100 group-hover:text-white" />
                </div>
              </M.div>
            ))}
          </M.div>

          <M.div variants={itemVariants} className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Our Services
            </button>
          </M.div>
        </div>
      </div>
    </M.section>
  );
}
