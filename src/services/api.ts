import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
})

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface CharacterResponse {
  results: ICharacter[]
}

export const CharactersApi = {
  fetchCharacters: async () => {
    const { data } = await api.get<CharacterResponse>("/character");
    return data.results;
  }
};