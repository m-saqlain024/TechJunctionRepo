import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getUserName: publicProcedure.query(() => {
    return { userName: "saqlain" };
  }),
});


export type AppRouter = typeof appRouter;