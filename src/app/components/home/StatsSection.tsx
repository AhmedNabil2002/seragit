import { useEffect, useRef, useState } from "react";

export function StatsSection() {
  const stats = [
    { value: 200, label: "Projects Delivered" },
    { value: 150, label: "Happy Clients" },
    { value: 50, label: "Team Members" },
    { value: 10, label: "Years Experience" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Start counting when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

useEffect(() => {
  if (!started) return;

  const duration = 2000; // total time in ms
  const intervalTime = 30;
  const totalTicks = Math.floor(duration / intervalTime);

  const steps = stats.map(stat => stat.value / totalTicks);

  const intervals = stats.map((stat, index) =>
    setInterval(() => {
      setCounts(prev => {
        if (prev[index] >= stat.value) return prev;

        const updated = [...prev];
        updated[index] = Math.min(
          stat.value,
          Math.ceil(prev[index] + steps[index])
        );

        return updated;
      });
    }, intervalTime)
  );

  return () => intervals.forEach(clearInterval);
}, [started, stats]);


  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20" />
              <path d="M100 20V180" stroke="white" strokeWidth="20" />
              <path d="M20 100H180" stroke="white" strokeWidth="20" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 p-8 opacity-10">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
              <rect x="0" y="0" width="100" height="100" stroke="white" strokeWidth="10" />
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl lg:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 ease-out">
                  {counts[index]}
                  {counts[index] >= stat.value && "+"}
                </div>
                <div className="text-blue-200 font-medium text-lg uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
