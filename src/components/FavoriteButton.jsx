import './FavoriteButton.css';

export default function FavoriteButton({isActive=false, onToggleFavorite}) {
  return (
    <span className="FavoriteButton" onClick={onToggleFavorite}>
      {isActive ? '★' : '☆'}
    </span>
  );
};
