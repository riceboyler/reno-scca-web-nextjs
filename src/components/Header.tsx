"use client";
import { Portal } from "@ark-ui/react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Stack } from "styled-system/jsx";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle";
import { LightDarkLogo } from "@/components/LightDarkLogo";
import { NavbarLink } from "@/components/NavbarLink";
import { IconButton } from "@/components/ui";
import { Menu } from "./Menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Stack
        display={{ base: "none", md: "flex" }}
        margin="0 auto"
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        maxWidth="1200px"
        paddingY="10px"
        maxHeight="120px"
      >
        <NavbarLink
          href="/schedule"
          text="Schedule"
        />
        <NavbarLink
          href="/results"
          text="Results"
        />
        <NavbarLink
          href="/rules"
          text="Cars & Rules"
        />
        <NavbarLink
          href="/docs"
          text="Club Docs"
        />
        <Link href="/">
          <LightDarkLogo />
        </Link>
        <NavbarLink
          href="/events"
          text="Our Events"
        />
        <NavbarLink
          href="/gallery"
          text="Photo Gallery"
        />
        <NavbarLink
          href="/contact"
          text="Contact Us"
        />
        <ColorSchemeToggle />
      </Stack>
      <Stack
        display={{ base: "flex", md: "none" }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="100%"
        padding="4"
      >
        <ColorSchemeToggle />
        <Link href="/">
          <LightDarkLogo />
        </Link>
        <Stack
          direction="row"
          gap="2"
          alignItems="center"
        >
          <Menu.Root
            defaultOpen={false}
            lazyMount
            navigate={(details) => router.push(details.href)}
            onOpenChange={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu.Trigger asChild>
              <IconButton
                variant="outline"
                aria-label="Menu"
              >
                {isMenuOpen ? <X /> : <MenuIcon />}
              </IconButton>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content
                  background="var(--background)"
                  padding={6}
                >
                  <Menu.Item
                    asChild
                    value="results"
                  >
                    <NavbarLink
                      href="/results"
                      text="Results"
                    />
                  </Menu.Item>
                  <Menu.Item
                    asChild
                    value="schedule"
                  >
                    <NavbarLink
                      href="/schedule"
                      text="Schedule"
                    />
                  </Menu.Item>

                  <Menu.Item
                    asChild
                    value="rules"
                  >
                    <NavbarLink
                      href="/rules"
                      text="Cars & Rules"
                    />
                  </Menu.Item>
                  <NavbarLink
                    href="/docs"
                    text="Club Docs"
                  />
                  <NavbarLink
                    href="/events"
                    text="Our Events"
                  />
                  <NavbarLink
                    href="/gallery"
                    text="Photo Gallery"
                  />
                  <NavbarLink
                    href="/contact"
                    text="Contact Us"
                  />
                  <NavbarLink
                    href="/login"
                    text="Login"
                  />
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Stack>
      </Stack>
    </>
  );
};
