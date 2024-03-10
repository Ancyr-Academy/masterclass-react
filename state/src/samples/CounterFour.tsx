import { Box, Button, Group, Text, Title } from "@mantine/core";
import { useRef, useState } from "react";

export const CounterFour = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <Box>
      <Title>(4) Simple Counter : {count}</Title>
      <Text>Renders Count : {renderCount.current}</Text>
      <Group gap={20} mt={20}>
        <Button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            setCount(count - 1);
            setCount(count - 1);
            setCount(count - 1);
          }}
        >
          Decrement
        </Button>
      </Group>
    </Box>
  );
};
