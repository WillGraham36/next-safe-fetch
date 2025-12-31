"use client";

import api from "@/utils/api";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("/test");
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Client Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default ClientPage;
