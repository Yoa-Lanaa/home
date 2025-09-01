import { ShortcutCard } from './ShortcutCard';

const shortcuts = [
  {
    title: 'Google Sheets',
    icon: '📊',
    url: 'https://sheets.google.com'
  },
  {
    title: 'Google Docs',
    icon: '📄',
    url: 'https://docs.google.com'
  },
  {
    title: 'Google Slides',
    icon: '📋',
    url: 'https://slides.google.com'
  },
  {
    title: 'Google Drive',
    icon: '💾',
    url: 'https://drive.google.com'
  }
];

export const ShortcutGrid = () => {
  return (
    <div className="flex flex-col space-y-4">
      {shortcuts.map((shortcut, index) => (
        <ShortcutCard
          key={shortcut.title}
          title={shortcut.title}
          icon={shortcut.icon}
          url={shortcut.url}
          className="w-48 h-24"
        />
      ))}
    </div>
  );
};