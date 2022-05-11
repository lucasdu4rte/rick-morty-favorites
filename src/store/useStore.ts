import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { CharactersApi, ICharacter } from '../services/api'

interface Store {
  characters: ICharacter[]
  favoritesId: number[]
  fetchCharacters: () => Promise<void>
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
}

export const useStore = create(devtools<Store>(set => ({
  characters: [],
  favoritesId: [],
  fetchCharacters: async () => {
    const characters = await CharactersApi.fetchCharacters()
    return set(state => ({
      ...state,
      characters,
    }))
  },
  addFavorite: (characterId) => set(state => {
    const isFavoriteExists = state.favoritesId.includes(characterId)
    if (!isFavoriteExists) {
      return ({
        ...state,
        favoritesId: [...state.favoritesId, characterId],
      })
    }
    return state
  })
  ,
  removeFavorite: (characterId) => set(state => ({
    ...state,
    favoritesId: state.favoritesId.filter(id => id !== characterId),
  })
  )
})))
