'use client';
import { Anchor } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
import { Box } from "styled-system/jsx";
import type { ScheduledEventModel } from "@/db/models/ScheduledEvent.model";

type Props = {
  type: "Solo" | "Track" | "Street Survival" | "General";
  events: ScheduledEventModel[];
};

export const EventBlock = ({ type, events }: Props) => {
  const programEvents = events.filter((event) => event.Program === type);
  return (
    <Box
      border="solid 1px black"
      width="100%"
      borderRadius="lg"
      overflow="hidden">
      <Box
        backgroundColor="slate.400"
        fontFamily="header"
        fontSize="3xl"
        color="black"
        textAlign="center">
        {type}
      </Box>
      <Box padding="2">
        {programEvents.length === 0 ? (
          <Box>No upcoming {type} events</Box>
        ) : (
          programEvents.map((event) => (
            <Box
              key={`event-${event.ID}`}
              fontWeight="600"
              fontFamily="body"
              marginBottom="2">
              {dayjs(event.Date).format("M/DD/YYYY")}: {event.Name} at{" "}
              {event.Location}
              {event.Link && (
                <Box marginY="1">
                  <Anchor
                    component={Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={event.Link}>
                    More Info
                  </Anchor>
                </Box>
              )}
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};
