/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/w7TZ1XcmGUa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import z from "zod";

export const errorFeedbackSchema = z.object({
  error: z
    .object({
      error: z
        .string()
        .describe("The error the user made"),
      details: z
        .string()
        .describe("Details about the error made"),
    })
    .describe(
      "A detailed explaination of the language error the user made"
    ),
  correction: z
    .string()
    .describe(
      "A detailed correction of the users incorrect utterance. This should include the correction and an explaination."
    ),
  correctedStatement: z
    .string()
    .describe(
      "The users entire utterance with the correction made. This is the correct way the user should have made their entire utterance."
    ),
});

export default function ErrorFeedbackDetails({
  error,
  correction,
  correctedStatement,
}: z.infer<typeof errorFeedbackSchema>) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <CircleAlertIcon className="h-4 w-4" />
          </div>
          <div>
            <p className="font-medium">
              Error: {error.error}{" "}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              You said:
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {error.details}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <CheckIcon className="h-4 w-4" />
          </div>
          <div>
            <p className="font-medium">
              Correction
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              The correct phrase is:{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {correction}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <InfoIcon className="h-4 w-4" />
          </div>
          <div>
            <p className="font-medium">
              Correct Utterance
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              The full correct utterance is:{""}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {correctedStatement}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CircleAlertIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <line
        x1="12"
        x2="12"
        y1="8"
        y2="12"
      />
      <line
        x1="12"
        x2="12.01"
        y1="16"
        y2="16"
      />
    </svg>
  );
}

function InfoIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
