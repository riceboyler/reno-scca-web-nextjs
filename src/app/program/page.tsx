import { Box, Center, Stack } from "styled-system/jsx";
import { SectionHeader } from "@/components/SectionHeader";
import { SubHeader } from "@/components/SubHeader";
import { Tabs } from "@/components/ui/tabs";
import type { ProgramPageModel } from "@/db/models/ProgramPage.model";
import { getApiUrl } from "@/helpers/apiUrl";

const getProgramPages = async () => {
  const response = await fetch(`${getApiUrl()}api/homePrograms`);
  if (response?.ok) {
    return await response.json();
  }
};

const ProgramPage = async () => {
  const programPages: ProgramPageModel[] = await getProgramPages();

  const programs = programPages.map((pgm) => pgm.Program);

  return (
    <Stack>
      <SectionHeader>About Our Races</SectionHeader>
      <Tabs.Root
        defaultValue="Solo"
        width="100%"
      >
        <Tabs.List
          justifyContent="space-between"
          mt="8"
        >
          {programs.map((pgm) => (
            <Tabs.Trigger
              key={pgm}
              value={pgm}
            >
              {pgm}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
        {programPages.map((page) => (
          <Tabs.Content
            key={page.ID}
            value={page.Program}
            m="8"
          >
            <SubHeader>
              <Center width="100%">{page.Program}</Center>
            </SubHeader>
            <Box
              p="8"
              textAlign="center"
              backgroundColor="var(--dark-transparent)"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Content from DB is HTML
              dangerouslySetInnerHTML={{ __html: page.ShortText }}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Stack>
  );
};

export default ProgramPage;
