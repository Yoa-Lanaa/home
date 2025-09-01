import { cn } from '@/lib/utils';

interface ShortcutCardProps {
  icon: string;
  url: string;
  className?: string;
}

export const ShortcutCard = ({ icon, url, className }: ShortcutCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className={cn(
        "group relative cursor-pointer",
        "bg-gradient-glass backdrop-blur-glass",
        "border border-glass-border rounded-lg",
        "shadow-glass",
        "p-4 transition-all duration-300",
        "hover:scale-105 hover:shadow-xl",
        "hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10",
        "active:scale-95",
        "aspect-square flex items-center justify-center",
        className
      )}
    >
      <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
        <img 
          src={icon} 
          alt="App icon" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};