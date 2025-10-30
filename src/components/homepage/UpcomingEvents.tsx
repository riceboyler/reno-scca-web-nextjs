import { Box, Grid } from "styled-system/jsx";
import { EventBlock } from "@/components/homepage/EventBlock";
import { SectionHeader } from "@/components/SectionHeader";
import type { ScheduledEventModel } from "@/db/models/ScheduledEvent.model";

type Props = {
  events: ScheduledEventModel[];
};

export const UpcomingEvents = ({ events }: Props) => {
  return (
    <Box>
      <SectionHeader>Upcoming Events</SectionHeader>
      {events.length === 0 ? (
        <Box>No Upcoming Events</Box>
      ) : (
        <Grid
          gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          flexWrap="wrap"
          marginY="2"
          gap="4">
          <EventBlock
            type="Solo"
            events={events}
          />
          <EventBlock type="Track" events={events} />
          <EventBlock type="Street Survival" events={events} />
          <EventBlock type="General" events={events} />
        </Grid>
      )}
    </Box>
  );
};
