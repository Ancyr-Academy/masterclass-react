import { useState } from "react";
import { Box, Button, Container, Group } from "@mantine/core";

function Dummy() {
  return <div>Hello World</div>;
}

const scenes = [Dummy];

function App() {
  const [index, setIndex] = useState(0);
  const Scene = scenes[index];

  return (
    <Container>
      <Box mt={200}>
        <Scene />
      </Box>
      <Group mt={100}>
        <Button
          onClick={() => setIndex(index - 1)}
          variant={"light"}
          disabled={index === 0}
        >
          Précédent
        </Button>

        <Button
          onClick={() => setIndex(index + 1)}
          disabled={index === scenes.length - 1}
        >
          Suivant
        </Button>
      </Group>
    </Container>
  );
}

export default App;
