import { createFetchClient } from "./createClient.js";
import {
  FetchClient,
  FetchClientConfig,
  FetchClientForOptions,
} from "./types.js";

let apiInstance: FetchClient | null = null;

async function initApi(config: FetchClientConfig = {}): Promise<FetchClient> {
  if (apiInstance) return apiInstance;

  apiInstance = createFetchClient(config);

  return apiInstance;
}

/**
 * Creates a proxy that lazily initializes the fetch client.
 */
function createLazyApiProxy<C extends FetchClientConfig = FetchClientConfig>(
  config: C = {} as C
): FetchClientForOptions<C["options"]> {
  return new Proxy({} as FetchClientForOptions<C["options"]>, {
    get(_, prop: keyof FetchClient) {
      return async (...args: any[]) => {
        const client = await initApi(config);
        // @ts-ignore
        return client[prop](...args);
      };
    },
  });
}

export { createLazyApiProxy as createFetchClient };
