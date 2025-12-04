import React from 'react';
import { GraduationCap, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const students = [
    { name: "Muhammad Fathir Al Faruq", nim: "43050250011" },
    { name: "Alicia Zinta Maharani", nim: "43050250019" },
    { name: "Andi Kurniawan", nim: "43050250031" },
    { name: "Leila Ristiana", nim: "43050250035" },
  ];

  return (
    <footer className="bg-industrial-950 border-t border-industrial-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-industrial-900 via-safety-500 to-industrial-900 opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Left Side: General Info */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="text-safety-500" />
                    Tentang Project
                </h3>
                <p className="text-slate-400 max-w-md leading-relaxed text-sm">
                    Website edukasi interaktif ini dikembangkan sebagai media pembelajaran modern untuk memahami siklus hidup infrastruktur telekomunikasi secara komprehensif.
                </p>
                <div className="pt-4">
                    <div className="text-xs font-mono text-safety-500 mb-1">PROGRAM STUDI</div>
                    <div className="text-slate-200 font-semibold">Teknologi Informasi (TI)</div>
                    <div className="text-slate-400 text-sm">UIN Salatiga</div>
                </div>
            </div>

            {/* Right Side: Team Credits */}
            <div>
                <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2 mb-6">
                    <Users className="text-safety-500" />
                    Kelompok 5 - Ilmu Telekomunikasi
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {students.map((student, idx) => (
                        <div key={idx} className="bg-industrial-900 p-3 rounded-lg border border-industrial-800 hover:border-safety-500/50 transition-colors group">
                            <div className="text-slate-200 font-medium group-hover:text-safety-400 transition-colors text-sm">
                                {student.name}
                            </div>
                            <div className="text-slate-500 text-xs font-mono mt-1">
                                NIM: {student.nim}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-industrial-900 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Kelompok 5 TI UIN Salatiga. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-safety-400 cursor-pointer transition-colors">Referensi Materi</span>
            <span className="hover:text-safety-400 cursor-pointer transition-colors">Ilmu Telekomunikasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;