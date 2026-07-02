import { Users, Target, Heart, Sparkles } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'We are here to fix a real gap in AI — not to chase hype. Every entry we add serves that goal.' },
  { icon: Heart, title: 'Community First', desc: 'Matusi is built by people who live these languages. Contributors are not labor — they are the experts.' },
  { icon: Sparkles, title: 'Quality Over Quantity', desc: 'A small, carefully reviewed dataset beats a massive, noisy one. We grow slowly and deliberately.' },
  { icon: Users, title: 'Open Collaboration', desc: 'Researchers, students, and native speakers work side by side. Knowledge flows in every direction.' },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            A Community, Not Just a Project
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Matusi is a research effort based at Jomo Kenyatta University of Agriculture and Technology (JKUAT). It brings together students, researchers, and native speakers to build datasets that reflect African realities.
          </p>
        </div>

        {/* Image banner */}
        <div className="relative rounded-3xl overflow-hidden mb-8 h-80">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-white text-xl md:text-2xl font-bold max-w-2xl leading-snug">
              "We are not just collecting data. We are documenting how language actually lives and breathes across our communities."
            </p>
          </div>
        </div>

        {/* Contributor image grid */}
        <div className="flex justify-center mb-20">
  <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm w-full max-w-4xl">
    <h3 className="text-2xl font-bold text-gray-900 text-center">
      Project Team Members
    </h3>

    {/* Yellow accent */}
    <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-3 mb-10" />

    <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
      {[
		"Dr.Lawrence Nderu - Supervisor",
        "Allan Kinuthia - Intern",
        "Brian Matara - Intern",
        "Daiddo Githaiga - Intern",
        "Stephen Njuguna - Intern",
        "Hope Wangari - Intern",
        "Newton Lekakeny - Intern",
        "Haron Murithi - Intern",
      ].map((member, index) => (
        <div
          key={index}
          className="
            flex items-center gap-4
            bg-gray-50
            border border-gray-100
            rounded-2xl
            p-4
            hover:border-yellow-400
            hover:bg-yellow-50
            hover:shadow-md
            transition-all duration-300
          "
        >
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-gray-900 font-bold shrink-0">
            {index + 1}
          </div>

          <p className="text-gray-700 font-medium">
            {member}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
