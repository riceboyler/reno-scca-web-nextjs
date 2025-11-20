import { SectionHeader } from "@/components/SectionHeader";
import { SubHeader } from "@/components/SubHeader";
import { PandaLink } from "@/components/ui/link";
import type { RulesModel } from "@/db/models/Rules.model";
import { getApiUrl } from "@/helpers/apiUrl";
import Link from "next/link";
import { Center, Stack } from "styled-system/jsx";

const apiUrl = getApiUrl();

const getRules = async () => {
  const response = await fetch(`${apiUrl}api/documents/rules`);
  if (response?.ok) {
    return await response.json();
  }
  // throw new Error("Error while fetching rules");
};

const RulesPage = async () => {
  const rules: RulesModel[] = (await getRules()) ?? [];

  const rulePrograms = rules.reduce((acc: string[], curr) => {
    if (!acc.find((pgm) => pgm === curr.Program)) {
      acc.push(curr.Program);
    }
    return acc;
  }, []);

  return (
    <>
      <SectionHeader>Rules</SectionHeader>

      {rulePrograms.map((pgm) => (
        <Stack
          key={pgm}
          my="8"
        >
          <SubHeader>
            <Center width="100%">{pgm}</Center>
          </SubHeader>
          {rules
            .filter((rule) => rule.Program === pgm)
            .map((rule) => (
              <PandaLink
                key={rule.ID}
                asChild
                ml="4"
              >
                <Link
                  href={rule.Path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rule.LinkText}
                </Link>
              </PandaLink>
            ))}
        </Stack>
      ))}
    </>
  );
};

export default RulesPage;
