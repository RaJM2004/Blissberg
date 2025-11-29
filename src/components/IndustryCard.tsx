
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  name: string;
  icon: string;
  description: string;
  className?: string;
}

const IndustryCard = ({ name, icon, description, className }: IndustryCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card min-w-[280px] p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-blissberg-primary/20 flex items-center justify-center mb-4">
        <img src={icon} alt={name} className="w-6 h-6" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
      
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default IndustryCard;
