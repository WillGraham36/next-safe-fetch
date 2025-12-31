import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-background flex items-center justify-center flex-col gap-5">
      <h1 className="text-xl font-bold mb-4">
        Test out client and server versions of the unified-auth-fetch
      </h1>
      <Link className="text-blue-500 hover:underline" href="/client">
        Client Fetch Test
      </Link>
      <Link className="text-blue-500 hover:underline" href="/server">
        Server Fetch Test
      </Link>
    </main>
  );
}
