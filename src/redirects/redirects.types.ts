import { RequestContext } from "../types.js";

export interface RedirectContext {
  location: string;
  status: number;
  ctx: RequestContext;
}

export interface RedirectConfig {
  /**
   * Observational / Side Effect Only
   * - Runs **after** a fetch signals a redirect
   * - Can do anything: navigation, logging, analytics, UI updates
   * - Does **not need to terminate** anything
   */
  onClientRedirect?(ctx: RedirectContext): void | Promise<void>;

  /**
   * - Authoritative / must terminate
   * - Runs **only on the server** (Server Component, API route, etc.)
   * - Must end with something like `redirect(ctx.location)` (Next.js) or `NextResponse.redirect()`
   * - Can be used for logging or other effects **as long as it terminate**
   */
  onServerRedirect?(ctx: RedirectContext): void | Promise<void>;
}

export type RedirectMeta =
  | { redirected: false }
  | {
      redirected: true;
      location: string;
      status: number;
    };
