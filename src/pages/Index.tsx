import { Clock } from '@/components/Clock';
import { ShortcutGrid } from '@/components/ShortcutGrid';
import classicalBackground from '@/assets/classical-background.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden font-inter"
      style={{
        backgroundImage: `url(${classicalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay with blur */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen p-8">
        {/* Top left: Clock and Date */}
        <div className="absolute top-8 left-8">
          <Clock />
        </div>
        
        {/* Right side: Shortcut grid positioned below clock */}
        <div className="absolute top-48 right-8">
          <ShortcutGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
