import React, { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { ModalProps } from '../types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, stage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  if (!stage) return null;

  const Icon = stage.icon;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isOpen ? 'bg-black/80 backdrop-blur-sm' : 'bg-black/0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div 
        className={`bg-industrial-800 w-full max-w-2xl rounded-2xl border border-industrial-600 shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-industrial-900 to-industrial-800 flex items-center px-8 border-b border-industrial-700">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 bg-safety-500 rounded-xl text-industrial-900 shadow-lg shadow-safety-500/20">
                    <Icon size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-wide">{stage.title}</h2>
                    <p className="text-safety-400 font-mono text-sm uppercase tracking-wider">Tahap 0{stage.id}</p>
                </div>
            </div>

            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-industrial-700 rounded-full transition-colors"
                aria-label="Close modal"
            >
                <X size={24} />
            </button>
        </div>

        {/* Content */}
        <div className="p-8">
            <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-safety-500" size={20} />
                Detail Aktivitas
            </h3>
            <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
                <p className="text-lg leading-relaxed">
                    {stage.fullDescription}
                </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-industrial-700 flex justify-end">
                <button 
                    onClick={onClose}
                    className="px-6 py-2 bg-industrial-700 hover:bg-industrial-600 text-white rounded-lg transition-colors font-medium text-sm"
                >
                    Tutup Penjelasan
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;