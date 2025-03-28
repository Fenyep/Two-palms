import Image from "next/image";

/**
 * Footer component for the sidebar
 * Shows "Based in Brazil" with a flag
 */
export default function SidebarFooter() {
  return (
    <footer className="flex gap-2.5 items-center mt-auto">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d38335adeefd924a9895022b65007343a0e52898"
        alt="Brazil flag"
        width={25.681}
        height={19.261}
        // className="w-[25.681px] h-[19.261px]"
      />
      <p className="text-xl leading-6">Based in Brazil</p>
    </footer>
  );
}
