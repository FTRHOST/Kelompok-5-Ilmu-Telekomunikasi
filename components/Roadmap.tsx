import React, { useState } from 'react';
import RoadmapCard from './RoadmapCard';
import Modal from './Modal';
import { LEARNING_STAGES } from '../constants';
import { Stage } from '../types';

const Roadmap: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (stage: Stage) => {
    setSelectedStage(stage);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Add small delay to clear data to allow animation to finish
    setTimeout(() => setSelectedStage(null), 300);
  };

  return (
    <section id="roadmap" className="py-20 bg-industrial-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Alur Pembangunan <span className="text-safety-500">Jaringan</span>
          </h2>
          <div className="h-1 w-24 bg-safety-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Klik pada setiap kartu untuk mempelajari detail teknis dari setiap tahapan infrastruktur.
          </p>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {LEARNING_STAGES.map((stage, index) => (
            <RoadmapCard 
              key={stage.id} 
              stage={stage} 
              index={index}
              onClick={handleCardClick} 
            />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        stage={selectedStage} 
      />
    </section>
  );
};

export default Roadmap;