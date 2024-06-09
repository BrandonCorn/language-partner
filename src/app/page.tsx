import Image from "next/image";
import { ConversationTemp } from "@/components/conversation-temp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <ConversationTemp />
    </main>
  );
}
