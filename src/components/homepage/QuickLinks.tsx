"use client";
import { Anchor, List } from "@mantine/core";
import Link from "next/link";
import { Box, Stack } from "styled-system/jsx";
import type { QuickLinkModel } from "@/db/models/QuickLink.model";

type Props = {
  quickLinks: QuickLinkModel[];
};

export const QuickLinks = ({ quickLinks }: Props) => {
  return (
    <Box position="sticky" top="10px" minWidth="375px">
      <Box
        border="solid 1px"
        borderColor="slate.400"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          p="2"
          backgroundColor="indigo.100"
          fontFamily="Oswald"
          fontSize="2xl"
          textTransform="uppercase"
          textAlign="center"
        >
          Quick Links
        </Box>
        <Box
          backgroundColor="white"
          p="2">
          <List listStyleType="disc">
            {quickLinks.map((link) => (
              <QuickLink
                key={link.ID}
                quickLink={link}
              />
            ))}
          </List>
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
    <List.Item>
      <Anchor
        component={Link}
        href={quickLink.Link}
      >
        <Stack direction="row" alignItems="center">
          {quickLink.LinkText}
        </Stack>
      </Anchor>
    </List.Item>
  );
};
