// import { Link } from "react-router";
// import { ArrowRight, Code, Smartphone, Cloud, Shield, Users, Zap } from "lucide-react";
// import { url } from "inspector";
// import { ProjectsPage } from "./ProjectsPage";
// import { AboutPage } from "./AboutPage";
// import { NewsPage } from "./NewsPage";
// import { ServicesPage } from "./ServicesPage";
// export function HomePage() {
//   const features = [
//     {
//       icon: Code,
//       title: "Web Development",
//       description: "Custom web applications built with cutting-edge technologies",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Apps",
//       description: "Native and cross-platform mobile solutions for iOS and Android",
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Solutions",
//       description: "Scalable cloud infrastructure and deployment services",
//     },
//     {
//       icon: Shield,
//       title: "Security",
//       description: "Enterprise-grade security and data protection",
//     },
//     {
//       icon: Users,
//       title: "Team Augmentation",
//       description: "Skilled developers to extend your team capabilities",
//     },
//     {
//       icon: Zap,
//       title: "Fast Delivery",
//       description: "Agile development with rapid iteration and deployment",
//     },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//      {/* Hero Section */}
// <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid lg:grid-cols-2 gap-12 items-center">
//       <div>
//         <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//           Transform Your Vision Into Reality
//         </h1>
//         <p className="text-xl text-blue-100 mb-8">
//           We build innovative software solutions that drive business growth
//           and digital transformation.
//         </p>
//         <div className="flex flex-wrap gap-4">
//           <Link
//             to="/services"
//             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
//           >
//             Our Services
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//           <Link
//             to="/projects"
//             className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
//           >
//             View Projects
//           </Link>
//         </div>
//       </div>
//       <div className="relative">
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
//               What We Offer
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Comprehensive software development services tailored to your
//               business needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold text-slate-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {/* Stats Section */}

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-lg text-slate-600 mb-8">
//             Let's discuss how we can help bring your ideas to life
//           </p>
//           <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
//             Get in Touch
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//       <div>
//         <AboutPage></AboutPage>
//       </div>
//       <div>
//         <ProjectsPage></ProjectsPage>
//       </div>
//       <div>
//         <ServicesPage></ServicesPage>
//       </div>
//       <div>
//         <NewsPage></NewsPage>
//       </div>
//     </div>
//   );
// }
import { ArrowRight, Code2, Smartphone, Cloud, Shield, Cpu, Wrench } from "lucide-react";

export  function HomePage() {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Creating Responsive, High-Performance Applications Tailored To Your Business Needs.",
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Implementing AI-Driven Solutions For Automation, Data Analysis, And Predictive Insights.",
    },
    {
      icon: Smartphone,
      title: "Hybrid System Design",
      description: "Designing Flexible, Scalable Systems That Integrate Seamlessly Across Platforms.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & System Integration",
      description: "Seamlessly Integrating Cloud Infrastructure For Enhanced Scalability And Performance.",
    },
    {
      icon: Wrench,
      title: "Project Support",
      description: "Providing Comprehensive Technical Assistance To Ensure Smooth Project Execution.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Ensuring Robust Security Protocols To Protect Your Digital Assets And Infrastructure.",
    },
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "Asset Management Solution",
      description: "Comprehensive asset tracking system"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      title: "Data Analytics Platform",
      description: "Real-time business intelligence dashboard"
    },
    {
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      title: "Industrial IoT System",
      description: "Smart monitoring and control solution"
    },
  ];

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      date: "Mar 4, 2025",
      title: "Progress Meeting on Kitchener Project Performance Monitoring System with HCWW"
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      date: "Feb 5, 2025",
      title: "Coordination Meeting on JCAR Project: Advancing Asset Management"
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      date: "Oct 19, 2024",
      title: "PEPSI at Cairo Water Week 2024 | Enhancing Decision-Making"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Integrated Solution For Industrial Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Long-term partners or one-time customers, advancing the digital operations of business is instrumental. That's digital essential to us a company's
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Cloud className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Services
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At SeraGit, we provide a comprehensive range of IT services designed to support businesses in enhancing operations, optimizing performance, and driving sustainable growth. Whether it's developing custom software, implementing advanced AI solutions, or securing your digital infrastructure, our experienced team delivers tailored solutions that meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We consistently deliver cutting-edge software solutions that drive innovation, streamline operations, and elevate user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              View More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-blue-600 text-white rounded-2xl p-8 lg:p-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">200+</div>
          <div className="text-blue-100">Projects Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">150+</div>
          <div className="text-blue-100">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">50+</div>
          <div className="text-blue-100">Team Members</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">10+</div>
          <div className="text-blue-100">Years Experience</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Latest News And Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <button className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              More News
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Contact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Are you ready to cooperate? Is your company interested in collaborating? Do you have a project you would like to share? Get in touch!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.614795081984!2d31.235712!3d30.059489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM0LjIiTiAzMcKwMTQnMDguNiJF!5e0!3m2!1sen!2seg!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}