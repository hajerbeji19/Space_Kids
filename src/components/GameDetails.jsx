import { useState } from 'react'
import Icon from './Icon.jsx'

const genreIcons = {
  Aventure: 'adventure',
  Nature: 'leaf',
  Science: 'flask',
  Magie: 'sparkles',
}

export default function GameDetails({ game, onClose }) {
  const [imageUnavailable, setImageUnavailable] = useState(false)

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="game-modal game-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-details-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Fermer la fiche du jeu"
        >
          <Icon name="close" size={18} />
        </button>
        <div className={`details-art genre-${game.genre.toLowerCase()}`}>
          {!imageUnavailable && game.image && (
            <img src={game.image} alt="" onError={() => setImageUnavailable(true)} />
          )}
          {(!game.image || imageUnavailable) && (
            <span className="details-art-fallback" aria-hidden="true">
              <Icon name={game.icon || genreIcons[game.genre] || 'gamepad'} size={84} />
            </span>
          )}
          <span className="details-genre">
            <Icon name={genreIcons[game.genre] || 'gamepad'} size={15} /> Planète {game.genre}
          </span>
        </div>
        <span className="eyebrow">Carnet d’exploration</span>
        <h2 id="game-details-title">{game.title}</h2>
        <p className="details-description">
          {game.description || 'Une nouvelle aventure t’attend sur cette planète !'}
        </p>
        <div className="details-facts">
          <div><Icon name="cake" size={20} /><strong>{game.ageRange || 'Tous les âges'}</strong><small>Âge conseillé</small></div>
          <div><Icon name="users" size={20} /><strong>{game.players || 'Non précisé'}</strong><small>Participants</small></div>
          <div><Icon name="clock" size={20} /><strong>{game.duration ? `${game.duration} min` : 'Variable'}</strong><small>Durée moyenne</small></div>
          <div><Icon name="tablet" size={20} /><strong>{game.platform}</strong><small>Plateforme</small></div>
          <div><Icon name="coin" size={20} /><strong>{Number(game.price).toFixed(2)} TND</strong><small>Prix</small></div>
        </div>
        <section className="game-info-section" aria-labelledby="how-to-play-title">
          <h3 id="how-to-play-title"><Icon name="gamepad" size={18} /> Comment jouer ?</h3>
          <p>{game.howToPlay || 'Les règles de ce jeu seront bientôt disponibles.'}</p>
        </section>
        <section className="game-info-section benefits-section" aria-labelledby="benefits-title">
          <h3 id="benefits-title"><Icon name="sparkles" size={18} /> Ce que tu vas développer</h3>
          {game.benefits?.length > 0 ? (
            <ul className="benefit-list">
              {game.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          ) : (
            <p>Les avantages de ce jeu seront bientôt disponibles.</p>
          )}
        </section>
        <div className="modal-actions">
          <button className="primary-button" type="button" onClick={onClose}>
            Je l’ai découvert ! <Icon name="sparkles" size={16} />
          </button>
        </div>
      </section>
    </div>
  )
}
