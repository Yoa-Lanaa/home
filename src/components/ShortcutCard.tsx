import { cn } from '@/lib/utils';

interface ShortcutCardProps {
  title: string;
  icon: string;
  url: string;
  className?: string;
}

export const ShortcutCard = ({ title, icon, url, className }: ShortcutCardProps) => {
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
        "p-6 transition-all duration-300",
        "hover:scale-105 hover:shadow-xl",
        "hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10",
        "active:scale-95",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};