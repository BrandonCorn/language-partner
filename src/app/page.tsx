import Image from "next/image";
import { ConversationResponse } from "@/components/conversation-response";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConversationResponse text="The conversation begins here" />
    </main>
  );
}
