import React from 'react';
import { ArrowDown, Network, CircuitBoard } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToRoadmap = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-industrial-900">
      {/* Smart Tech Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-safety-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Floating Particles (Simulated with simple divs) */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-safety-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-industrial-800/80 border border-safety-500/30 backdrop-blur-md text-safety-400 text-xs font-bold tracking-wider mb-8 animate-fade-in-up hover:border-safety-500 transition-colors cursor-default shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          <CircuitBoard size={14} />
          <span className="uppercase">Smart Learning Module V2.0</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Infrastruktur <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-400 via-yellow-200 to-safety-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
            Telekomunikasi Masa Depan
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
          Pelajari siklus hidup infrastruktur telekomunikasi mulai dari perencanaan strategis, pembangunan fisik, hingga teknologi pintar.
        </p>
        
        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleScrollToRoadmap}
            className="group relative px-8 py-4 bg-safety-500 text-industrial-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            <span className="relative z-10 flex items-center gap-2">
              Mulai Belajar <Network size={20} className="group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500/50 cursor-pointer hover:text-safety-400 transition-colors" onClick={handleScrollToRoadmap}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;