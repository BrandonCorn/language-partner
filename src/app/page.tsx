import Image from "next/image";
import Conversation from "@/components/conversation";
import { AI } from "./action";

export default function Home() {
  return (
    <AI>
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col w-3/4 bg-gray-800 h-screen">
          <div className="sticky top-0 z-10 p-2">
            <div className="max-w-2xl mx-auto ">
              <h1 className="text-lg gap-1 px-3 h-10 my-4">
                Language Conversation Partner
              </h1>
            </div>
          </div>
          <Conversation />
        </div>
      </main>
    </AI>
  );
}
