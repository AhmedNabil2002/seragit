import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";



export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      detail: "057 2288844",
      subDetail: "01555720405",
      description: "24/7 Emergency Support",
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@seragit.com",
      subDetail: "support@seragit.com",
      description: "We'll reply within 24 hours",
      color: "purple",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "Cairo - nasr city-3-ismail elkabany",
      subDetail: "Damietta - Nafie St next to Al Mazloum Mosque",
      description: "Visit us at our office",
      color: "cyan",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "sun - thr: 9:00 AM - 6:00 PM",
      // subDetail: "sat: 10:00 AM - 4:00 PM",
      description: "24/7 Emergency Hotline",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      border: "border-blue-100",
      hover: "hover:border-blue-300",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      border: "border-purple-100",
      hover: "hover:border-purple-300",
    },
    cyan: {
      bg: "bg-cyan-50",
      icon: "text-cyan-600",
      border: "border-cyan-100",
      hover: "hover:border-cyan-300",
    },
    orange: {
      bg: "bg-orange-50",
      icon: "text-orange-600",
      border: "border-orange-100",
      hover: "hover:border-orange-300",
    },
  };

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            We're Here To Help
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
          </p>
        </M.div>

        {/* Contact Methods Grid */}
        <M.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const colors = colorClasses[method.color as keyof typeof colorClasses];
            return (
              <M.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} ${colors.hover} transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${colors.border}`}>
                  <method.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-slate-700 font-semibold text-sm mb-1">
                  {method.detail}
                </p>
                <p className="text-slate-600 text-sm mb-3">
                  {method.subDetail}
                </p>
                <p className="text-slate-500 text-xs">
                  {method.description}
                </p>
              </M.div>
            );
          })}
        </M.div>

        {/* Contact Form */}
        <M.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
              Send Us a Message
            </h3>
            <p className="text-slate-600 text-center mb-8">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <M.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </M.button>
              </div>
            </form>
          </div>
        </M.div>

        {/* Additional CTA */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4">
            Prefer to talk directly? Give us a call at{" "}
            <a href="tel:+01555720405" className="text-blue-600 font-semibold hover:underline">
              01555720405
            </a>
          </p>
          <p className="text-sm text-slate-500">
            Our team is available Monday through Friday, 9 AM to 6 PM (Cairo Time)
          </p>
        </M.div>
      </div>
    </section>
  );
}