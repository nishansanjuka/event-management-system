import { ClerkProvider } from "@clerk/nextjs";
import { EventsProvider } from "./events-provider";

export function Provider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <EventsProvider>{children}</EventsProvider>
      </ClerkProvider>
    </>
  );
}
