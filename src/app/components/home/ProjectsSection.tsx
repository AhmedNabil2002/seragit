import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ContactSection } from "./contactUsSection";

export function ProjectsSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "Asset Management Solution",
      description:
        "Comprehensive asset tracking system for enterprise-scale logistics.",
      tag: "Enterprise",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      title: "Data Analytics Platform",
      description:
        "Real-time business intelligence dashboard with predictive modeling.",
      tag: "Analytics",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      title: "Industrial IoT System",
      description:
        "Smart monitoring and control solution for manufacturing plants.",
      tag: "IoT",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600">
              We consistently deliver cutting-edge software solutions that drive
              innovation, streamline operations, and elevate user experiences.
            </p>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/projects"
            className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <M.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {projects.map((project, index) => (
            <M.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div
                className="h-56 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-colors duration-300 flex items-center justify-center">
                  <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                    <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white font-bold border-2 border-white px-6 py-2 rounded-full">
                      View Case Study
                    </span>
                  </Link>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 uppercase tracking-wide">
                  {project.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-blue-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </M.div>
          ))}
        </M.div>

        <div className="flex justify-center mt-12 md:hidden">
          <Link to="/projects">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              View More <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
