type TextHighlightProps = {
  children: React.ReactNode;
  color?: string;
};

export function TextHighlight({
  children,
  color = "rgba(79, 200, 28, 0.8)",
}: TextHighlightProps) {
  return (
    <span
      style={{
        background: color,
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        padding: "2px 10px",
      }}
    >
      {children}
    </span>
  );
}
