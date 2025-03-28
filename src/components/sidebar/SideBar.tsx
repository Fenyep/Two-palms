import SidebarLogo from "./SidebarLogo";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

/**
 * Main sidebar component for Two Palms Productions
 * Contains logo, navigation links, and footer
 */
export default function Sidebar() {
  return (
    <aside className="flex flex-col pt-11 pr-16 pb-6 pl-6 text-white bg-neutral-900 min-h-[screen] max-md:px-10 max-md:py-8 max-sm:p-6">
      <div className="flex flex-col gap-9 max-w-[313px]">
        <header className="flex flex-col gap-9">
          <SidebarLogo />
          <address className="text-xl font-bold leading-6 not-italic">
            hello@twopalmsproductions.com
          </address>
        </header>
        <SidebarNavigation />
      </div>
      <SidebarFooter />
    </aside>
  );
}
