import { describe, it, expect, vi, beforeEach } from "vitest";
import { createFetchClient } from "../src/createClient";

describe("disableUnsafeRequests TypeScript behavior", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("disables unsafe methods at runtime", async () => {
    global.fetch = vi.fn(
      async () => new Response(JSON.stringify({ ok: true }), { status: 200 })
    ) as any;

    const api = createFetchClient({
      baseUrl: "https://example.com",
      options: { disableUnsafeRequests: true },
    });

    // Safe still works
    const res = await api.safeGet("/test");
    expect(res.ok).toBe(true);

    // Unsafe methods are not present
    expect("get" in api).toBe(false);
    expect("post" in api).toBe(false);

    // Optional: prove calling would throw
    expect(() => {
      (api as any).get("/test");
    }).toThrow(TypeError);
  });
});
