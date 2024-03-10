import { Box, Button, Group, Title } from "@mantine/core";
import { useState } from "react";

export const CounterOne = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Title>(1) Simple Counter : {count}</Title>
      <Group gap={20} mt={20}>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </Group>
    </Box>
  );
};
