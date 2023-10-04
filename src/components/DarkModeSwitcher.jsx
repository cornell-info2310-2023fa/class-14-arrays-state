import './DarkModeSwitcher.css';

export default function DarkModeSwitcher({ onSwitchDarkMode }) {
  return (
    <div className="DarkModeSwitcher">

      <button onClick={() => onSwitchDarkMode(true)}>
        Dark Mode
      </button>
      <button onClick={() => onSwitchDarkMode(false)}>
        Light Mode
      </button>
    </div>
  );
}
