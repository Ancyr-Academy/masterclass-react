import { Box, Button, Group, Title } from "@mantine/core";
import { useState } from "react";

export const CounterTwo = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Title>(2) Simple Counter : {count}</Title>
      <Group gap={20} mt={20}>
        <Button
          onClick={() => {
            setCount(count + 1);
            alert(count);
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            setCount(count - 1);
            alert(count);
          }}
        >
          Decrement
        </Button>
      </Group>
    </Box>
  );
};
