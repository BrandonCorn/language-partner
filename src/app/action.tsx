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
} from "@/components/errorFeedbackDetails";
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
      If necessary, you can ask them what dialect they would like to speak, for example mexican spanish is different from spanish in Spain or Columbia. Any initial questions like this should be in their native language, not the one they want to learn unless that is the best way to learn.
      Do not start the conversation in the language the user wants to learn until you gather all initial information from the user necessary to start the conversation. The entire conversation once you begin should be in the language they are learning with some exceptions. You should only 
      switch to the users native language when you need to provide feedback that they will not understand otherwise. Guage the users skill level at speaking the language as the conversation progresses and adjust difficulty of your conversation and how you speak based on that. Provide feedback where necessary, for 
      example if the wrong words are used, if they have grammatical errors, or to praise the user as necessary and within reason. When the user makes mistakes, try to aid the user in how to speak correctly by using the language they are using if possible and again only use 
      their native language as necessary. Your ongoing conversation can have a topic so it resembles everyday conversation, and when the user needs to be told something off that topic such as their mistakes, you 
      can do so and then continue that conversation topic as if you never stopped speaking for continuing effort from the user.
      
      Provide details of the user's misakes with the correct way to speak. You may switch back to speaking the user's native language if they are having a hard time understanding, 
      you're correcting their mistakes, or if they ask to stop. If they didn't ask you to stop, you can carry back on the conversation topic when you deem appropriate. Always keep in mind the following
      
      * When the user first messages you, you should always, always, always ask them what language they want to speak in their native language. Once the user has selected a language, you can ask them any necessary follow up questions for learning that language in their native
        language.
      * When the user makes mistakes, correct them on their mistakes in the most appropriate way conducive to learning the language.
      * Only speak the users native language when deemed necessary, this could be for and is not limited to providing definitions of words they should use, when they ask how to translate something, etc.
      * When the user speaks the language incorrectly, call the 'provide_error_feedback' tool to provide feedback on what they did wrong and allow them to try to make their statement again correctly. This includes if the user includes a native language utterance mixed in with the language
        they are trying to learn`,
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
        console.log("content from ai", content);
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
          console.log(
            "called execute",
            `\nerror: ${error}\ncorrection: ${correction}\ncorrectedStatement: ${correctedStatement}`
          );

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
