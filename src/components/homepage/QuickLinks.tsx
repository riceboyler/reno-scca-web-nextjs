"use client";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";
import { Box, Stack } from "styled-system/jsx";
import { PandaLink } from "@/components/ui/link";
import type { QuickLinkModel } from "@/db/models/QuickLink.model";

type Props = {
  quickLinks: QuickLinkModel[];
};

export const QuickLinks = ({ quickLinks }: Props) => {
  return (
    <Box
      position={{ base: "relative", md: "sticky" }}
      top="10px"
      minWidth="350px">
      <Box
        border="solid 1px"
        borderColor="slate.400"
        borderRadius="lg"
        overflow="hidden">
        <Box
          p="2"
          backgroundColor="var(--card-background)"
          fontFamily="Oswald"
          fontSize="2xl"
          textTransform="uppercase"
          textAlign="center">
          Quick Links
        </Box>
        <Box
          backgroundColor="var(--card-background)"
          p="2">
          {quickLinks.map((link) => (
            <QuickLink
              key={link.ID}
              quickLink={link}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

type QuickLinkProps = {
  quickLink: QuickLinkModel;
};

const QuickLink = ({ quickLink }: QuickLinkProps) => {
  return (
    <PandaLink asChild>
      <Stack
        display="inline-flex"
        direction="row"
        alignItems="flex-start"
      >
        <Box marginTop="4px">
          <LucideArrowRight size="1rem" />
        </Box>
        <Link href={quickLink.Link}>{quickLink.LinkText}</Link>
      </Stack>
    </PandaLink>
  );
};
