type Props = { text: string; className?: string };

// Pill discreto para dicas contextuais no layout
export default function Hint({ text, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-color surface ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
      {text}
    </span>
  );
}


