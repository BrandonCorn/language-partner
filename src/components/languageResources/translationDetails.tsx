/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1T73bFAgXZz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import z from "zod";

export const translationDetailsSchema = z.object({
  nativeLanguage: z
    .string()
    .describe(
      "The language the user speaks natively"
    ),
  newLanguage: z
    .string()
    .describe(
      "The language the user is learning in this conversation"
    ),
  translation: z.object({
    nativeLanguage: z
      .string()
      .describe(
        "The word in the users native language"
      ),
    newLanguage: z
      .string()
      .describe(
        "The word in the language the user is learning"
      ),
  }),
  partsOfSpeech: z.object({
    nativeLanguage: z
      .string()
      .describe(
        "The parts of speech for the word in the users native language."
      ),
    newLanguage: z
      .string()
      .describe(
        "The parts of speech in the language the user is learning. "
      ),
  }),
  inflections: z.object({
    nativeLanguage: z
      .object({
        past: z
          .string()
          .describe("Past inflection "),
        present: z
          .string()
          .describe("Present inflection"),
        future: z
          .string()
          .describe("Future inflection"),
        presentParticiple: z
          .string()
          .describe("Present participle"),
      })
      .describe(
        "Inflections of the word in users native language. Provide past, present, future, and present participle"
      ),
    newLanguage: z
      .object({
        past: z
          .string()
          .describe("Past inflection "),
        present: z
          .string()
          .describe("Present inflection"),
        future: z
          .string()
          .describe("Future inflection"),
        presentParticiple: z
          .string()
          .describe("Present participle"),
      })
      .describe(
        "Inflections of the word in the language the user is learning. Provide past present, future, and present participle"
      ),
  }),
  gender: z
    .string()
    .describe(
      "Gender of the word if applicable. If not applicable do not provide one"
    )
    .optional(),
  usageExample: z.object({
    nativeLanguage: z
      .string()
      .describe(
        "Example usage of the word in users native language"
      ),
    newLanguage: z
      .string()
      .describe(
        "Example usage of the word in the language user is learning"
      ),
  }),
  collocations: z
    .array(
      z.object({
        newLanguage: z
          .string()
          .describe(
            "Common phrases using the translated word"
          ),
        nativeLanguage: z
          .string()
          .describe(
            "The translation of the provided common phrases using the translated word"
          ),
      })
    )
    .describe(
      "6 common phrases of the translated word"
    )
    .length(6),
  conjugations: z.object({
    present: z
      .object({
        firstPersonSingular: z
          .string()
          .describe("First person singular"),
        secondPersonalSingularInformal: z
          .string()
          .describe(
            "Second person singular informal"
          ),
        secondPersonSingularFormal: z
          .string()
          .describe(
            "Second person singluar formal"
          ),
        thirdPersonSingular: z
          .string()
          .describe("Third person singular"),
        firstPersonPlural: z
          .string()
          .describe("First person plural"),
        secondPersonPluralFormal: z
          .string()
          .describe(
            "Second person plural formal"
          ),
        secondPersonPluralInformal: z
          .string()
          .describe(
            "Second person plural informal"
          ),
        thirdPersonPlural: z
          .string()
          .describe("Third person plural"),
      })
      .describe(
        "Conjugations of the word which was translated in the language the user is learning. Provide the appropriate pronoun before each word if necessary"
      )
      .optional(),
  }),
});

export default function TranslationDetails(
  details: z.infer<
    typeof translationDetailsSchema
  >
) {
  return (
    <Card className="w-full flex flex-col h-fit">
      <CardHeader>
        <CardTitle>Word Translation</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-bold">
              {details.translation.newLanguage}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {details.newLanguage}
            </p>
          </div>
          <div className="text-right md:text-left">
            <h3 className="text-2xl font-bold">
              {details.translation.nativeLanguage}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {details.nativeLanguage}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium">
              Parts of Speech
            </h4>
            <p className="text-gray-500 dark:text-gray-400">
              {details.partsOfSpeech.newLanguage}
            </p>
          </div>
          <div className="text-right md:text-left">
            <h4 className="font-medium">
              Parts of Speech
            </h4>
            <p className="text-gray-500 dark:text-gray-400">
              {
                details.partsOfSpeech
                  .nativeLanguage
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium">
              Inflections
            </h4>
            <p className="text-gray-500 dark:text-gray-400">
              Past:{" "}
              {
                details.inflections.newLanguage
                  .past
              }
              <br />
              Present:{" "}
              {
                details.inflections.newLanguage
                  .present
              }
              <br />
              Future:{" "}
              {
                details.inflections.newLanguage
                  .future
              }
              <br />
              Present Participle:{" "}
              {
                details.inflections.newLanguage
                  .presentParticiple
              }
            </p>
          </div>
          <div className="text-right md:text-left">
            <h4 className="font-medium">
              Inflections
            </h4>
            <p className="text-gray-500 dark:text-gray-400">
              Past:{" "}
              {
                details.inflections.nativeLanguage
                  .past
              }
              <br />
              Present:{" "}
              {
                details.inflections.nativeLanguage
                  .present
              }
              <br />
              Future:{" "}
              {
                details.inflections.nativeLanguage
                  .future
              }
              <br />
              Present Participle:{" "}
              {
                details.inflections.nativeLanguage
                  .presentParticiple
              }
            </p>
          </div>
        </div>
        {details?.conjugations && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">
                Conjugations
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {
                  details.conjugations.present
                    ?.firstPersonSingular
                }
                <br />
                {
                  details.conjugations.present
                    ?.secondPersonalSingularInformal
                }
                <br />
                {
                  details.conjugations.present
                    ?.thirdPersonSingular
                }
                <br />
                {
                  details.conjugations.present
                    ?.firstPersonPlural
                }
                <br />
                {
                  details.conjugations.present
                    ?.secondPersonPluralInformal
                }
                <br />
                {
                  details.conjugations.present
                    ?.thirdPersonPlural
                }
              </p>
            </div>
            <div className="text-right md:text-left">
              <h4 className="font-medium">
                Example
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                "
                {
                  details.usageExample
                    .nativeLanguage
                }
                "
              </p>
            </div>
          </div>
        )}
        <div>
          <div className="text-left">
            <h4 className="font-medium">
              Example
            </h4>
            <p className="text-gray-500 dark:text-gray-400">
              "{details.usageExample.newLanguage}"
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-medium">
            Common Collocations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {details.collocations.map(
              (phrase, i) => {
                return (
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-2 py-1 text-sm flex flex-col">
                    <span>
                      {phrase.newLanguage}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {phrase.nativeLanguage}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
