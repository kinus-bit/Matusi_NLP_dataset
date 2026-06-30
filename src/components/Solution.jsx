import { CheckCircle2, Globe2, ShieldCheck, Scale, BookOpen, Flag, Database, ClipboardCheck, Search } from 'lucide-react';

const qualityPillars = [
  { icon: CheckCircle2, title: 'Valid', desc: 'Labels accurately match the phenomenon being studied — not guesswork, not approximation.' },
  { icon: Globe2, title: 'Culturally Grounded', desc: 'Real language use and local meaning are preserved, not sanitized or erased.' },
  { icon: ShieldCheck, title: 'Ethically Sourced', desc: 'Privacy is protected and harmful content is handled responsibly throughout the pipeline.' },
  { icon: Scale, title: 'Reliable', desc: 'Labels applied consistently and reviewed carefully by multiple annotators.' },
  { icon: BookOpen, title: 'Documented', desc: 'Every entry is understood, traceable, and ready to be reused or audited by future researchers.' },
];

const buildSteps = [
  { icon: Flag, step: '01', title: 'Define the Task', desc: 'Decide exactly what the dataset should capture — what counts as abusive, what context matters, and what languages are in scope.' },
  { icon: Database, step: '02', title: 'Collect Responsibly', desc: 'Gather real expressions within agreed ethical guidelines. Preserve code-switching, slang, and dialect variation — never flatten them.' },
  { icon: ClipboardCheck, step: '03', title: 'Annotate Carefully', desc: 'Apply structured labels consistently. Record meaning, target type, severity, and whether context changes interpretation.' },
  { icon: Search, step: '04', title: 'Review Quality', desc: 'Check for labeling disagreements, gaps in coverage, and culturally ambiguous cases. Flag uncertain entries rather than forcing a decision.' },
  { icon: BookOpen, step: '05', title: 'Document and Release', desc: 'Record how the dataset was built, what decisions were made, and how researchers should use it responsibly.' },
];

const principles = [
  { n: '1', title: 'Construct Clarity', desc: 'Know what counts as abusive and what does not before you begin.' },
  { n: '2', title: 'Cultural Grounding', desc: 'Do not erase local meaning — preserve the expression as it naturally occurs.' },
  { n: '3', title: 'Privacy & Ethics', desc: 'Remove personal identifiers and treat sensitive content with care.' },
  { n: '4', title: 'Consistency', desc: 'Use the same rules and label definitions across every entry.' },
  { n: '5', title: 'Documentation', desc: 'Record source, notes, and uncertainty clearly for every record.' },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            The Matusi Solution
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            A world-class dataset is not just a large pile of examples. It is a carefully constructed research asset — valid, culturally grounded, ethically handled, and properly documented.
          </p>
        </div>

        {/* Banner image */}
        <div className="relative rounded-3xl overflow-hidden h-72 mb-20">
          <img src="https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Data quality and research" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-12">
            <p className="text-white text-2xl md:text-3xl font-bold max-w-lg leading-snug">
              "Quality is not an accident. It is the result of intelligent effort."
            </p>
          </div>
        </div>

        {/* Quality pillars */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
          {qualityPillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-900 rounded-2xl p-6 text-center flex flex-col items-center hover:bg-gray-800 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{title}</h4>
              <p className="text-gray-300 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Build process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">How a High-Quality Dataset is Built</h3>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 mx-24" />
            <div className="grid md:grid-cols-5 gap-6 relative z-10">
              {buildSteps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-2xl flex items-center justify-center shadow-md mb-4 relative">
                    <Icon className="w-8 h-8 text-gray-700" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full text-xs font-bold text-gray-900 flex items-center justify-center">{step}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dataset structure */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Structured data" className="rounded-2xl w-full h-64 object-cover shadow-md mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inside the Dataset</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Each entry in Matusi is far more than a flagged sentence. It is a 9-field contextual record designed to capture the full meaning, cultural setting, and abuse characteristics of every expression.
              </p>
              <p className="text-gray-500 leading-relaxed">
                This rich structure is what separates Matusi from keyword lists. Context is not optional — it is baked into every row of the dataset.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                'original_expression', 'intended_meaning', 'context_example',
                'literal_translation', 'language', 'target_type',
                'preliminary_category', 'context_dependence', 'severity',
              ].map(field => (
                <div key={field} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                  <code className="text-xs text-gray-700 font-mono break-all">{field}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Abusive language types */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-white font-bold text-2xl text-center mb-3">Abusive Language is Not Just "Bad Words"</h3>
          <p className="text-gray-300 text-center text-sm mb-10 max-w-xl mx-auto">
            Detecting harm in language requires far more than a list of slurs. Context, tone, and culture all shape meaning.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Explicit', example: 'Direct insults with clear abusive intent' },
              { title: 'Implicit', example: 'Harm conveyed without any obvious slur' },
              { title: 'Playful / Sarcastic', example: 'Tone changes everything — banter or attack?' },
              { title: 'Code-Switched', example: 'Language mixing shapes and shifts meaning' },
              { title: 'Culturally Coded', example: 'Requires local knowledge to interpret correctly' },
            ].map(({ title, example }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-colors">
                <h4 className="text-yellow-400 font-bold text-sm mb-2">{title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Current Progress</h3>
              <p className="text-gray-500 mb-8">Matusi does not need random growth. It needs careful, diverse, and reviewed expansion.</p>
              <div className="mb-3">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-gray-900">934 published</span>
                  <span className="text-gray-400">2,000 target</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div className="bg-gray-800 h-4 rounded-full transition-all duration-1000" style={{ width: '46.7%' }} />
                </div>
                <p className="text-xs text-gray-400 mt-2">1,066 entries remaining to reach V2 target</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">Still needs to be built</h4>
              <ul className="space-y-3">
                {[
                  'Stronger coverage across languages and language mixes',
                  'More implicit and difficult abuse cases',
                  'More reviewed and validated entries',
                  'Stronger balance across target groups and abuse types',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contributor principles */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Five Principles for Every Contributor</h3>
          <div className="space-y-4">
            {principles.map(({ n, title, desc }) => (
              <div key={n} className="flex items-center gap-6 bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {n}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{title}</h4>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
