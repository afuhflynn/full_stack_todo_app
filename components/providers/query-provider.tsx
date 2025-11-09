"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

type props = {
  children: React.ReactNode;
};

export const TanstackQueryProvider = ({ children }: props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
