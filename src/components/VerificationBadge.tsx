import React from 'react';
import { ShieldCheck, Edit3 } from 'lucide-react';

interface Props {
  status?: 'Confirmed by College' | 'Institutional Placeholder - Editable' | string;
  className?: string;
}

export const VerificationBadge: React.FC<Props> = ({ 
  status = 'Confirmed by College',
  className = ''
}) => {
  const isConfirmed = status.includes('Confirmed');

  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
        isConfirmed 
          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
          : 'bg-amber-50 text-amber-800 border border-dashed border-amber-300'
      } ${className}`}
      title={isConfirmed ? "Verified institutional information" : "Editable college placeholder - replace with verified college data"}
    >
      {isConfirmed ? (
        <>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Verified College Record</span>
        </>
      ) : (
        <>
          <Edit3 className="w-3.5 h-3.5 text-amber-600" />
          <span>Editable Placeholder</span>
        </>
      )}
    </span>
  );
};

