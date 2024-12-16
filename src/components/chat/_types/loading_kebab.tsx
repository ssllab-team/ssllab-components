export default function LoadingKebab() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-navy-hovered animated-svg" style={{ animationDelay: "0s" }} />
      <div className="w-1 h-1 rounded-full bg-navy-hovered animated-svg" style={{ animationDelay: "0.3s" }} />
      <div className="w-1 h-1 rounded-full bg-navy-hovered animated-svg" style={{ animationDelay: "0.6s" }} />
    </div>
  );
}
