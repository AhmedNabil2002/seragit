import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import logo1 from "@/assets/images/image4.2.png";
import logo2 from "@/assets/images/logo.webp";

export function ProjectsPage() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      logo: logo1,
      title: "MED - Mechanical And Electrical Department",
      description: "Ministry of Water Resources and Irrigation - Mechanical and Electrical Engineering Department management system",
      category: "Web",
      link: "/projects/med",
      external: "https://med.mwri.gov.eg"
    },
    {
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
      logo: logo2,
      title: "Fleet - Transportation Management System",
      description: "Comprehensive fleet management and logistics platform for transportation companies",
      category: "Enterprise"
    },
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      logo: logo2,
      title: "EGYVISA - Aviation Database System",
      description: "Advanced database management program for planes, airports, and aviation operations",
      category: "Database"
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      logo: logo2,
      title: "Water Quality Analytics",
      description: "AI-powered water quality monitoring and predictive analytics platform",
      category: "Analytics"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      logo: logo2,
      title: "Cybersecurity Dashboard",
      description: "Enterprise-grade security monitoring and threat detection system",
      category: "Security"
    },
    {
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      logo: logo2,
      title: "ERP Solution",
      description: "Custom enterprise resource planning system for manufacturing",
      category: "Enterprise"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h1>
          <p className="text-xl text-slate-700">
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
                <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Contact
            </h2>
            <p className="text-slate-600">
              We Prioritize Responding To Your Inquiries Promptly To Ensure You Receive The Assistance You Need In A Timely Manner.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Write your message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                Send
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}