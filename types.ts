import { LucideIcon } from 'lucide-react';

export interface Stage {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  stage: Stage | null;
}

export interface CardProps {
  stage: Stage;
  onClick: (stage: Stage) => void;
  index: number;
}