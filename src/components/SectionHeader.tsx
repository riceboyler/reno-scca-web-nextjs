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
      gradientFrom="indigo.3"
      gradientTo="indigo.9"
      color="fg.default"
      textTransform="uppercase"
      textAlign="center"
      padding="2"
      border="outline"
      borderWidth="0 2px 2px 0">
      {children}
    </Box>
  );
};
