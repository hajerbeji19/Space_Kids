import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGame } from '../Redux/gamesSlice.js'
import Icon from './Icon.jsx'

const imagePathFor = (title) =>
  `/images/games/${title.trim().replace(/\s+/g, '_')}.png`

export default function AddGame({ onClose }) {
  const dispatch = useDispatch()
  const [customImage, setCustomImage] = useState(false)
  const [form, setForm] = useState({
    title: '',
    genre: 'Aventure',
    platform: 'Tablette',
    price: '0',
    image: '',
    description: '',
    ageRange: '',
    players: '1 joueur',
    duration: '15',
    howToPlay: '',
    benefits: '',
  })

  const updateField = (event) => {
    const { name, value } = event.target
    if (name === 'image') setCustomImage(true)
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === 'title' && !customImage ? { image: imagePathFor(value) } : {}),
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = form.title.trim()

    if (!title) return

    dispatch(
      addGame({
        ...form,
        id: `game-${Date.now()}`,
        title,
        price: Number(form.price),
        duration: Number(form.duration),
        benefits: form.benefits
          .split(',')
          .map((benefit) => benefit.trim())
          .filter(Boolean),
        image: form.image.trim() || imagePathFor(title),
      }),
    )
    onClose()
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="game-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-game-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fermer">
          <Icon name="close" size={18} />
        </button>
        <span className="modal-icon" aria-hidden="true"><Icon name="rocket" size={26} /></span>
        <span className="eyebrow">Une nouvelle aventure commence</span>
        <h2 id="add-game-title">Ajouter un jeu</h2>
        <form className="game-form" onSubmit={handleSubmit}>
          <label>
            Titre du jeu
            <input
              name="title"
              value={form.title}
              onChange={updateField}
              placeholder="Ex. Les petits astronautes"
              required
              autoFocus
            />
          </label>
          <div className="form-row">
            <label>
              Genre
              <select name="genre" value={form.genre} onChange={updateField}>
                <option>Aventure</option>
                <option>Nature</option>
                <option>Science</option>
                <option>Magie</option>
              </select>
            </label>
            <label>
              Plateforme
              <select name="platform" value={form.platform} onChange={updateField}>
                <option>Tablette</option>
                <option>Mobile</option>
                <option>Ordinateur</option>
                <option>Console</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              Âge conseillé
              <input
                name="ageRange"
                value={form.ageRange}
                onChange={updateField}
                placeholder="Ex. 6–9 ans"
              />
            </label>
            <label>
              Nombre de participants
              <input
                name="players"
                value={form.players}
                onChange={updateField}
                placeholder="Ex. 1–4 joueurs"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Durée (minutes)
              <input
                name="duration"
                type="number"
                min="1"
                value={form.duration}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Prix (TND)
              <input
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={updateField}
                required
              />
            </label>
          </div>
          <label>
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={updateField}
              placeholder="Présente brièvement le jeu..."
              rows="2"
            />
          </label>
          <label>
            Comment jouer ?
            <textarea
              name="howToPlay"
              value={form.howToPlay}
              onChange={updateField}
              placeholder="Explique les règles et les commandes..."
              rows="3"
            />
          </label>
          <label>
            Avantages (séparés par des virgules)
            <textarea
              name="benefits"
              value={form.benefits}
              onChange={updateField}
              placeholder="Logique, créativité, travail d’équipe..."
              rows="2"
            />
          </label>
          <label>
            Image du jeu
            <input
              name="image"
              value={form.image}
              onChange={updateField}
              placeholder={imagePathFor(form.title || 'Nom_du_jeu')}
            />
          </label>
          <p className="form-hint">
            Place ton image dans <code>public/images/games/</code> (les espaces deviennent des _).
          </p>
          <div className="modal-actions">
            <button className="secondary-button" type="button" onClick={onClose}>
              Annuler
            </button>
            <button className="primary-button" type="submit">
              Ajouter à ma collection <Icon name="sparkles" size={16} />
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
