import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  games: [
    {
      id: 'game-1',
      title: 'Chaton aventurier',
      genre: 'Aventure',
      platform: 'Tablette',
      price: 4.99,
      image: '/images/games/Chaton_aventurier.jpg',
      icon: 'cat',
      description: 'Aide le petit chat à retrouver son chemin à travers une forêt enchantée.',
      ageRange: '6–9 ans',
      players: '1 joueur',
      duration: 15,
      howToPlay: 'Explore la forêt avec les flèches et trouve les objets cachés pour aider le chaton.',
      benefits: ['Logique', 'Observation', 'Résolution de problèmes'],
    },
    {
      id: 'game-2',
      title: 'Course des étoiles',
      genre: 'Aventure',
      platform: 'Mobile',
      price: 2.99,
      image: '/images/games/Course_des_étoiles.jpg',
      icon: 'car',
      description: 'Une course amicale à travers les anneaux colorés de la galaxie.',
      ageRange: '7–10 ans',
      players: '1–2 joueurs',
      duration: 10,
      howToPlay: 'Conduis ton véhicule, évite les obstacles et récupère les étoiles sur la piste.',
      benefits: ['Coordination', 'Réflexes', 'Esprit sportif'],
    },
    {
      id: 'game-3',
      title: 'Lapin jardinier',
      genre: 'Nature',
      platform: 'Tablette',
      price: 0,
      image: '/images/games/Lapin_jardinier.jpg',
      icon: 'rabbit',
      description: 'Plante des graines, arrose ton jardin et découvre la nature.',
      ageRange: '5–8 ans',
      players: '1 joueur',
      duration: 12,
      howToPlay: 'Choisis des graines, plante-les dans le jardin puis prends soin de tes légumes.',
      benefits: ['Patience', 'Découverte de la nature', 'Responsabilité'],
    },
    {
      id: 'game-4',
      title: 'Mission fusée',
      genre: 'Science',
      platform: 'Ordinateur',
      price: 5.99,
      image: '/images/games/Mission_fusée.webp',
      icon: 'rocket',
      description: 'Construis une fusée et résous des énigmes pour explorer l’espace.',
      ageRange: '8–12 ans',
      players: '1–4 joueurs',
      duration: 20,
      howToPlay: 'Assemble ta fusée et réponds aux énigmes pour visiter de nouvelles planètes.',
      benefits: ['Sciences', 'Logique', 'Travail d’équipe'],
    },
    {
      id: 'game-5',
      title: 'Petit magicien',
      genre: 'Magie',
      platform: 'Mobile',
      price: 3.49,
      image: '/images/games/Petit_magicien.jpg',
      icon: 'wand',
      description: 'Apprends des tours de magie et aide les habitants du royaume.',
      ageRange: '6–10 ans',
      players: '1–2 joueurs',
      duration: 15,
      howToPlay: 'Suis les gestes à l’écran, mémorise les formules et réalise des tours de magie.',
      benefits: ['Créativité', 'Mémoire', 'Confiance en soi'],
    },
    {
      id: 'game-6',
      title: 'Océan merveilleux',
      genre: 'Nature',
      platform: 'Tablette',
      price: 1.99,
      image: '/images/games/Océan_merveilleux.jpg',
      icon: 'fish',
      description: 'Explore les fonds marins et rencontre les animaux de l’océan.',
      ageRange: '5–9 ans',
      players: '1 joueur',
      duration: 12,
      howToPlay: 'Plonge dans l’océan, observe les animaux et retrouve les trésors cachés.',
      benefits: ['Curiosité', 'Observation', 'Respect de l’environnement'],
    },
  ],
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.games.push(action.payload)
    },
    deleteGame: (state, action) => {
      state.games = state.games.filter((game) => game.id !== action.payload)
    },
    updateGame: (state, action) => {
      const index = state.games.findIndex(
        (game) => game.id === action.payload.id,
      )

      if (index !== -1) {
        state.games[index] = { ...state.games[index], ...action.payload }
      }
    },
  },
})

export const { addGame, deleteGame, updateGame } = gamesSlice.actions
export default gamesSlice.reducer
