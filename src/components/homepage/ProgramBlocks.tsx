import { Box } from "styled-system/jsx";
import { SectionHeader } from "@/components/SectionHeader";
import type { ProgramPageModel } from "@/db/models/ProgramPage.model";

type Props = {
  pages: ProgramPageModel[];
};

export const ProgramBlocks = ({ pages }: Props) => {
  return (
    <Box>
      {pages.map((page) => (
        <Box key={`page-${page.ID}`}>
          <SectionHeader>{page.Program}</SectionHeader>
          <Box
            marginY="2"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: ShortText has HTML embedded
            dangerouslySetInnerHTML={{ __html: page.ShortText }}
          />
        </Box>
      ))}
    </Box>
  );
};
