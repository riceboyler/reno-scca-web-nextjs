import type React from "react";
import { HStack, type HstackProps } from "styled-system/jsx";

type Props = HstackProps & {
  children: React.ReactNode;
};

export const SubHeader = ({ children, ...rest }: Props) => {
  return (
    <HStack
      {...rest}
      width="100%"
      justifyContent="space-between"
      fontFamily="header"
      fontSize={{ base: "2xl", md: "4xl" }}
      backgroundGradient="to-b"
      gradientFrom="indigo.6"
      gradientTo="indigo.3"
      padding="2"
    >
      {children}
    </HStack>
  );
};
