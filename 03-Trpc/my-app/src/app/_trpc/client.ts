import { AppRouter } from "@/trpc";
import { createTRPCClient } from "@trpc/client";

export  const trpc = createTRPCClient<AppRouter>({
    links: []
});