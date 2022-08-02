import { For } from "solid-js";
import StackItemCard from "../components/StackItemCard";
import {
  backendStackList,
  frontendStackList,
  learningList,
} from "../constants/icons";

export default function HomePage() {
  return (
    <div class="w-full my-4 pt-2 pb-10 __mainContent">
      <p class="leading-relaxed tracking-wide first-letter:uppercase first-letter:text-xl text-justify font-medium text-black/70">
        I'm a self-taught Full Stack JavaScript Developer. I enjoy connecting
        with people to share ideas and knowledge. My strength lies in a
        combination of self-learning and consistency to improve myself. I love
        and believe in open source and building side projects.
      </p>
      <div class="w-fit">
        <h4 class="mt-4 text-lg font-medium text-black">My Frontend stack:</h4>
        <div class="w-full h-0.5 bg-white/75 rounded-md" />
        <div class="mt ml-1 w-full h-1 bg-white/25 rounded-md" />
      </div>
      <div class="w-full grid grid-cols-5 gap-x-2 gap-y-4 mt-4">
        <For each={frontendStackList}>
          {(item, index) => <StackItemCard data-index={index()} {...item} />}
        </For>
      </div>
      <div class="w-fit mt-4">
        <h4 class="mt-4 text-lg font-medium text-black">My Backend stack:</h4>
        <div class="w-full h-0.5 bg-white/75 rounded-md" />
        <div class="mt ml-1 w-full h-1 bg-white/25 rounded-md" />
      </div>
      <div class="w-full grid grid-cols-5 gap-x-2 gap-y-4 mt-4">
        <For each={backendStackList}>
          {(item, index) => <StackItemCard data-index={index()} {...item} />}
        </For>
      </div>
      <div class="w-fit mt-4">
        <h4 class="mt-4 text-lg font-medium text-black">
          I'm currently learning:
        </h4>
        <div class="w-full h-0.5 bg-white/75 rounded-md" />
        <div class="mt ml-1 w-full h-1 bg-white/25 rounded-md" />
      </div>
      <div class="w-full grid grid-cols-5 gap-x-2 gap-y-4 mt-4">
        <For each={learningList}>
          {(item, index) => <StackItemCard data-index={index()} {...item} />}
        </For>
      </div>
    </div>
  );
}
