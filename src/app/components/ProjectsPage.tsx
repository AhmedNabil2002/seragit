import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo1 from "@/assets/images/image4.2.png";
import logo2 from "@/assets/images/logo.webp";
import main from "@/assets/images/project1.png";
import { ContactSection } from "./home/contactUsSection";
export function ProjectsPage() {
  const projects = [
    {
      image: main ,
        logo: logo1,
      title: "MED - Mechanical And Electrical Department",
      description:
        "Ministry of Water Resources and Irrigation - Mechanical and Electrical Engineering Department management system",
      category: "Web",
      link: "/projects/med",
      external: "https://med.mwri.gov.eg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
      logo: logo2,
      title: "Fleet - Transportation Management System",
      description:
        "Comprehensive fleet management and logistics platform for transportation companies",
      category: "Enterprise",
    },
    {
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      logo: logo2,
      title: "EGYVISA - Aviation Database System",
      description:
        "Advanced database management program for planes, airports, and aviation operations",
      category: "Database",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      logo: logo2,
      title: "Medical - ",
      description:
        "AI-powered water quality monitoring and predictive analytics platform",
      category: "Analytics",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      logo: logo2,
      title: "Cybersecurity Dashboard",
      description:
        "Enterprise-grade security monitoring and threat detection system",
      category: "Security",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      logo: logo2,
      title: "ERP Solution",
      description:
        "Custom enterprise resource planning system for manufacturing",
      category: "Enterprise",
    },
  ];

  return (
<div className="py-2" id="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
      {/* Hero Header */}
<div className="relative py-32 mb-20 overflow-hidden text-white rounded-2xl">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/75 to-blue-950/95" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
    Projects
    </h1>
    <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto">
      Our work speaks for itself
    </p>
  </div>
</div>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Project Image */}
                <div
                  className="relative h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Logo and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={project.logo}
                      alt="Logo"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Learn More Button */}
                  {project.link ? (
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={project.link}
                      className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            
      {/* Contact Section */}

      <ContactSection></ContactSection>
    </div>
</div>
      
  );
}
