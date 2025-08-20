import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-8">
      <h1 className="text-4xl font-bold">Technical Challenge</h1>
      <Link href="/posts" className="flex items-center gap-x-2 text-blue-500 hover:underline">
        <ArrowRightIcon className="w-4 h-4" /> Go to /posts
      </Link>
    </div>
  );
}
