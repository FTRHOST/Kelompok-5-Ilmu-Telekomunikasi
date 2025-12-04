import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Stage, CardProps } from '../types';

const RoadmapCard: React.FC<CardProps> = ({ stage, onClick, index }) => {
  const Icon = stage.icon;

  return (
    <div 
      className="group relative bg-industrial-800 rounded-xl p-6 border border-industrial-700 hover:border-safety-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full flex flex-col"
      onClick={() => onClick(stage)}
    >
      {/* Number Badge */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-industrial-900 border-2 border-safety-500 text-safety-500 rounded-lg flex items-center justify-center font-bold font-mono shadow-lg group-hover:bg-safety-500 group-hover:text-industrial-900 transition-colors">
        0{index + 1}
      </div>

      <div className="mb-4 mt-2 p-3 bg-industrial-900/50 rounded-lg w-fit text-safety-400 group-hover:text-safety-500 transition-colors">
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-safety-400 transition-colors">
        {stage.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {stage.shortDescription}
      </p>

      <div className="flex items-center text-safety-500 text-sm font-semibold mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
        <span>Lihat Detail</span>
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default RoadmapCard;