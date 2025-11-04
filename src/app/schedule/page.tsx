import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { Box, HStack, VStack } from "styled-system/jsx";
import { SectionHeader } from "@/components/SectionHeader";
import { PandaLink } from "@/components/ui/link";
import type { ScheduledEventModel } from "@/db/models/ScheduledEvent.model";
import { getApiUrl } from "@/helpers/apiUrl";

const apiUrl = getApiUrl();

const getUpcomingEvents = async () => {
  const response = await fetch(`${apiUrl}api/homeEvents`);
  if (response) {
    return await response.json();
  }
  throw new Error("Error while fetching events");
};

const SchedulePage = async () => {
  const upcomingEvents: ScheduledEventModel[] = await getUpcomingEvents();
  return (
    <>
      <SectionHeader>Schedule (upcoming events)</SectionHeader>
      {upcomingEvents?.length === 0 && (
        <Box
          fontFamily="body"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
          my="8">
          There are currently no upcoming events scheduled. Please check back
          closer to the start of the season (late February/early March).
        </Box>
      )}
      {upcomingEvents?.map((event) => {
        let eventImage: string;
        switch (event.Program) {
          case "Track":
            eventImage = "/images/track.jpg";
            break;
          case "Solo":
            eventImage = "/images/solo.jpg";
            break;
          case "Street Survival":
            eventImage = "/images/street-survival.jpg";
            break;
          default:
            eventImage = "/images/scca-logo.png";
            break;
        }
        return (
          <HStack
            key={event.ID}
            gap={8}
            mt={8}
            mb={12}
            width="100%">
            <Box
              borderRadius="2xl"
              width={{ base: "100px", md: "200px" }}
              height={{ base: "100px", md: "200px" }}
              overflow="hidden"
              minWidth={{ base: "100px", md: "200px" }}>
              <Image
                src={eventImage}
                alt="Program Icon"
                width={200}
                height={200}
              />
            </Box>
            <VStack
              justifyContent="flex-start"
              alignItems="flex-start"
              width="100%">
              <HStack
                width="100%"
                justifyContent="space-between"
                fontFamily="header"
                fontSize={{ base: "2xl", md: "4xl" }}
                backgroundGradient="to-b"
                gradientFrom="indigo.6"
                gradientTo="indigo.3"
                padding="2">
                <Box fontFamily="header">{event.Program}</Box>
                <Box>{dayjs(event.Date).format("M/DD/YYYY")}</Box>
              </HStack>
              <Box
                fontFamily="body"
                fontSize={{ base: "md", md: "2xl" }}
                textAlign="left">
                {event.Name} - Event held at {event.Location}
              </Box>
              {event.Link && (
                <Box>
                  <PandaLink
                    asChild
                    fontSize={{ base: "sm", md: "xl" }}>
                    <Link href={event.Link}>
                      Register at MotorsportReg by clicking here
                    </Link>
                  </PandaLink>
                </Box>
              )}
            </VStack>
          </HStack>
        );
      })}
    </>
  );
};

export default SchedulePage;
