import { children, JSX } from "solid-js";
import Footer from "./Footer";
import GlassCard from "./GlassCard";
import Header from "./Header";

export default function Layout(props: { children: JSX.Element }) {
  const c = children(() => props.children);

  return (
    <div class="container h-full">
      <div class="w-full md:w-1/2 lg:2/3 mx-auto h-full">
        <GlassCard>
          <Header />
          <main class="w-full">{c()}</main>
          <Footer />
        </GlassCard>
      </div>
    </div>
  );
}
