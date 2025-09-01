import { ShortcutCard } from './ShortcutCard';
import googleSheetsIcon from '@/assets/google-sheets_2991114.png';
import googleDocsIcon from '@/assets/google-docs_2991108.png';
import googleSlidesIcon from '@/assets/google_2991117.png';
import googleDriveIcon from '@/assets/google-drive_2991247.png';

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
          className="w-24 h-24"
        />
      ))}
    </div>
  );
};