import {
  ArrowLeft,
  ExternalLink,
  Code,
  Database,
  Shield,
      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Overview</h2>
          <div className="prose max-w-none text-slate-600">
            <p className="text-lg mb-6">
              The MED (Mechanical and Electrical Department) system is a comprehensive
              web-based management platform developed for the Ministry of Water
              Resources and Irrigation in Egypt. This sophisticated system streamlines
              the operations and management of mechanical and electrical infrastructure
              across various water resource facilities.
            </p>
            <p className="text-lg mb-6">
              The platform provides a centralized solution for tracking assets,
              managing maintenance schedules, monitoring equipment performance,
              and facilitating collaboration between different departments within
              the ministry.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "500+", label: "Equipment Tracked" },
              { value: "50+", label: "Active Users" },
              { value: "20+", label: "Facilities Managed" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <M.div key={i} className="bg-blue-50 rounded-xl p-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={item}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </M.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Key Features</h2>
          <M.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={container}>
            {features.map((feature, index) => (
              <M.div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow" variants={item}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </M.div>
            ))}
          </M.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <M.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={item}>
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
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
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
              <M.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="MED Dashboard"
                  className="rounded-lg w-full"
                />
              </M.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Project Overview
          </h2>
          <div className="prose max-w-none text-slate-600">
            <M.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={container}>
              <M.div className="bg-white rounded-xl p-8 shadow-lg" variants={item}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Software Development</h3>
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

              <M.div className="bg-white rounded-xl p-8 shadow-lg" variants={item}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">System Integration</h3>
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

              <M.div className="bg-white rounded-xl p-8 shadow-lg" variants={item}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cloud Solutions</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Cloud infrastructure setup and management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Scalable architecture design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Automated backup and disaster recovery</span>
                  </li>
                </ul>
              </M.div>

              <M.div className="bg-white rounded-xl p-8 shadow-lg" variants={item}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Support & Maintenance</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Regular system updates and improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>User training and documentation</span>
                  </li>
                </ul>
              </M.div>
            </M.div>
          </div>
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
                import { ArrowLeft, ExternalLink, Code, Database, Shield, Cloud } from "lucide-react";
                import { Link } from "react-router";
                import logo1 from "@/assets/images/image4.2.png";
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
                      ... (truncated)
