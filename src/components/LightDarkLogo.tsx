"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export const LightDarkLogo = () => {
  const { theme } = useTheme();
  const common = { alt: "Reno SCCA Logo", sizes: "100vw" };

  const imgSrc =
    theme === "light"
      ? "/images/reno_scca_logo_transparent.png"
      : "/images/reno_scca_logo_inverted_white_text.png";
  return (
    <Image
      src={imgSrc}
      alt={common.alt}
      width={204}
      height={100}
    />
  );
};
