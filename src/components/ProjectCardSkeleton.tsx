export default function ProjectCardSkeleton() {
  return (
    <div className="relative space-y-2 rounded-2xl bg-white/10 p-4 overflow-hidden">
      <div className="h-3 w-3/5 rounded-lg bg-white/25"></div>
      <div className="h-24 mb-3 rounded-lg bg-white/25 "></div>
      <div className="space-y-2">
        <div className="h-3 w-2/5 rounded-lg bg-white/25"></div>
        <div className="h-3 w-4/5 rounded-lg bg-white/25"></div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
    </div>
  );
}
