import type React from "react";
import { Box } from "styled-system/jsx";

type Props = {
  children: React.ReactNode;
};

export const SectionHeader = ({ children }: Props) => {
  return (
    <Box
      fontFamily="Oswald"
      fontSize="4xl"
      bgLinear="to-br"
      gradientFrom="slate.500"
      gradientTo="slate.800"
      color="white"
      textTransform="uppercase"
      textAlign="center"
      padding="2"
    >
      {children}
    </Box>
  );
};
