import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-industrial-900 flex flex-col font-sans selection:bg-safety-500 selection:text-industrial-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Roadmap />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;