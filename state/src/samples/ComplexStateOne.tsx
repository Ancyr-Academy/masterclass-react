import {
  Badge,
  Box,
  Group,
  Pill,
  PillsInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";

type Person = {
  firstName: string;
  lastName: string;
  tags: string[];
};
export const ComplexStateOne = () => {
  const [state, setState] = useState<Person>({
    firstName: "John",
    lastName: "Doe",
    tags: ["developer", "designer"],
  });

  return (
    <Box>
      <Box>
        <Title>
          {state.firstName} {state.lastName}
        </Title>
        <Group mt={10}>
          {state.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </Group>
      </Box>
      <Stack mt={40}>
        <TextInput
          label={"First Name"}
          value={state.firstName}
          onChange={(e) =>
            setState({ ...state, firstName: e.currentTarget.value })
          }
        />

        <TextInput
          label={"Last Name"}
          value={state.lastName}
          onChange={(e) =>
            setState({ ...state, lastName: e.currentTarget.value })
          }
        />

        <PillsInput>
          <Pill.Group>
            {state.tags.map((tag, index) => (
              <Pill
                key={index}
                withRemoveButton={true}
                onRemove={() => {
                  const newTags = state.tags.filter((_, i) => i !== index);
                  setState({ ...state, tags: newTags });
                }}
              >
                {tag}
              </Pill>
            ))}
            <PillsInput.Field
              placeholder={"Enter a tag"}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setState({
                    ...state,
                    tags: [...state.tags, e.currentTarget.value],
                  });
                  e.currentTarget.value = "";
                }
              }}
            />
          </Pill.Group>
        </PillsInput>
      </Stack>
    </Box>
  );
};
