import Image from "next/image";
import { ConversationTemp } from "@/components/conversationTemp";
import { AI } from "./action";

export default function Home() {
  return (
    <AI>
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <ConversationTemp />
      </main>
    </AI>
  );
}
