import Image from "next/image";
import Conversation from "@/components/conversation";
import { AI } from "./action";

export default function Home() {
  return (
    <AI>
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <Conversation />
      </main>
    </AI>
  );
}
