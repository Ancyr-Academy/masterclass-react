import { useState } from "react";
import { Box, Button, Container, Group } from "@mantine/core";
import { CounterOne } from "./samples/CounterOne.tsx";
import { CounterThree } from "./samples/CounterThree.tsx";
import { CounterTwo } from "./samples/CounterTwo.tsx";
import { CounterFour } from "./samples/CounterFour.tsx";
import { ComplexStateOne } from "./samples/ComplexStateOne.tsx";
import { ComplexStateTwo } from "./samples/ComplexStateTwo.tsx";

const scenes = [
  CounterOne,
  CounterTwo,
  CounterThree,
  CounterFour,
  ComplexStateOne,
  ComplexStateTwo,
];

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
