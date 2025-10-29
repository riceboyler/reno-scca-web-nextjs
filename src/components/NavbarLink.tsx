import NextLink from "next/link";
import { Link } from "@/components/ui/link";

type Props = {
  href: string;
  text: string;
};

export const NavbarLink = ({ href, text }: Props) => {
  return (
    <Link
      asChild
      fontFamily="Oswald"
      fontSize="2xl"
      transition="all 300ms ease-in-out"
      _hover={{
        color: {
          _light: 'indigo.600',
          _dark: 'indigo.400'
        }
      }}
      variant="plain"
    >
      <NextLink href={href}>{text}</NextLink>
    </Link >
  );
};
