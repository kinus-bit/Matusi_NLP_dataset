import { Database, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold">Matusi Dataset V2</p>
              <p className="text-xs text-gray-500">JHUB africa , JKUAT · Nairobi, Kenya</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            {['Home', 'About', 'Solution', 'Team', 'Contact'].map(link => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-gray-400 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2026 Matusi Research Group. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-gray-400 fill-gray-400" /> by Allan Kinuthia Mungai
          </p>
        </div>
      </div>
    </footer>
  );
}
