import { useSelector } from 'react-redux'
import GameCard from './GameCard.jsx'
import Icon from './Icon.jsx'

export default function GameList({
  categories,
  search,
  selectedGenre,
  onGenreChange,
  onEdit,
  onView,
}) {
  const games = useSelector((state) => state.games.games)
  const query = search.trim().toLocaleLowerCase('fr')
  const filteredGames = games.filter((game) => {
    const matchesGenre = !selectedGenre || game.genre === selectedGenre
    const matchesSearch =
      !query ||
      [game.title, game.genre, game.platform].some((value) =>
        value.toLocaleLowerCase('fr').includes(query),
      )

    return matchesGenre && matchesSearch
  })

  return (
    <section className="game-list-section" id="jeux">
      <div className="game-browser">
        <aside className="category-panel" aria-label="Filtrer les jeux par planète">
          <span className="category-eyebrow">Explorer</span>
          <h2>Planètes</h2>
          <div className="category-list">
            <button
              className={`category-button${!selectedGenre ? ' active' : ''}`}
              type="button"
              aria-pressed={!selectedGenre}
              onClick={() => onGenreChange('')}
            >
              <span className="category-icon"><Icon name="planet" size={19} /></span>
              <span>Tous les jeux</span>
            </button>
            {categories.map((category) => (
              <button
                className={`category-button ${category.className}${selectedGenre === category.name ? ' active' : ''}`}
                key={category.name}
                type="button"
                aria-pressed={selectedGenre === category.name}
                onClick={() => onGenreChange(category.name)}
              >
                <span className="category-icon"><Icon name={category.icon} size={19} /></span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="games-content">
          <div className="game-list-heading">
            <div>
              <span className="eyebrow">Ta collection spatiale</span>
              <h2>
                <span className="heading-star"><Icon name="sparkles" size={20} /></span>{' '}
                {selectedGenre ? `Jeux ${selectedGenre}` : 'Mes jeux'}
                <span className="game-count">{filteredGames.length}</span>
              </h2>
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="games-grid">
              {filteredGames.map((game) => (
                <GameCard
                  game={game}
                  key={game.id}
                  onEdit={onEdit}
                  onView={onView}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true"><Icon name="planet" size={42} /></span>
              <h3>Aucun jeu dans cette galaxie...</h3>
              <p>Essaie une autre recherche ou ajoute un jeu à ta collection !</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
