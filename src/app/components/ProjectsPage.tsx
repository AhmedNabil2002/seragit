import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ProjectsPage() {
  const projects = [
    {
      title: "FinTech Banking App",
      category: "Mobile Development",
      description:
        "A comprehensive mobile banking solution with real-time transactions and advanced security features",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      tags: ["React Native", "Node.js", "AWS"],
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Scalable e-commerce platform handling millions of transactions with AI-powered recommendations",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "MongoDB", "Stripe"],
    },
    {
      title: "Healthcare Dashboard",
      category: "Data Analytics",
      description:
        "Real-time analytics dashboard for healthcare providers to monitor patient data and outcomes",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Python", "PostgreSQL"],
    },
    {
      title: "Smart City IoT Platform",
      category: "Cloud & IoT",
      description:
        "IoT platform for smart city infrastructure management and monitoring",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      tags: ["Azure", "IoT Hub", "Machine Learning"],
    },
    {
      title: "Social Media Analytics",
      category: "AI & Machine Learning",
      description:
        "Advanced analytics tool using AI to provide insights on social media performance",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      title: "Logistics Management System",
      category: "Enterprise Software",
      description:
        "End-to-end logistics and supply chain management system with real-time tracking",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      tags: ["Angular", "Java", "Oracle"],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various
            industries and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-slate-100 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our
            expertise and innovative solutions
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
}
