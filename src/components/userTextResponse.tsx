export default function UserTextResponse({
  text,
}: {
  text: string;
}) {
  return (
    <div className="grid gap-1">
      <div className="font-bold">You</div>
      <div className="prose prose-stone">
        <p>{text}</p>
      </div>
    </div>
  );
}
