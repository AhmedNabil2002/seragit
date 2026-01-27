
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="relative py-0 bg-slate-50">
      <div className="w-full h-[500px] relative overflow-hidden grayscale-0 hover:grayscale-0 transition-all duration-700">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.614795081984!2d31.235712!3d30.059489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM0LjIiTiAzMcKwMTQnMDguNiJF!5e0!3m2!1sen!2seg!4v1234567890"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SeraGit Location"
        />

        {/* Info Card Overlay */}
        <div className="absolute top-1/2 left-8 md:left-20 transform -translate-y-1/2 max-w-sm w-full"> 
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-none">
                        SeraGit HQ
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">Cairo, Egypt</span>
                    </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Industrial Digital Solutions & Software Services hub. Visit us for a cup of coffee and a chat about your next big project.
                </p>

                <div className="space-y-3 text-sm text-slate-700 border-t border-slate-100 pt-4 mb-6">
                <p className="flex items-start gap-3">
                    <span className="text-lg">📍</span> 
                    <span>Cairo, Naser city</span>
                </p>
                <p className="flex items-center gap-3">
                    <span className="text-lg">📞</span> 
                    <span className="font-mono">01555720405</span>
                </p>
                <p className="flex items-center gap-3">
                    <span className="text-lg">✉️</span> 
                    <span className="font-medium text-blue-600">info@seragit.com</span>
                </p>
                </div>

                <a
                href={`https://www.google.com/maps/dir/?api=1&destination=30.059489,31.235712`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25"
                >
                <MapPin className="w-4 h-4" />
                Get Directions
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
