import { Code, Smartphone, Cloud, Database, Lock, Cog } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web applications using React, Node.js, and modern frameworks",
      features: [
        "Responsive web design",
        "Progressive Web Apps",
        "E-commerce solutions",
        "Custom CMS development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native apps",
        "Native iOS/Android",
        "UI/UX design",
        "App store deployment",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Cloud architecture, migration, and DevOps solutions",
      features: [
        "AWS/Azure/GCP",
        "CI/CD pipelines",
        "Infrastructure as Code",
        "Cloud migration",
      ],
    },
    {
      icon: Database,
      title: "Data Solutions",
      description:
        "Database design, analytics, and business intelligence",
      features: [
        "Database architecture",
        "Data warehousing",
        "Analytics dashboards",
        "Machine learning",
      ],
    },
    {
      icon: Lock,
      title: "Security Services",
      description:
        "Comprehensive security audits and implementation",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance consulting",
        "Secure coding",
      ],
    },
    {
      icon: Cog,
      title: "Consulting",
      description:
        "Technical consulting and digital transformation strategy",
      features: [
        "Technology assessment",
        "Architecture design",
        "Team training",
        "Process optimization",
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We provide end-to-end software development services to help
            businesses innovate and scale. Our experienced team delivers
            high-quality solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-14 h-14 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Discovery</h3>
              <p className="text-sm text-slate-600">
                Understanding your requirements and goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Design</h3>
              <p className="text-sm text-slate-600">
                Creating wireframes and architecture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Development</h3>
              <p className="text-sm text-slate-600">
                Building and testing your solution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Deploy</h3>
              <p className="text-sm text-slate-600">
                Launching and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
