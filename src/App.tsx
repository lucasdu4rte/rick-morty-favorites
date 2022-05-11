import { Shell } from "./components/Shell";
import { MantineProvider } from "@mantine/core";
import CharactersList from "./components/CharactersList/intex";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Shell>
        <CharactersList />
      </Shell>
    </MantineProvider>
  );
}

export default App;
