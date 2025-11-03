import { Box, Stack, VStack } from "styled-system/jsx";
import { HomeContent } from "@/components/homepage/HomeContent";
import { ProgramBlocks } from "@/components/homepage/ProgramBlocks";
import { QuickLinks } from "@/components/homepage/QuickLinks";
import { UpcomingEvents } from "@/components/homepage/UpcomingEvents";
import type { HomeContentModel } from "@/db/models/HomeContent.model";
import type { ProgramPageModel } from "@/db/models/ProgramPage.model";
import type { QuickLinkModel } from "@/db/models/QuickLink.model";
import type { ScheduledEventModel } from "@/db/models/ScheduledEvent.model";
import { getApiUrl } from "@/helpers/apiUrl";

const apiUrl = getApiUrl();

const getQuicklinks = async () => {
  const response = await fetch(`${apiUrl}api/quicklinks`);
  if (response) {
    return await response.json();
  }
  throw new Error("Error while retrieving quick links");
};

const getHomeContent = async () => {
  const response = await fetch(`${apiUrl}api/homeContent`);
  if (response) {
    return await response.json();
  }
  throw new Error("Error while fetching home content");
};

const getHomeEvents = async () => {
  const response = await fetch(`${apiUrl}api/homeEvents`);
  if (response) {
    return await response.json();
  }
  throw new Error("Error while fetching events");
};

const getProgramPages = async () => {
  const response = await fetch(`${apiUrl}api/homePrograms`);
  if (response) {
    return await response.json();
  }
  throw new Error("Error while fetching events");
};

export default async function Home() {
  const quickLinks: QuickLinkModel[] = await getQuicklinks() ?? [];
  const homeContent: HomeContentModel[] = await getHomeContent() ?? [];
  const upcomingEvents: ScheduledEventModel[] = await getHomeEvents() ?? [];
  const programPages: ProgramPageModel[] = await getProgramPages() ?? [];
  return (
    <VStack>
      <Box
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="Oswald"
        fontWeight="bold"
        textAlign="center"
      >
        Welcome to the Reno Region of the Sports Car Club of America(SCCA)!
      </Box>
      <Box width="100%" height="100%" borderRadius="xl" border="solid 5px" overflow="hidden">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ maxWidth: "1200px", width: "100%" }}>
          <source
            src="videos/movie.webm"
            type="video/webm"
          />
        </video>
      </Box>
      <Stack
        position="relative"
        fontFamily="Nunito"
        direction={{ base: "column", md: "row" }}
        gap="8">
        <Box
          position={{ base: "relative", md: "sticky" }}
          top={{ base: "0", md: "80px" }}
        >
          <QuickLinks quickLinks={quickLinks} />
        </Box>
        <VStack gap="5">
          <UpcomingEvents events={upcomingEvents} />
          <HomeContent homeContent={homeContent} />
          <ProgramBlocks pages={programPages} />
        </VStack>
      </Stack>
    </VStack>
  );
}
