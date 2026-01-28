import {
  ArrowLeft,
  ExternalLink,
  Code,
  Database,
  Shield,
  Cloud,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo1 from "@/assets/images/image4.2.png";
import main from "@/assets/images/project1.png";
import detailsone from "@/assets/images/ProjectDetailesImg.png";
import detailstwo from "@/assets/images/ProjectDetailesBg.png";
import { motion, useReducedMotion } from "framer-motion";

export function MEDProjectPage() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };

  const item = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M: any = motion;

  const features = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom web application development tailored for government infrastructure management",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Comprehensive data management system for mechanical and electrical assets",
    },
    {
      icon: Shield,
      title: "Security & Access Control",
      description: "Role-based access control and secure authentication system",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud-based solution for efficient resource management",
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "PostgreSQL",
    "Azure Cloud",
    "TypeScript",
    "Express.js",
  ];

  const projectDetails = [
    { label: "Client", value: "Ministry of Water Resources and Irrigation" },
    { label: "Platform", value: "Web Application" },
    { label: "Industry", value: "Government / Infrastructure" },
    { label: "Technology", value: "React, Node.js, PostgreSQL, Azure" },
    { label: "Duration", value: "8 Months" },
    { label: "Team Size", value: "12 Professionals" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <M.div
        className="bg-gray-50 border-b"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </M.div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <M.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={item}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={logo1}
                  alt="MED Logo"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                  Web Application
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" id="med">
                MED - Mechanical And Electrical Department
              </h1>

              <p className="text-xl text-slate-600 mb-8">
                Ministry of Water Resources and Irrigation - Mechanical and
                Electrical Engineering Department Management System
              </p>

              <a
                href="https://med.mwri.gov.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </M.div>

            <div className="relative">
              <M.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <img
                  src={main}
                  alt="MED Dashboard"
                  className="rounded-lg w-full"
                />
              </M.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Project Overview
          </h2>
          
          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="prose max-w-none text-slate-600">
              <p className="text-lg mb-6">
                The MED (Mechanical and Electrical Department) system is a
                comprehensive web-based management platform developed for the
                Ministry of Water Resources and Irrigation in Egypt. This sophisticated 
                system streamlines the operations and management of mechanical and 
                electrical infrastructure across various water resource facilities.
              </p>
              <p className="text-lg mb-6">
                The platform provides a centralized solution for tracking assets,
                managing maintenance schedules, monitoring equipment performance,
                and facilitating collaboration between different departments
                within the ministry.
              </p>
            </div>

            {/* Project Info Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Project Details</h3>
              <div className="space-y-4">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-500 mb-1">
                      {detail.label}
                    </span>
                    <span className="text-base text-slate-900">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Images Section */}
          <M.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <M.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <img
                src={detailsone}
                alt="MED Project Details View 1"
                className="w-full h-auto object-cover"
              />
            </M.div>

            <M.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <img
                src={detailstwo}
                alt="MED Project Details View 2"
                className="w-full h-auto object-cover"
              />
            </M.div>
          </M.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "500+", label: "Equipment Tracked" },
              { value: "50+", label: "Active Users" },
              { value: "20+", label: "Facilities Managed" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <M.div
                key={i}
                className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={item}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </M.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Client Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Client
              </h2>
              <div className="prose max-w-none text-slate-600">
                <p className="text-lg mb-4">
                  The Department Of Mechanical And Electrical Maintenance At One Of 
                  Egypt's Oldest Government Entities, Operating From The Early 1950s. 
                  The Entity Manages Experienced By Mechanical & Electrical Experts 
                  Responsible For Maintaining And Repairing All Pumping Stations, 
                  Drainage Stations, And Irrigation Channels Across The Republic.
                </p>
                <p className="text-lg mb-4">
                  Maintenance: 380% In Project A And More In Egypt's Most Vital 
                  Sectors, They Trusted Our Team To Build, Implement, And Utilize 
                  The Asset Management System Successfully Deployed Across Egypt.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <M.div
                className="bg-white rounded-xl p-6 shadow-md text-center"
                whileHover={{ y: -5 }}
              >
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">380+</div>
                <div className="text-sm text-slate-600">Maintenance Staff</div>
              </M.div>
              <M.div
                className="bg-white rounded-xl p-6 shadow-md text-center"
                whileHover={{ y: -5 }}
              >
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                <div className="text-sm text-slate-600">Project Success</div>
              </M.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Result Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            The Result
          </h2>
          <div className="prose max-w-none text-slate-600">
            <p className="text-lg mb-6">
              100% Successfully Delivered The MED System: A Comprehensive Asset 
              Management And Maintenance System For Egypt's Critical Water 
              Infrastructure. Delivering Innovative Decisions To 400 Excess 
              Efficiency, By Integrating Predictive Maintenance, They Track Thousands 
              Of Assets, Assets, Organizations, Organizations, Across 150 
              Departments Faster, More Responsive, And More Scalable, Easily To 
              Hundreds Of Users Nationwide.
            </p>
            <p className="text-lg mb-6">
              Understand Tools, With A User-Friendly Interface And Seamless Data 
              Access Enable The System Reduces Downtime, Maintenance Costs, And 
              Enhances Asset Lifespan. The MED System Features Greater Reliability, 
              Cost Effectiveness, And Long-Term Sustainability For Asset Management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Key Features
          </h2>

          <M.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={container}
          >
            {features.map((feature, index) => (
              <M.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                variants={item}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </M.div>
            ))}
          </M.div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <M.span
                key={index}
                className="bg-gray-100 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.04 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={item}
              >
                {tech}
              </M.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Services Provided
          </h2>
          <M.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={container}
          >
            <M.div
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={item}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Software Development
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Custom web application development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Responsive and user-friendly interface design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Real-time data synchronization</span>
                </li>
              </ul>
            </M.div>

            <M.div
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={item}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                System Integration
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Integration with existing ministry systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>API development for third-party integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Data migration and consolidation</span>
                </li>
              </ul>
            </M.div>
          </M.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <M.div
            className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={item}
          >
            <h2 className="text-3xl font-bold mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to discuss how we can help transform your vision into
              reality
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services#contact"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="https://med.mwri.gov.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                View Live Project <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </M.div>
        </div>
      </section>
    </div>
  );
}