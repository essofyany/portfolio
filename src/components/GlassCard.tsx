import { children } from "solid-js";

export default function GlassCard(props: { children: any }) {
  const c = children(() => props.children);
  return (
    <div class="relative w-full h-full bg-white/25 shadow-xl backdrop-blur-sm rounded border border-white/25 p-8">
      {c()}
    </div>
  );
}
