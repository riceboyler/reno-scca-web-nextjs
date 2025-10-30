import Image from "next/image";
import { Box } from "styled-system/jsx";
import { SectionHeader } from "@/components/SectionHeader";
import type { HomeContentModel } from "@/db/models/HomeContent.model";
import Logo from "@/images/reno_scca_logo_fancy.jpg";

type Props = {
  homeContent: HomeContentModel[];
};

export const HomeContent = ({ homeContent }: Props) => {
  return (
    <Box width="100%">
      <SectionHeader>General Info</SectionHeader>
      <Box margin="16px auto" maxWidth="400px">
        <Image
          src={Logo}
          alt="Reno SCCA Logo"
        />
      </Box>
      {homeContent.map((content) => (
        <Box
          // biome-ignore lint/security/noDangerouslySetInnerHtml: content coming from the db has embedded HTML
          dangerouslySetInnerHTML={{ __html: content.Text }}
          key={content.ID}
        />
      ))}
    </Box>
  );
};
