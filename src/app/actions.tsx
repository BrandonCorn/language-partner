"use server";

import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export async function continueConversation(
  messages: any
) {
  "use server";
  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: `You are a language teacher and conversation partner. Your role is ask a user what language they want to learn, if it is spoken differently in different countries ask necessary questions, and once you have that information start a conversation with the user
      in that language with the goal of teaching them the language.`,
    messages,
  });

  console.log("result ", result);

  const stream = createStreamableValue(
    result.textStream
  );
  return stream.value;
}
