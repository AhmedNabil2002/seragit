
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function NewsSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  const newsItems = [
    {
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      date: "Mar 4, 2025",
      title:
        "Progress Meeting on Kitchener Project Performance Monitoring System with HCWW",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      date: "Feb 5, 2025",
      title: "Coordination Meeting on JCAR Project: Advancing Asset Management",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      date: "Oct 19, 2024",
      title: "PEPSI at Cairo Water Week 2024 | Enhancing Decision-Making",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Insights</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Latest News & Updates
          </h2>
        </div>

        <M.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {newsItems.map((news, index) => (
            <M.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="h-52 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${news.image})` }}
              >
                  <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300 transform group-hover:scale-105 transition-transform"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-4 font-medium">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <Link
                  to="/news"
                  className="text-slate-600 font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-blue-600"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </M.div>
          ))}
        </M.div>

        <div className="flex justify-center mt-16">
            <Link to="/news">
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                View All News
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
