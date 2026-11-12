import Icon from './Icon.jsx'

export default function Navbar({ search, onSearchChange, onAddGame }) {
  return (
    <header className="topbar">
      <a className="brand" href="#accueil" aria-label="Space Kids, accueil">
        <span className="brand-icon" aria-hidden="true"><Icon name="planet" size={25} /></span>
        <span className="brand-name">Space<span>Kids</span></span>
      </a>

      <label className="search-bar">
        <Icon name="search" size={19} />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Rechercher un jeu..."
          aria-label="Rechercher un jeu"
        />
        {search && (
          <button
            className="clear-search"
            type="button"
            onClick={() => onSearchChange('')}
            aria-label="Effacer la recherche"
          >
            <Icon name="close" size={15} />
          </button>
        )}
      </label>

      <button className="add-game-button" type="button" onClick={onAddGame}>
        <Icon name="plus" size={18} /> Ajouter un jeu
      </button>
    </header>
  )
}
