import { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

const links = ['Home', 'About', 'Solution', 'Team', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Matusi
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border transition-colors ${scrolled ? 'text-gray-700 border-gray-700' : 'text-gray-300 border-gray-400'}`}>
            V2
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium transition-colors hover:text-gray-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg active:scale-95"
          >
            Contribute
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open
            ? <X className={scrolled ? 'text-gray-900' : 'text-white'} />
            : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full w-full mt-2"
          >
            Contribute
          </button>
        </div>
      )}
    </nav>
  );
}
