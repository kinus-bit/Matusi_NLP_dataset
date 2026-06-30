import { ArrowDown, Globe, Brain, ShieldCheck } from 'lucide-react';

export default function Home() {
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-900">
      {/* NLP background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Natural language processing and text data"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/70 to-gray-800/60" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-24 right-16 w-40 h-40 bg-gray-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-32 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-6 border border-yellow-400/40 px-3 py-1 rounded-full">
            Matusi Dataset V2 · Contributor Training
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Building High-Quality<br />
            <span className="text-yellow-400">African NLP</span><br />
            Datasets for AI
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
            African voices are underrepresented in the AI systems shaping our world. Matusi is a community-powered effort to change that — one carefully annotated sentence at a time.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all hover:shadow-xl active:scale-95"
            >
              Explore the Project
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              Get Involved
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Brain, value: '934', label: 'Published V1 Entries' },
              { icon: Globe, value: '2,000', label: 'V2 Target Entries' },
              { icon: ShieldCheck, value: '9', label: 'Contextual Columns' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-5">
                <Icon className="w-5 h-5 text-yellow-400 mb-2" />
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="relative z-10 mx-auto mb-12 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
