import { ShortcutCard } from './ShortcutCard';
import googleSheetsIcon from '@/assets/google-sheets-icon.png';
import googleDocsIcon from '@/assets/google-docs-icon.png';
import googleSlidesIcon from '@/assets/google-slides-icon.png';
import googleDriveIcon from '@/assets/google-drive-icon.png';

const shortcuts = [
  {
    icon: googleSheetsIcon,
    url: 'https://sheets.google.com'
  },
  {
    icon: googleDocsIcon,
    url: 'https://docs.google.com'
  },
  {
    icon: googleSlidesIcon,
    url: 'https://slides.google.com'
  },
  {
    icon: googleDriveIcon,
    url: 'https://drive.google.com'
  }
];

export const ShortcutGrid = () => {
  return (
    <div className="flex flex-col space-y-4">
      {shortcuts.map((shortcut, index) => (
        <ShortcutCard
          key={index}
          icon={shortcut.icon}
          url={shortcut.url}
          className="w-16 h-16"
        />
      ))}
    </div>
  );
};