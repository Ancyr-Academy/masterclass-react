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
import { produce } from "immer";

type Person = {
  firstName: string;
  lastName: string;
  tags: string[];
};
export const ComplexStateTwo = () => {
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
            setState(
              produce((draft) => {
                draft.firstName = e.currentTarget.value;
              }),
            )
          }
        />

        <TextInput
          label={"Last Name"}
          value={state.lastName}
          onChange={(e) =>
            setState(
              produce((draft) => {
                draft.lastName = e.currentTarget.value;
              }),
            )
          }
        />

        <PillsInput>
          <Pill.Group>
            {state.tags.map((tag, index) => (
              <Pill
                key={index}
                withRemoveButton={true}
                onRemove={() => {
                  setState(
                    produce((draft) => {
                      draft.tags.splice(index, 1);
                    }),
                  );
                }}
              >
                {tag}
              </Pill>
            ))}
            <PillsInput.Field
              placeholder={"Enter a tag"}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setState(
                    produce((draft) => {
                      draft.tags.push(e.currentTarget.value);
                    }),
                  );

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
