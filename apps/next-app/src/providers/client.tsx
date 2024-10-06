"use client";

import { createConnectTransport } from "@connectrpc/connect-web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TransportProvider } from "@connectrpc/connect-query";

export const Client = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const transport = createConnectTransport({
    baseUrl: "http://localhost:3009",
  });

  const client = new QueryClient();

  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </TransportProvider>
  );
};
