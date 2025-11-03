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
      fontSize={{ base: "xl", md: "md", lg: "2xl" }}
      transition="all 300ms ease-in-out"
      color="var(--colors-indigo-12)"
      _hover={{
        color: "var(--colors-indigo-10)"
      }}
    >
      <NextLink href={href}>{text}</NextLink>
    </Link>
  );
};
