import { Calendar, ArrowRight,Mail } from "lucide-react";
import NewsImg from "../../assets/images/NewsImg.png";
import Image3 from "../../assets/images/imge3.png";
import Event3 from "../../assets/images/Event3.png";
import Event6 from "../../assets/images/Event6.png";
import Event4 from "../../assets/images/Event4.png";
import Event8 from "../../assets/images/Event8.png";

export function NewsPage() {
  const newsArticles = [
    {
      title: "Progress Meeting on Kitchener Project Performance Monitoring System with HCWW",
      date: "Mar 4, 2025",
      category: "Project Update",
      excerpt:
        "As part of the ongoing efforts to enhance water and sanitation services...",
      image: NewsImg,
      featured: true,
    },
    {
      title: "Coordination Meeting on JCAR Project: Advancing Asset Management for Pumping Stations",
      date: "February 5, 2025",
      category: "Coordination",
      excerpt:
        "As part of the follow-up on studies related to the JCAR project...",
      image: Image3,
      featured: false,
    },
    {
      title: "PEPSI at Cairo Water Week 2024 | Enhancing Decision-Making Through Asset Management",
      date: "Oct 19, 2024",
      category: "Event",
      excerpt:
        "We had an engaging session at Cairo Water Week 2024...",
      image: Event3,
      featured: false,
    },
    {
      title: "Progress Meeting on Dutch-Egyptian Cooperation for Water Distribution Improvement",
      date: "July 2, 2024",
      category: "International Cooperation",
      excerpt:
        "As part of the regular meetings for the Joint Cooperation...",
      image: Event6,
      featured: false,
    },
    {
      title: "Asset Management Hackathon Announced",
      date: "October 2024",
      category: "Training",
      excerpt:
        "Interactive workshops held to train engineers...",
      image: Event4,
      featured: false,
    },
    {
      title: "PEPSI Project Year-End Recap 2024",
      date: "December 2024",
      category: "Project Recap",
      excerpt:
        "A small recap of the PEPSI project...",
      image: Event8,
      featured: false,
    },
  ];

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            News & Insights
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The Latest News, Insights And Best Practices From Our Team Of Experts
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-0">
              <div
  className="relative h-64 lg:h-auto bg-cover bg-center"
  style={{ backgroundImage: `url(${featuredArticle.image})` }}
>

                <Calendar className="w-24 h-24 text-white opacity-30" />
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
                <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
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
>

                <Calendar className="w-16 h-16 text-white opacity-30" />
              </div>
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
                <button className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 lg:p-12 shadow-2xl">
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
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white shadow-md"
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
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}