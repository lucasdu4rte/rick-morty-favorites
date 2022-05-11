import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useStore } from "../../store/useStore";

interface CharacterCardProps {
  id: number;
  name: string;
  imageUrl: string;
  species: string;
  isFavorited?: boolean;
}

const CharacterCard = ({
  id,
  name,
  imageUrl,
  species,
  isFavorited,
}: CharacterCardProps) => {
  const theme = useMantineTheme();
  const { addFavorite, removeFavorite } = useStore((state) => state);

  return (
    <div style={{ width: "100%" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={imageUrl} height={300} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          noWrap
        >
          <Text
            weight={500}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Text>

          <Badge color="yellow" variant="light" title={species}>
            {species}
          </Badge>
        </Group>

        {isFavorited ? (
          <Button
            variant="light"
            color="red"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => removeFavorite(id)}
          >
            Remover dos favoritos
          </Button>
        ) : (
          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => addFavorite(id)}
          >
            Adicionar aos favoritos
          </Button>
        )}
      </Card>
    </div>
  );
};

export default CharacterCard;
