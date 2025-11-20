import { SectionHeader } from "@/components/SectionHeader";
import { SubHeader } from "@/components/SubHeader";
import { PandaLink } from "@/components/ui/link";
import { Table } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import type { DocumentModel } from "@/db/models/Document.model";
import { getApiUrl } from "@/helpers/apiUrl";
import Link from "next/link";
import { Center, Stack } from "styled-system/jsx";

const getDocuments = async () => {
  const response = await fetch(`${getApiUrl()}api/documents`);
  if (response?.ok) {
    return await response.json();
  }
  throw new Error("Error while fetching documents");
};

const tabOpts = [
  { id: "general", label: "General", check: "General/" },
  { id: "minutes", label: "Minutes", check: "Minutes" },
  { id: "solo", label: "Solo", check: "Solo/" },
  { id: "track", label: "Track", check: "Trials/" },
];

const DocumentsPage = async () => {
  const allDocs: DocumentModel[] = await getDocuments();
  return (
    <Stack gap="8">
      <SectionHeader>Documents</SectionHeader>
      <Tabs.Root
        defaultValue="general"
        width="100%"
      >
        <Tabs.List justifyContent="space-between">
          {tabOpts.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
        {tabOpts.map((tab) => (
          <Tabs.Content
            key={tab.id}
            value={tab.id}
          >
            <SubHeader>
              <Center width="100%">{tab.label}</Center>
            </SubHeader>
            <Table.Root>
              <Table.Body>
                {allDocs
                  .filter((doc) => doc.Path.includes(tab.check))
                  .map((doc) => (
                    <Table.Row key={doc.ID}>
                      <Table.Cell width="150px">{doc.Date.replace(",", ", ")}</Table.Cell>
                      <Table.Cell>
                        <PandaLink asChild>
                          <Link
                            href={`https://renoscca.org${doc.Path}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {doc.LinkText}
                          </Link>
                        </PandaLink>
                      </Table.Cell>
                      <Table.Cell>{doc.Text}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table.Root>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Stack>
  );
};

export default DocumentsPage;
