import { Link } from "@solidjs/router";
import { For } from "solid-js";

// interface ProjectCardProps {
// 	title: string;
// 	date: Date;
// 	cover: string;
// }

export default function ProjectCard() {
  // const { cover, date, title } = mergeProps(props);
  const stack = ["SolidJs", "Tailwindcss", "typescript"];
  return (
    <Link
      href="/projects/project-id"
      class="group cursor-pointer flex flex-col gap-2 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/25 overflow-hidden"
    >
      <ul class="flex text-xs gap-1.5 font-medium capitalize text-black/50">
        <For each={stack}>
          {(item, idx) => <li data-index={idx}>#{item}</li>}
        </For>
      </ul>
      <figure class="h-24 rounded-lg bg-white/25 overflow-hidden border border-white/25">
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://blog.sachinchaurasiya.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655628057534%2FjX79q228w.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
          alt=""
        />
      </figure>
      <div class="space-y-2">
        <p class="text-xs font-medium leading-relaxed tracking-wide text-black/50">
          May 26, 2021
        </p>
        <h3 class="text-sm font-semibold text-black leading-relaxed tracking-wide line-clamp-2">
          TypeScript Utility Types: The 6 Most Useful
        </h3>
      </div>
      <div class="hidden group-hover:block absolute z-10 top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
    </Link>
  );
}
