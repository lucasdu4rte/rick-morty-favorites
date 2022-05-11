import {
  Center,
  Divider,
  Group,
  Pagination,
  ScrollArea,
  SimpleGrid,
} from "@mantine/core";
import { useEffect } from "react";
import { useStore } from "../../store/useStore";
import CharacterCard from "../CharacterCard";

const CharactersList = () => {
  const fetchCharacters = useStore((state) => state.fetchCharacters);
  const { characters } = useStore((state) => state);
  const favoritesCharacters = useStore((state) =>
    state.characters.filter((character) =>
      state.favoritesId.includes(character.id)
    )
  );

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <>
      {favoritesCharacters.length > 0 && (
        <>
          <Divider my="xs" label="Personagens Favoritos" />
          <ScrollArea style={{ width: "100%", height: 420 }}>
            <Group direction="row" noWrap>
              {favoritesCharacters.map((character) => (
                <div key={character.id} style={{ width: 280 }}>
                  <CharacterCard
                    id={character.id}
                    name={character.name}
                    imageUrl={character.image}
                    species={character.species}
                    isFavorited
                  />
                </div>
              ))}
            </Group>
          </ScrollArea>
        </>
      )}
      <Divider
        my="sm"
        mt="lg"
        label="Todos Personagens"
        labelPosition="center"
      />
      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}
      >
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            imageUrl={character.image}
            species={character.species}
          />
        ))}
      </SimpleGrid>
      <Divider my="sm" />
      <Center>
        <Pagination total={10} />
      </Center>
    </>
  );
};

export default CharactersList;
