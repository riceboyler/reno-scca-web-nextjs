/** biome-ignore-all lint/suspicious/noArrayIndexKey: A little bit aggressive of a check on using ID (especially since it's a composite key) */

import { ChevronDownIcon } from "lucide-react";
import { Box, Center, Stack } from "styled-system/jsx";
import { SectionHeader } from "@/components/SectionHeader";
import { SubHeader } from "@/components/SubHeader";
import { Accordion } from "@/components/ui/accordion";
import { Tabs } from "@/components/ui/tabs";
import type { GalleryEventModel } from "@/db/models/GalleryEvent.model";
import { getApiUrl } from "@/helpers/apiUrl";

// const getGalleryData = async () => {
//   const response = await fetch(`${getApiUrl}api/gallery`);
//   if (response?.ok) {
//     return await response.json();
//   }
// };

async function getGalleryEvents() {
  const response = await fetch(`${getApiUrl()}api/gallery/events`);
  if (response?.ok) {
    return await response.json();
  }
}

const Gallery = async () => {
  const galleryEvents: GalleryEventModel[] = await getGalleryEvents();
  const programs = galleryEvents?.reduce((acc: string[], curr) => {
    if (!acc.find((pgm) => pgm === curr.Program)) {
      acc.push(curr.Program);
    }
    return acc;
  }, []);

  return (
    <Stack>
      <SectionHeader>Gallery</SectionHeader>
      <Tabs.Root
        defaultValue={programs[0]}
        width="100%"
      >
        <Tabs.List justifyContent="space-around">
          {programs?.map((pgm) => (
            <Tabs.Trigger
              key={pgm}
              value={pgm}
              textTransform="uppercase"
            >
              {pgm}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
        {programs.map((pgm) => {
          const programYears = galleryEvents
            .filter((evt) => evt.Program === pgm)
            .reduce((acc: string[], curr) => {
              if (!acc.find((year) => curr.EventYear.toString() === year)) {
                acc.push(curr.EventYear.toString());
              }
              return acc;
            }, [])
            .sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
          return (
            <Tabs.Content
              key={pgm}
              value={pgm}
            >
              <SubHeader>
                <Center
                  width="100%"
                  textTransform="uppercase"
                >
                  {pgm}
                </Center>
              </SubHeader>
              <Accordion.Root defaultValue={[programYears[0]]}>
                {programYears.map((year, id) => (
                  <Accordion.Item
                    key={`${pgm}-${id}`}
                    value={year}
                  >
                    <Accordion.ItemTrigger>
                      {year}
                      <Accordion.ItemIndicator>
                        <ChevronDownIcon />
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      {galleryEvents
                        .filter((evt) => evt.Program === pgm && evt.EventYear === parseInt(year, 10))
                        .map((event) => (
                          <Box key={event.EventName}>{event.EventName}</Box>
                        ))}
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </Stack>
  );
};

export default Gallery;
