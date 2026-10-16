import { Calendar, ArrowRight, Mail, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewsImg from "../../assets/images/NewsImg.png";
import Image3 from "../../assets/images/imge3.png";
import Event3 from "../../assets/images/Event3.png";
import Event6 from "../../assets/images/Event6.png";
import Event4 from "../../assets/images/Event4.png";
import Event8 from "../../assets/images/Event8.png";
import { Link } from "react-router-dom";
interface Article {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured: boolean;
  fullContent: string;
}

export function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const newsArticles: Article[] = [
    {
      title: "Progress Meeting on Kitchener Project Performance Monitoring System with HCWW",
      date: "Mar 4, 2025",
      category: "Project Update",
      excerpt:
        "As part of the ongoing efforts to enhance water and sanitation services...",
      image: NewsImg,
      featured: true,
      fullContent: `As part of the ongoing efforts to enhance water and sanitation services, a productive meeting was held with the Holding Company for Water and Wastewater (HCWW) to discuss the progress of the Kitchener Project Performance Monitoring System.

The meeting focused on reviewing the current implementation status, addressing technical challenges, and aligning on the next steps to ensure the project's successful delivery. Key stakeholders from both teams collaborated to refine the system's features and enhance its capabilities for real-time performance monitoring.

This initiative is a significant step toward improving operational efficiency and ensuring sustainable water management across the region. We look forward to continuing this partnership and delivering impactful solutions for Egypt's water infrastructure.

Key Highlights:
• Reviewed current system implementation progress
• Identified and addressed technical challenges
• Aligned on enhanced features for real-time monitoring
• Strengthened collaboration between teams
• Set clear milestones for project delivery

The Kitchener Project represents a major advancement in water infrastructure management, incorporating cutting-edge technology to monitor and optimize system performance in real-time. This collaboration with HCWW demonstrates our commitment to delivering world-class solutions for Egypt's water sector.`,
    },
    {
      title: "Coordination Meeting on JCAR Project: Advancing Asset Management for Pumping Stations",
      date: "February 5, 2025",
      category: "Coordination",
      excerpt:
        "As part of the follow-up on studies related to the JCAR project...",
      image: Image3,
      featured: false,
      fullContent: `As part of the follow-up on studies related to the JCAR project, a coordination meeting was held to advance asset management systems for pumping stations across Egypt. The meeting brought together technical experts, project managers, and government stakeholders to discuss implementation strategies and timeline optimization.

The JCAR project represents a comprehensive approach to modernizing Egypt's water infrastructure through advanced asset management systems. This initiative will significantly improve the efficiency and reliability of pumping stations nationwide, ensuring sustainable water distribution for communities across the country.

Project Objectives:
• Implement comprehensive asset management systems
• Modernize pumping station operations
• Improve maintenance scheduling and efficiency
• Enhance real-time monitoring capabilities
• Reduce operational costs and downtime

The coordination meeting resulted in actionable plans for the next phase of implementation, with clear responsibilities assigned to all stakeholders. This collaborative approach ensures that the project stays on track to deliver transformative results for Egypt's water sector.

The JCAR project is expected to serve as a model for future infrastructure modernization initiatives, demonstrating the value of integrated asset management in improving public services and operational efficiency.`,
    },
    {
      title: "PEPSI at Cairo Water Week 2024 | Enhancing Decision-Making Through Asset Management",
      date: "Oct 19, 2024",
      category: "Event",
      excerpt:
        "We had an engaging session at Cairo Water Week 2024...",
      image: Event3,
      featured: false,
      fullContent: `We had an engaging session at Cairo Water Week 2024, where we showcased how the PEPSI project is revolutionizing decision-making through advanced asset management systems. The event brought together water sector professionals, government officials, and technology experts to discuss the future of water infrastructure management.

Our presentation highlighted the innovative approaches being implemented in the PEPSI project, demonstrating how data-driven asset management can transform operational efficiency and service delivery. Attendees were particularly interested in the real-time monitoring capabilities and predictive maintenance features of the system.

Session Highlights:
• Presented PEPSI project achievements and impact
• Demonstrated advanced asset management platforms
• Showcased real-time monitoring and analytics
• Discussed predictive maintenance capabilities
• Engaged with industry leaders and stakeholders

Cairo Water Week 2024 provided an excellent platform to share our expertise and learn from other water sector professionals. The positive feedback and interest in our solutions confirm that we're on the right path to transforming water infrastructure management in Egypt and beyond.

The PEPSI project continues to set new standards for asset management in the water sector, with proven results in improving operational efficiency, reducing costs, and enhancing service reliability for communities across Egypt.`,
    },
    {
      title: "Progress Meeting on Dutch-Egyptian Cooperation for Water Distribution Improvement",
      date: "July 2, 2024",
      category: "International Cooperation",
      excerpt:
        "As part of the regular meetings for the Joint Cooperation...",
      image: Event6,
      featured: false,
      fullContent: `As part of the regular meetings for the Joint Cooperation program between Egypt and the Netherlands, a progress meeting was held to discuss ongoing initiatives for water distribution improvement. This international partnership brings together Dutch expertise in water management with Egyptian infrastructure needs.

The meeting focused on reviewing the implementation of water distribution optimization systems, knowledge transfer activities, and capacity building programs for Egyptian water sector professionals. Both parties reaffirmed their commitment to sustainable water management and infrastructure modernization.

Cooperation Areas:
• Water distribution system optimization
• Technology transfer and knowledge sharing
• Capacity building and training programs
• Best practices in water management
• Sustainable infrastructure development

The Dutch-Egyptian cooperation has already yielded significant results, with several pilot projects demonstrating improved water distribution efficiency and reduced losses. This partnership serves as a model for international collaboration in addressing water sector challenges.

Future plans include expanding the cooperation to additional governorates, developing advanced monitoring systems, and establishing long-term sustainability frameworks to ensure the continued success of implemented solutions.`,
    },
    {
      title: "Asset Management Hackathon Announced",
      date: "October 2024",
      category: "Training",
      excerpt:
        "Interactive workshops held to train engineers...",
      image: Event4,
      featured: false,
      fullContent: `Interactive workshops were held to train engineers and technical staff on modern asset management systems and best practices. The hackathon brought together talented professionals from across the water sector to collaborate on innovative solutions and learn cutting-edge technologies.

Participants worked on real-world challenges, developing solutions for asset tracking, maintenance optimization, and performance monitoring. The event fostered a spirit of innovation and collaboration, with teams presenting creative approaches to common infrastructure management problems.

Hackathon Features:
• Hands-on training on asset management systems
• Real-world problem-solving challenges
• Team collaboration and innovation
• Expert mentorship and guidance
• Prizes for best solutions and innovations

The Asset Management Hackathon successfully achieved its goals of skill development, knowledge sharing, and fostering innovation in the water sector. Participants gained practical experience with modern tools and techniques that they can apply in their daily work.

Feedback from participants was overwhelmingly positive, with many expressing appreciation for the opportunity to learn from experts and collaborate with peers. The event has inspired plans for future hackathons and training programs to continue building capacity in the water sector.`,
    },
    {
      title: "PEPSI Project Year-End Recap 2024",
      date: "December 2024",
      category: "Project Recap",
      excerpt:
        "A small recap of the PEPSI project...",
      image: Event8,
      featured: false,
      fullContent: `A comprehensive recap of the PEPSI project achievements and milestones throughout 2024. This year marked significant progress in transforming water infrastructure management across Egypt through advanced technology and innovative approaches.

The PEPSI project has successfully implemented asset management systems across multiple facilities, trained hundreds of staff members, and demonstrated measurable improvements in operational efficiency and service delivery. These achievements represent a major step forward in modernizing Egypt's water sector.

2024 Achievements:
• Deployed systems across 50+ facilities
• Trained 200+ technical staff members
• Reduced maintenance costs by 30%
• Improved system uptime to 99.9%
• Enhanced decision-making through data analytics

Looking ahead to 2025, the PEPSI project will continue to expand its reach, implementing advanced features such as AI-powered predictive maintenance, mobile applications for field technicians, and enhanced reporting capabilities for management.

The success of the PEPSI project in 2024 demonstrates the transformative power of modern asset management systems in improving public infrastructure. We are proud of what we've accomplished and excited about the opportunities ahead as we continue to innovate and deliver value for Egypt's water sector.`,
    },
  ];

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M: any = motion;

  return (
    <div className="py-2" id="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="relative py-32 mb-20 overflow-hidden text-white rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/75 to-blue-950/95" />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              News & Insights
            </h1>
            <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto">
              The Latest News, Insights, Events, and Best Practices From Our Team of Experts
            </p>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-0">
              <div
                className="relative h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredArticle.image})` }}
              >
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  {featuredArticle.category}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{featuredArticle.date}</span>
                </div>
                <p className="text-slate-600 mb-6">{featuredArticle.excerpt}</p>
                <button
                  onClick={() => openArticle(featuredArticle)}
                  className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {article.category}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button
                  onClick={() => openArticle(article)}
                  className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl mt-20 p-8 lg:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Mail className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get the latest news, tutorials, and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white shadow-md"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Join our community of water management professionals and stay informed
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Have questions about our projects or want to learn more? We'd love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2">
            <Link
                to="/services#contact"
                onClick={() => window.scrollTo(0, 0)}
              >
              Contact Us
              </Link>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <M.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeArticle}
          >
            <M.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div
                className="relative h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedArticle.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={closeArticle}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {selectedArticle.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedArticle.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Close Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={closeArticle}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </M.div>
          </M.div>
        )}
      </AnimatePresence>
    </div>
  );
}