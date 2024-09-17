import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { sitelink } from "@/lib/const";
import Logo from "@/components/global/logo";
import {ChevronRight24Regular} from "@fluentui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { auth } from "@/lib/server/auth";


const Navigation = async () => {
  const user = await auth();
  return (
    <NavigationMenu orientation="horizontal" className="w-full max-w-5xl mx-auto fixed top-2 left-0 right-0 z-50 px-6">
      <NavigationMenuList className="w-full max-w-5xl border borderStyle justify-between px-4 gap-6 py-2 bg-white/50 borderStyle dark:bg-white/5 backdrop-blur-xl rounded-full">
        <div className="flex space-x-6">
          <Link className="flex items-center gap-2" href={"/"}>
            <Logo />
            <span className="borderStyle bg-white/5 px-1 py-px text-onyx-500 rounded-full text-[10px] font-semibold">
              Beta
            </span>
          </Link>
            <Separator orientation="vertical" />
            <NavigationMenuItem className="hidden lg:flex items-center gap-8">
            {sitelink.map((link) => (
              <NavigationMenuLink key={link.id} href={link.url}>
                {link.title}
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
          </div>
        <NavigationMenuItem>
          <Link href={user ? "/app" : "/sign-in"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {user ? "Dashboard" : "Sign In"}
            <ChevronRight24Regular />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
