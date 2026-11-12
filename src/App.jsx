import { useState } from 'react'
import AddGame from './components/AddGame.jsx'
import EditGame from './components/EditGame.jsx'
import GameDetails from './components/GameDetails.jsx'
import Icon from './components/Icon.jsx'
import GameList from './components/GameList.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

const planets = [
  { name: 'Aventure', icon: 'adventure', className: 'adventure' },
  { name: 'Nature', icon: 'leaf', className: 'nature' },
  { name: 'Science', icon: 'flask', className: 'science' },
  { name: 'Magie', icon: 'sparkles', className: 'magic' },
]

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState('')
  const [search, setSearch] = useState('')
  const [showAddGame, setShowAddGame] = useState(false)
  const [editingGame, setEditingGame] = useState(null)
  const [viewingGame, setViewingGame] = useState(null)

  return (
    <div className="app-shell">
      <Navbar
        search={search}
        onSearchChange={setSearch}
        onAddGame={() => setShowAddGame(true)}
      />

      <main className="main-content">
        <section className="welcome-panel" id="accueil">
          <div className="welcome-copy">
            <span className="eyebrow">Prêt·e pour l’aventure ?</span>
            <h1>
              Bienvenue dans
              <br />
              <span>Space Kids !</span>
            </h1>
            <p>Explore les planètes et découvre des jeux incroyables !</p>
            <a className="primary-button" href="#jeux">
              Découvrir mes jeux <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <div className="hero-illustration" aria-hidden="true">
            <span className="hero-orbit orbit-one" />
            <span className="hero-orbit orbit-two" />
            <span className="hero-planet"><Icon name="planet" size={104} /></span>
            <span className="astronaut"><Icon name="astronaut" size={72} /></span>
            <span className="hero-star star-one"><Icon name="sparkles" size={28} /></span>
            <span className="hero-star star-two"><Icon name="sparkles" size={36} /></span>
            <span className="hero-star star-three"><Icon name="sparkles" size={20} /></span>
          </div>
        </section>

        <GameList
          categories={planets}
          search={search}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          onEdit={setEditingGame}
          onView={setViewingGame}
        />

        <footer className="app-footer">
          <Icon name="rocket" size={18} /> Continue d’explorer, petit·e astronaute !
        </footer>
      </main>

      {showAddGame && <AddGame onClose={() => setShowAddGame(false)} />}
      {editingGame && (
        <EditGame game={editingGame} onClose={() => setEditingGame(null)} />
      )}
      {viewingGame && (
        <GameDetails game={viewingGame} onClose={() => setViewingGame(null)} />
      )}
    </div>
  )
}
