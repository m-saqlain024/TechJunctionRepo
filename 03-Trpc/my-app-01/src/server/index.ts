import { router, publicProcedure } from "./trpc";
import db from "../data/db.json";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    // Retrieve users from a datasource, this is an imaginary database
    const users = db.map((item) => item.name);
    return users;
  }),
});

// const server = createHTTPServer({
//   router: appRouter,
// });

// server.listen(3000);

export type AppRouter = typeof appRouter;
