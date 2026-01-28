
export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you need a custom solution or have a question about our services, 
            our team is ready to help you achieve your goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <form className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Ahmed"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Ahmed@example.com"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
          </form>
          
          <div className="flex justify-center mt-10">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
