import { createContext, useCallback, useContext, useState } from "react";
import { CharactersApi, ICharacter } from "../services/api";

interface CharactersContextState {
  characters: ICharacter[];
  favoritesId: number[];
  fetchCharacters: () => Promise<void>;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const CharactersContext = createContext<CharactersContextState>({
  characters: [],
  favoritesId: [],
  fetchCharacters: () => Promise.resolve(),
  addFavorite: () => null,
  removeFavorite: () => null,
} as CharactersContextState);

interface CharactersProviderProps {
  children: React.ReactNode;
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [favoritesId, setFavoritesId] = useState<number[]>([]);

  // Deve se Usar useCallback para não entrar em loop no useEffect
  const fetchCharacters = useCallback(async () => {
    const results = await CharactersApi.fetchCharacters();
    setCharacters(results);
  }, []);

  const addFavorite = (id: number) => {
    setFavoritesId((prevState) => {
      if (!prevState.includes(id)) {
        return [...prevState, id];
      }
      return prevState;
    });
  };
  const removeFavorite = (id: number) => {
    setFavoritesId(favoritesId.filter((favoriteId) => favoriteId !== id));
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        favoritesId,
        fetchCharacters,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  return context;
};
