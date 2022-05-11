import { AppShell } from "@mantine/core";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell
      padding="md"
      // navbar={
      //   <Navbar width={{ base: 300 }} height={500} p="xs">
      //     {/* Navbar content */}
      //   </Navbar>
      // }
      // header={
      //   <Header height={60} p="xs">
      //     {/* Header content */}
      //   </Header>
      // }
      styles={{
        main: {
          padding: "1rem 2rem",
          marginBottom: "1rem",
        },
      }}
    >
      {children}
    </AppShell>
  );
}
