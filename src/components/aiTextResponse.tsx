import { Button } from "./ui/button";
import {
  ClipboardIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  RefreshCcwIcon,
} from "./ui/icons";

export default function AITextResponse({
  text,
}: {
  text: string;
}) {
  return (
    <div className="grid gap-1">
      <div className="font-bold">AI</div>
      <div className="prose prose-stone">
        <p>{text}</p>
      </div>
      <div className="flex items-center gap-2 py-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
        >
          <ClipboardIcon className="w-4 h-4" />
          <span className="sr-only">Copy</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
        >
          <ThumbsUpIcon className="w-4 h-4" />
          <span className="sr-only">Upvote</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
        >
          <ThumbsDownIcon className="w-4 h-4" />
          <span className="sr-only">
            Downvote
          </span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
        >
          <RefreshCcwIcon className="w-4 h-4" />
          <span className="sr-only">
            Regenerate
          </span>
        </Button>
      </div>
    </div>
  );
}
