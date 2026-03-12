import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getComments, addComment } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  comments: router({
    list: publicProcedure.query(async () => {
      return getComments();
    }),
    add: publicProcedure
      .input(
        z.object({
          nickname: z.string().min(1).max(100),
          content: z.string().min(1).max(2000),
        })
      )
      .mutation(async ({ input }) => {
        return addComment({
          nickname: input.nickname,
          content: input.content,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
