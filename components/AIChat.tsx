import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Halo! Saya asisten AI InfraTelko. Ada yang bisa saya bantu mengenai infrastruktur jaringan?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
            {
                role: "user",
                parts: [{ text: userMessage }]
            }
        ],
        config: {
          systemInstruction: "Kamu adalah asisten ahli untuk website edukasi 'Infrastruktur Telekomunikasi'. Kamu harus menjawab pertanyaan seputar materi: Perencanaan Infrastruktur, Pembangunan Fisik Menara, Konfigurasi Jaringan & NFC, Pengujian Jaringan, Evaluasi, dan Pemeliharaan. Jawablah dengan ringkas, edukatif, dan nada yang membantu mahasiswa belajar. Jika ditanya diluar topik telekomunikasi, arahkan kembali ke topik tersebut dengan sopan.",
        },
      });

      const text = response.text || "Maaf, saya sedang mengalami gangguan koneksi.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Maaf, terjadi kesalahan pada sistem AI." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-110 flex items-center gap-2 ${isOpen ? 'bg-industrial-800 text-slate-400 rotate-90' : 'bg-safety-500 text-industrial-900 animate-pulse-glow'}`}
      >
        {isOpen ? <X size={24} /> : <Bot size={28} strokeWidth={2.5} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 z-40 w-[90vw] md:w-96 bg-industrial-800/95 backdrop-blur-xl border border-safety-500/30 rounded-2xl shadow-2xl transition-all duration-300 transform origin-bottom-right flex flex-col overflow-hidden ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'}`} style={{ maxHeight: '600px', height: '70vh' }}>
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-industrial-900 to-industrial-800 border-b border-industrial-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-safety-500/10 rounded-lg border border-safety-500/20">
              <Sparkles size={18} className="text-safety-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-sm">InfraTelko Assistant</h3>
              <p className="text-[10px] text-safety-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                AI Online
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-md ${
                msg.role === 'user' 
                  ? 'bg-safety-500 text-industrial-900 rounded-tr-sm font-medium' 
                  : 'bg-industrial-700 text-slate-200 rounded-tl-sm border border-industrial-600'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-fade-in-up">
              <div className="bg-industrial-700 p-3 rounded-2xl rounded-tl-sm border border-industrial-600 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-safety-500" />
                <span className="text-xs text-slate-400">Sedang berpikir...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-industrial-900 border-t border-industrial-700">
          <div className="flex items-center gap-2 bg-industrial-800 rounded-xl px-3 py-2 border border-industrial-700 focus-within:border-safety-500/50 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya tentang menara, fiber optik..."
              className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-safety-500 text-industrial-900 rounded-lg hover:bg-safety-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-600 mt-2">
            AI dapat membuat kesalahan. Periksa kembali informasi penting.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIChat;