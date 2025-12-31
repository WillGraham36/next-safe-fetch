import { createFetchClient } from "unified-auth-fetch";

const api = createFetchClient({
  baseUrl: "https://dummyjson.com",
  withCredentials: true,
});

export default api;
