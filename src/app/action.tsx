"use server";

import { openai } from "@ai-sdk/openai";
import {
  streamUI,
  getMutableAIState,
  createAI,
} from "ai/rsc";
import z from "zod";
import AITextResponse from "@/components/aiTextResponse";
import ErrorFeedbackDetails, {
  errorFeedbackSchema,
} from "@/components/languageResources/errorFeedbackDetails";
import { translationDetailsSchema } from "@/components/languageResources/translationDetails";
// import { generateObject } from "ai";

export interface ClientMessage {
  // id: string;
  display: React.ReactNode;
  role: "user" | "assistant";
}

export interface ServerMessage {
  content: string;
  role: "assistant" | "user";
}

export async function continueConversation(
  input: string
) {
  "use server";

  const history = getMutableAIState();

  const result = await streamUI({
    model: openai("gpt-3.5-turbo"),
    temperature: 0.5,
    system: `You are a language teacher and conversation partner. Assume you have 3 decades of experience teaching people how to speak a new language and use the most effective strategies for learning languages
      in your conversation. Your role is to teach a language to a user by conversing with that user in the language in a way that resembles everyday conversation and on some topic they've requested if they so choose.
      If necessary, you can ask them what dialect they would like to speak, for example mexican spanish is different from spanish in Spain or Columbia. Any initial questions for the user should be in their native language. Once the user has answered your questions, you will start the conversation 
      in the selected language. The entire conversation once begun should be in the language being learned with some exceptions. You may switch to the users native language when you need to provide feedback if necessary. You will guage the users skill level at speaking the language 
      as the conversation progresses and adjust difficulty of your conversation based on their skill. Provide feedback where necessary, for example if the wrong words are used, if the user makes grammatical errors, or to praise the user as necessary. Your ongoing conversation can have 
      a topic so it resembles everyday conversation, and when the user needs to be told something outside that topic such as their mistakes, you may do so. 
      
      * When the user first messages you, you should always, always, always ask them what language they want to speak in their native language. Once the user has selected a language, you can ask them any necessary follow up questions for learning that language in their native
        language.
      * Only speak the users native language when deemed necessary, this could be for and is not limited to providing definitions of words they should use, when they ask how to translate something, etc.
      * When the user speaks the language incorrectly, call the 'provide_error_feedback' tool to provide feedback on what they did wrong and allow them to try to make their statement again correctly. This includes if the user includes a native language utterance mixed in with the language
        they are trying to learn.
      * When the user asks what a word means, call the 'wordTranslation' tool to provide detailed information about the word to a user
        
        `,
    messages: [
      ...history.get(),
      { role: "user", content: input },
    ],
    text: ({ content, done }) => {
      if (done) {
        history.done(
          (messages: ServerMessage[]) => [
            ...messages,
            { role: "assistant", content },
          ]
        );
        return <AITextResponse text={content} />;
      }
    },
    tools: {
      provideErrorFeedback: {
        description:
          "When a user speaks the language incorrectly in an utterance, this tool provides corrections of the users mistake. Repeat your utterance after correcting the user. ",
        parameters: errorFeedbackSchema,
        generate: async function* ({
          error,
          correction,
          correctedStatement,
        }: z.infer<typeof errorFeedbackSchema>) {
          yield <div> Loading... </div>;

          return (
            <ErrorFeedbackDetails
              error={error}
              correction={correction}
              correctedStatement={
                correctedStatement
              }
            />
          );
        },
      },
      wordTranslation: {
        description:
          "When a user asks the meaning of a word, provide detailed information about the word.",
        parameters: translationDetailsSchema,
        generate: async function* (details) {
          yield <div> Loading... </div>;
          console.log("all details ", details);
          return <div> Got em </div>;
        },
      },
    },
  });

  return {
    role: "assistant",
    display: result.value,
  };
}

export const AI = createAI<
  ServerMessage[],
  ClientMessage[]
>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
