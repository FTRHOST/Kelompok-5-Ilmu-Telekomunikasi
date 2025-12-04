import React from 'react';
import { RadioTower } from 'lucide-react';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate offset to account for sticky header height (approx 64px + padding)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-industrial-900/80 border-b border-industrial-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="p-2 bg-safety-500 rounded-lg text-industrial-900 group-hover:scale-110 transition-transform duration-300">
            <RadioTower size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl tracking-tight text-slate-100 uppercase">
              Infrastruktur <span className="text-safety-400">Telekomunikasi</span>
            </h1>
            <p className="text-[10px] md:text-xs text-slate-400 font-mono tracking-widest hidden sm:block">
              EDUKASI TEKNOLOGI JARINGAN
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <a 
            href="#intro" 
            onClick={(e) => handleNavClick(e, 'intro')}
            className="hover:text-safety-400 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-safety-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
          >
            Pengenalan
          </a>
          <a 
            href="#roadmap" 
            onClick={(e) => handleNavClick(e, 'roadmap')}
            className="hover:text-safety-400 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-safety-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
          >
            Tahapan
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;