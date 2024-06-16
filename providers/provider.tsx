import { ClerkProvider } from "@clerk/nextjs";

export function Provider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
    </>
  );
}