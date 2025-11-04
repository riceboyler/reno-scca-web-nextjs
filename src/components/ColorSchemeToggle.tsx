"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconButton } from "@/components/ui/icon-button";

export function ColorSchemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleColorScheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton
      onClick={toggleColorScheme}
      variant="outline"
      size="lg"
      aria-label="Toggle color scheme"
      css={{
        color: "fg.muted",
        _hover: { color: "fg.default" },
      }}>
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </IconButton>
  );
}
