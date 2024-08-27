"use server";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { sitelink } from "@/lib/const";
import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import ChevronRight from "@/components/icons/chevron-right";
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
    <NavigationMenu orientation="horizontal" className="flex w-full max-w-screen-xl mx-auto fixed top-2 left-0 right-0 z-50 px-6">
      <NavigationMenuList className="flex items-center w-full max-w-screen-xl justify-between px-4 py-2 bg-white/50 borderStyle dark:bg-white/5 backdrop-blur-xl rounded-full drop-shadow-xl">
        <div className="flex">
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
            <ChevronRight />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
