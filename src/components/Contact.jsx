import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2} from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', role: 'Contributor', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', role: 'Contributor', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-3 block">Get Involved</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Help Build the Future of African AI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you are a researcher, a student, or a native speaker who cares about your language — there is a place for you in Matusi.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info side */}
          <div className="md:col-span-2 space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img src="https://live.staticflickr.com/1528/26087510866_2635e9b43f_b.jpg?auto=compress&cs=tinysrgb&w=800" alt="Get in touch" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-700/30" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-bold text-lg">Join the movement</p>
                <p className="text-gray-300 text-xs">Every contribution counts</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Mail className="w-6 h-6 text-yellow-400 mb-3" />
              <h3 className="text-white font-bold mb-1">Email Us</h3>
              <p className="text-gray-300 text-sm">info@jkuat.ac.ke</p>
              <p className="text-gray-400 text-xs mt-1">We respond within 2 business days.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <MapPin className="w-6 h-6 text-yellow-400 mb-3" />
              <h3 className="text-white font-bold mb-1">Location</h3>
              <p className="text-gray-300 text-sm">JHUB africa, Jomo Kenyatta University of Agriculture and Technology</p>
              <p className="text-gray-400 text-xs mt-1">Nairobi, Kenya</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">Follow the Project</h3>
              <div className="flex gap-3">
                {[].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-yellow-400 hover:text-gray-900 rounded-full flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-500 text-sm">Your message has been received. We will be in touch soon.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">I want to join as a</label>
                    <select
                      value={form.role}
                      onChange={e => setForm({ ...form, role: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    >
                      <option>Contributor</option>
                      <option>Researcher</option>
                      <option>Student</option>
                      <option>Partner Organization</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none"
                      placeholder="Tell us about your language background, your interests, or how you would like to contribute..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
