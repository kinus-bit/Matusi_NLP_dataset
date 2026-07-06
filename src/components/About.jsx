import { AlertTriangle, TrendingDown, Languages, BookOpen } from 'lucide-react';

const challenges = [
  { icon: TrendingDown, title: 'Limited Training Data', desc: 'African languages are severely underrepresented in public NLP datasets. This creates AI systems that perform poorly — or fail entirely — for hundreds of millions of speakers.' },
  { icon: Languages, title: 'Code-Switching Complexity', desc: 'Across Africa, people naturally blend languages in everyday speech. Current AI models rarely handle this linguistic reality, leading to broken or inaccurate interpretations.' },
  { icon: AlertTriangle, title: 'Missing Cultural Context', desc: 'A phrase harmless in one dialect can be deeply offensive in another. Without cultural grounding, AI systems misclassify and misrepresent meaning constantly.' },
  { icon: BookOpen, title: 'Few Evaluation Benchmarks', desc: 'Without robust benchmarks tailored to African languages, it is nearly impossible to measure how well AI models actually perform across diverse communities.' },
];

const comparisons = [
  { problem: 'English-dominated datasets', solution: 'African multilingual focus' },
  { problem: 'Keyword-heavy labeling', solution: 'Context-aware abusive-language data' },
  { problem: 'Little code-switching coverage', solution: 'Multilingual & code-switched expressions' },
  { problem: 'Limited cultural context', solution: 'Context-rich annotated records' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-600 mb-3 block">Why This Matters</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            The Gap in African AI
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            You already interact with AI systems every day — chatbots, translation tools, content filters. But most of these systems were built without African voices at the table. That is the gap Matusi exists to close.
          </p>
        </div>

        {/* Image + text block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://africdsa.com/assets/home-hero-cwTYDuE8.jpg"
              alt="African researchers collaborating"
              className="rounded-3xl w-full h-80 object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white rounded-2xl p-5 shadow-xl max-w-xs">
              <p className="text-sm font-medium leading-snug">
                "AI systems learn patterns from data. If the data is weak or unbalanced, the system will carry those weaknesses."
              </p>
              <p className="text-gray-400 text-xs mt-2 font-semibold">— Matusi Research Group</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale alone does not guarantee fairness</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The largest AI models in the world are trained on billions of words — yet they still struggle profoundly with African languages and code-switched speech. The issue is not computing power. It is data quality and representation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most web-scale data reflects the most visible communities online: English speakers, Western contexts, dominant cultures. African languages, local dialects, and culturally embedded expressions remain invisible — and therefore unlearned.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: '934', sub: 'entries published' },
                { n: 'V2', sub: 'now in progress' },
                { n: '9', sub: 'contextual fields per record' },
                { n: 'JKUAT', sub: 'research affiliation' },
              ].map(({ n, sub }) => (
                <div key={sub} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">{n}</div>
                  <div className="text-xs text-gray-500 mt-0.5 uppercase tracking-wide">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="relative rounded-2xl overflow-hidden h-44 group">
            <img src="https://www.ivokan.com/images/Ivokan-learning-african-language.jpg?auto=compress&cs=tinysrgb&w=6009" alt="African languages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">2,000+ languages</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-44 group">
            <img src="https://img.magnific.com/premium-photo/business-woman-handshake-agreement-partnership-office-collaboration-promotion-welcome-black-female-entrepreneur-employee-shaking-hands-interview-greeting-b2b-deal_590464-183698.jpg?semt=ais_hybrid&w=740&q=80?auto=compress&cs=tinysrgb&w=600" alt="Data annotation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">Careful annotation</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-44 group">
            <img src="https://st4.depositphotos.com/2783505/30904/i/450/depositphotos_309049518-stock-photo-motivated-african-american-business-team.jpg" alt="Research collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">Community research</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-44 group">
            <img src="https://img.magnific.com/free-photo/team-leader-server-room-teaching-intern-how-monitor-performance_482257-117997.jpg?semt=ais_hybrid&w=740&q=80?auto=compress&cs=tinysrgb&w=600" alt="AI development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">AI for Africa</p>
          </div>
        </div>

        {/* Challenges grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Contributing Factors to the NLP Gap</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all duration-200">
                <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                  <Icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-white font-bold text-2xl mb-2">Problem with existing datasets</h3>
              <p className="text-gray-400 text-sm mb-8">What the research community has been working with</p>
              <div className="space-y-4">
                {comparisons.map(({ problem }) => (
                  <div key={problem} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    <span className="text-white/80 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 md:p-12 bg-gray-800">
              <h3 className="text-white font-bold text-2xl mb-2">What Matusi adds</h3>
              <p className="text-gray-300 text-sm mb-8">Our approach to building something better</p>
              <div className="space-y-4">
                {comparisons.map(({ solution }) => (
                  <div key={solution} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-white text-sm font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
