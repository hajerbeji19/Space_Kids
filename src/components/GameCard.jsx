import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGame } from '../Redux/gamesSlice.js'
import Icon from './Icon.jsx'

const genreIcons = {
  Aventure: 'adventure',
  Nature: 'leaf',
  Science: 'flask',
  Magie: 'sparkles',
}

export default function GameCard({ game, onEdit, onView }) {
  const dispatch = useDispatch()
  const [imageUnavailable, setImageUnavailable] = useState(false)

  return (
    <article className="game-card">
      <div className={`game-art genre-${game.genre.toLowerCase()}`}>
        {!imageUnavailable && game.image && (
          <img
            src={game.image}
            alt=""
            loading="lazy"
            onError={() => setImageUnavailable(true)}
          />
        )}
        {imageUnavailable || !game.image ? (
          <span className="game-art-fallback" aria-hidden="true">
            <Icon name={game.icon || genreIcons[game.genre] || 'gamepad'} size={74} />
          </span>
        ) : null}
        <span className="game-genre">
          <Icon name={genreIcons[game.genre] || 'gamepad'} size={14} /> {game.genre}
        </span>
      </div>

      <div className="game-card-content">
        <h3>{game.title}</h3>
        <div className="game-meta">
          <span><Icon name="gamepad" size={14} /> {game.platform}</span>
          <strong>{Number(game.price).toFixed(2)} TND</strong>
        </div>
        <div className="game-card-actions">
          <button
            className="details-button"
            type="button"
            onClick={() => onView(game)}
          >
            <Icon name="sparkles" size={14} /> Découvrir
          </button>
          <button
            className="edit-button"
            type="button"
            onClick={() => onEdit(game)}
          >
            <Icon name="pencil" size={14} /> Modifier
          </button>
          <button
            className="delete-button"
            type="button"
            onClick={() => dispatch(deleteGame(game.id))}
            aria-label={`Supprimer ${game.title}`}
          >
            <Icon name="trash" size={14} /> Supprimer
          </button>
        </div>
      </div>
    </article>
  )
}
