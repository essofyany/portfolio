import NavTabs from "./NavTabs";
import ProfileCard from "./ProfileCard";

export default function Header() {
  return (
    <header class="w-full flex flex-col gap-8">
      {/* profile stripe */}
      <ProfileCard />
      {/* nav tabs */}
      <NavTabs />
    </header>
  );
}
