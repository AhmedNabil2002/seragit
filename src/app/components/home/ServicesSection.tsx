import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Cpu, Cloud, Wrench, Shield } from "lucide-react";

export function ServicesSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Creating responsive, high-performance applications tailored to your unique business requirements.",
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description:
        "Implementing AI-driven solutions for automation, data analysis, and predictive business insights.",
    },
    {
      icon: Smartphone,
      title: "Hybrid System Design",
      description:
        "Designing flexible, scalable systems that integrate seamlessly across web and mobile platforms.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Seamlessly integrating cloud infrastructure for enhanced scalability, security, and performance.",
    },
    {
      icon: Wrench,
      title: "Project Support",
      description:
        "Providing comprehensive technical assistance and maintenance to ensure smooth project execution.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Ensuring robust security protocols to protect your digital assets and critical infrastructure.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At SeraGit, we provide a comprehensive range of IT services designed
            to enhance operations, optimize performance, and drive sustainable
            growth.
          </p>
        </div>

        <M.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <M.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {service.description}
              </p>
            </M.div>
          ))}
        </M.div>

        <div className="flex justify-center mt-16">
          <Link
  to="/services"
  onClick={() => window.scrollTo(0, 0)}
>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
