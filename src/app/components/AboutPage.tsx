import { Target, Users, Shield, CheckCircle } from "lucide-react";

export  function AboutPage() {
  const tools = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering the future with advanced technology and AI-driven solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering teamwork within our company and strong partnerships with our clients.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Ensuring robust, secure, and high-performance solutions.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Conducting business with transparency, ethics, and trust.",
    },
  ];

  const faqs = [
    {
      question: "What Industries And Businesses Do You Collaborate With?",
      answer: "We partner with industrial service providers, manufacturing firms, government organizations, and enterprises that require advanced maintenance management (CMMS), risk-based asset management (EAM), AI-driven automation, and cybersecurity solutions. Our expertise spans multiple sectors where operational efficiency and security are critical."
    },
    {
      question: "How Do You Ensure The Confidentiality And Security?",
      answer: "Security is at the core of everything we build. We implement enterprise-grade encryption, strict access controls, and advanced security measures such as firewall protection (Sophos), secure cloud environments, and compliance-driven policies to safeguard client data and maintain regulatory standards."
    },
    {
      question: "What Is The Ideal Team Size For Handling A Project?",
      answer: "The required team size varies based on the project's scale and complexity. A customized digital solution may involve: Project Manager, CMMS/EAM Specialists, AI Engineers, Software Developers (Frontend & Backend), UI/UX Designers, Cybersecurity Experts, and Quality Assurance (QA) Specialists."
    },
    {
      question: "How Do You Ensure Successful Project Execution?",
      answer: "We follow a structured methodology: Needs Assessment, Agile Development Approach, Performance Testing, Regular Client Collaboration, and Post-Deployment Support."
    },
    {
      question: "Do You Rely On Third-Party Outsourcing For Development?",
      answer: "No, we maintain complete in-house control over development, security, and project execution. This guarantees high-quality standards, confidentiality, and seamless collaboration throughout the project lifecycle."
    },
    {
      question: "Do You Provide Technical Support And Maintenance After Project Completion?",
      answer: "Yes, we offer long-term support, system upgrades, and technical maintenance services to ensure optimal performance, security, and adaptability of our solutions."
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About SeraGit</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I Help You develop software solution for your business
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Description Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            We build robust software solutions with highly creative and dedicated offshore teams!
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed">
            <p>
              Founded in 2012, SeraGit (Integrated Solutions for Industrial Services) has been delivering advanced digital 
              solutions for over ten years. With a team of 11–50 skilled professionals, we specialize in custom software, 
              AI-powered automation, enterprise solutions, cybersecurity, and cloud integration—with a strong focus on industrial services.
            </p>
            <div className="my-12">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop" 
                alt="SeraGit Team"
                className="rounded-lg shadow-xl mx-auto w-full max-w-2xl"
              />
            </div>
            <p>
              Our expertise spans multiple departments, including Frontend Development, Backend Development, AI Development, 
              Sales, IT & Cybersecurity, Digital Product Design (UI/UX), and Technical Support. This well-rounded structure 
              allows us to develop scalable, secure, and high-performance applications that drive efficiency and innovation 
              across industries.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop" 
                  alt="Mission"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be a global leader in AI-powered industrial solutions, transforming businesses with smart, secure, 
                  and efficient digital technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop" 
                  alt="Vision"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  We empower businesses with intelligent, data-driven solutions that enhance efficiency, reduce costs, 
                  and improve operational performance. By integrating AI, automation, and cybersecurity, we create 
                  cutting-edge systems that help industries succeed in an evolving digital world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            SeraGit Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* People Section */}
        <div className="bg-gray-100 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            People are the key to success
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At SeraGit, we firmly believe that the strength of our team lies in the unique talents and skills of each individual. 
                That's why we invest a great deal of time in carefully selecting and hiring the best industry talent, enabling us 
                to secure unmatched value for our clients while fostering a thriving workplace where team members can truly flourish.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At SeraGit, we are committed to building a culture of innovation, collaboration, and excellence. By empowering our team 
                with the latest tools, continuous learning opportunities, and a supportive work environment. This dedication not only 
                drives our success but also enables us to deliver exceptional solutions that exceed our clients' expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At SeraGit, we are dedicated to creating a dynamic and inspiring workplace where talent thrives, ideas flourish, 
                and innovation drives progress. By embracing diversity and fostering teamwork, we build a strong foundation for both 
                individual and collective success. Our passion for excellence ensures that we consistently deliver outstanding results 
                for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Technology and tools used in SeraGit projects
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
                title={tool.name}
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white group-open:bg-white group-open:text-blue-600 transition-colors">
                    <span className="text-xl group-open:hidden">+</span>
                    <span className="text-xl hidden group-open:inline">−</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}