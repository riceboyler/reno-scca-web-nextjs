"use client";
import { Portal } from "@ark-ui/react";
import { Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Stack } from "styled-system/jsx";
import { NavbarLink } from "@/components/NavbarLink";
import { IconButton } from "@/components/ui";
import Logo from "@/images/reno_scca_logo.jpg";
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
        maxHeight="120px">
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
        <Image
          src={Logo}
          alt="Reno SCCA Logo"
          width={204}
          height={100}
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
      </Stack>
      <Stack
        display={{ base: "flex", md: "none" }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="100%"
        padding="4">
        <Image
          src={Logo}
          alt="Reno SCCA Logo"
          width={122}
          height={60}
        />
        <Menu.Root
          defaultOpen={false}
          lazyMount
          navigate={(details) => router.push(details.href)}
          onOpenChange={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu.Trigger asChild>
            <IconButton
              variant="surface"
              aria-label="Menu">
              {isMenuOpen ? <X /> : <MenuIcon />}
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content background="white" padding={6}>
                <Menu.Item
                  asChild
                  value="results">
                  <NavbarLink
                    href="/results"
                    text="Results"
                  />
                </Menu.Item>
                <Menu.Item
                  asChild
                  value="schedule">
                  <NavbarLink
                    href="/schedule"
                    text="Schedule"
                  />
                </Menu.Item>

                <Menu.Item
                  asChild
                  value="rules">
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
    </>
  );
};
