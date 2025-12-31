import api from "@/utils/api";
import React from "react";

const ServerPage = async () => {
  const data = await api.get("/test");
  console.log("Server Test data:", data);
  return (
    <main>
      <h1>Server Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default ServerPage;
