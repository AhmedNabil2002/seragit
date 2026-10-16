import { Check, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactSection } from "./home/contactUsSection";
import { Link } from "react-router-dom";
export function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M: any = motion;

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "MED - Mechanical And Electrical Department",
      category: "Web",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Asset Management Platform",
      category: "Enterprise",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
      title: "IoT Monitoring System",
      category: "Industrial",
    },
  ];
const location = useLocation();

useEffect(() => {
  if (location.hash === "#contact") {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
    // <div className="bg-white">
    //   {/* Hero Section */}
    //   <M.div
    //     className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-32 overflow-hidden"
    //     initial={{ opacity: 0, y: 24 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     viewport={{ once: true, amount: 0.2 }}
    //     transition={{ duration: 0.7 }}
    //   >
    //     <div
    //       className="absolute inset-0 opacity-30"
    //       style={{
    //         backgroundImage:
    //           "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop)",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     ></div>
    //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
    //         Our work speaks for itself
    //       </h1>
    //     </div>
    //   </M.div>

    //   {/* Software Development */}
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
    Our work speaks for itself
    </h1>
  </div>
</div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Software Development
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our custom software development service is where lines of code
                merge with creativity, resulting in applications that drive your
                goals forward. From conceptualisation to coding, testing, and
                deployment, our skilled developers craft robust and
                user-friendly custom software tailored to your needs.
              </p>
              <M.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={containerVariants}
              >
                {[
                  "Web Development",
                  "Mobile App Development",
                  "Customer Relationship Management (CRM)",
                  "Enterprise Resource Planning (ERP)",
                  "Website Maintenance And Support",
                ].map((item, index) => (
                  <M.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </M.div>
                ))}
              </M.div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                alt="Software Development"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artificial Intelligence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
                alt="Artificial Intelligence"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Artificial Intelligence
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our tailor-made artificial intelligence app development services
                can be customised to align with your specific requirements,
                allowing us to arrive at the optimal solution.
              </p>
              <M.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={containerVariants}
              >
                {[
                  "Machine Learning Model Development and Deployment",
                  "Optical Character Recognition (OCR)",
                  "Natural Language Processing (NLP) Solutions",
                  "Chatbot and Virtual Assistant Development",
                  "Computer Vision and Image Recognition",
                  "Voice and Speech Recognition Applications",
                  "Predictive Analytics and Data Forecasting",
                  "AI-driven Automation and Process Optimisation",
                  "Data Mining and Pattern Recognition",
                  "Sentiment Analysis and Opinion Mining",
                  "AI-powered IoT Solutions",
                  "AI Integration with Existing Systems",
                ].map((item, index) => (
                  <M.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </M.div>
                ))}
              </M.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Product Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Digital Product Design
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We turn ideas into immersive digital experiences. Our team of
                innovative designers are experts at seamlessly blending
                aesthetics and functionality. From initial brainstorming to
                user-focused prototypes, we're here to transform your vision
                into a compelling digital experience.
              </p>
              <M.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={containerVariants}
              >
                {[
                  "User Experience Design (UX)",
                  "User Interface Design (UI)",
                  "Design Systems",
                  "Prototyping",
                  "Branding",
                ].map((item, index) => (
                  <M.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </M.div>
                ))}
              </M.div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                alt="Digital Product Design"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions & System Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Cloud Solutions"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Cloud Solutions & System Integration
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We help businesses migrate to the cloud, optimize cloud
                infrastructure, and integrate various software systems for
                smooth operations.
              </p>
              <M.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={containerVariants}
              >
                {[
                  "Cloud Migration",
                  "NGINX",
                  "Docker & Kubernetes",
                  "API Development & Integration",
                  "Microservices Architecture",
                  "DevOps Implementation",
                ].map((item, index) => (
                  <M.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </M.div>
                ))}
              </M.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Project Support
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Providing comprehensive technical assistance to ensure smooth
                project execution. Our dedicated support team is here to help
                you at every stage.
              </p>
              <M.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={containerVariants}
              >
                {[
                  "Technical Consulting",
                  "System Maintenance & Updates",
                  "Performance Optimization",
                  "Bug Fixes & Troubleshooting",
                  "Training & Documentation",
                  "24/7 Technical Support",
                ].map((item, index) => (
                  <M.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </M.div>
                ))}
              </M.div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Project Support"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <M.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  <button className="text-blue-600 font-medium text-sm hover:underline">
                    <Link to="/projects#med"
                    onClick={() => window.scrollTo(0, 0)}
                    >
                      Learn More
                      </Link>
                  </button>
                </div>
              </M.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
  className="text-3xl font-bold text-slate-900 mb-4"
  id="contact"
>
  Contact
</h2>

            <p className="text-slate-600">
              We Prioritize Responding To Your Inquiries Promptly To Ensure You
              Receive The Assistance You Need In A Timely Manner.
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
      </section> */}
      <ContactSection></ContactSection>
      </div>
      </div>
  );
}
