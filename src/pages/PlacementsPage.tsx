import React from 'react';
import { PlacementRecordsPage } from './PlacementRecordsPage';

interface Props {
  onOpenApply: () => void;
  onNavigate?: (page: string, subId?: string) => void;
}

export const PlacementsPage: React.FC<Props> = ({ onOpenApply, onNavigate = () => {} }) => {
  return (
    <PlacementRecordsPage
      onOpenApply={onOpenApply}
      onNavigate={onNavigate}
    />
  );
};
