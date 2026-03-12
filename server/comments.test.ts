import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  getComments: vi.fn().mockResolvedValue([
    { id: 1, nickname: "Alice", content: "Great site!", createdAt: new Date("2026-03-12") },
    { id: 2, nickname: "Bob", content: "Love the design!", createdAt: new Date("2026-03-11") },
  ]),
  addComment: vi.fn().mockResolvedValue({ success: true }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("comments", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("lists comments without authentication", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.comments.list();

    expect(result).toHaveLength(2);
    expect(result[0].nickname).toBe("Alice");
    expect(result[1].nickname).toBe("Bob");
  });

  it("adds a comment without authentication", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.comments.add({
      nickname: "Charlie",
      content: "Hello world!",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects empty nickname", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.comments.add({ nickname: "", content: "Hello" })
    ).rejects.toThrow();
  });

  it("rejects empty content", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.comments.add({ nickname: "Test", content: "" })
    ).rejects.toThrow();
  });
});
