
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
}

const ProductCard = ({ title, description, imageUrl, className, children }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl transition-all duration-300 h-full",
        "group", // Add group for more complex hover interactions
        isHovered 
          ? "bg-blissberg-secondary/10 border-blissberg-accent/30" // Removed glow-effect to eliminate blinking
          : "border-white/10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video rounded-lg overflow-hidden mb-5">
        <img 
          src={imageUrl} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      <h3 className={cn(
        "text-xl font-bold mb-2 text-white transition-colors duration-300",
        isHovered ? "text-blissberg-accent" : ""
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-white/70 mb-4 line-clamp-3 transition-colors duration-300",
        isHovered ? "text-white/90" : ""
      )}>
        {description}
      </p>
      
      {children}
      
      <button 
        className={cn(
          "group flex items-center transition-colors duration-300",
          isHovered 
            ? "text-blissberg-accent" 
            : "text-blissberg-primary hover:text-blissberg-accent"
        )}
      >
        Learn more 
        <ChevronRight 
          size={16} 
          className={cn(
            "ml-1 transition-transform duration-300",
            isHovered ? "translate-x-1" : "translate-x-0"
          )} 
        />
      </button>
    </div>
  );
};

export default ProductCard;
