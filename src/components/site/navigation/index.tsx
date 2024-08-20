"use server";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { sitelink } from "@/lib/const";
import { currentUser } from "@clerk/nextjs/server";
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


const Navigation = async () => {
  const user = await currentUser();
  return (
    <NavigationMenu orientation="horizontal" className="flex w-full mx-auto max-w-screen-lg fixed top-2 left-0 right-0 z-50 px-6">
      <NavigationMenuList className="flex items-center w-full justify-between max-w-screen-lg px-4 py-2 bg-white/50 borderStyle dark:bg-white/5 backdrop-blur-xl rounded-full">
        <div className="flex">
          <Link className="flex items-center gap-2" href={"/"}>
            <Logo />
            <span className="borderStyle bg-white/5 px-1 py-px text-onyx-500 rounded-full text-[10px] font-semibold">
              Beta
            </span>
          </Link>
          <div className="hidden lg:flex ml-0 lg:ml-4 flex items-center gap-3">
            <Separator orientation="vertical" />
            <NavigationMenuItem className="hidden lg:flex items-center gap-8">
            {sitelink.map((link) => (
                <Link key={link.id} href={link.url}>
                  <NavigationMenuLink>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
            ))}
          </NavigationMenuItem>
          </div>
        </div>
        <div className="flex items-center h-7 space-x-2">
        <NavigationMenuItem>
          <Link href={user ? "/app" : "/sign-in"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {user ? "Dashboard" : "Sign In"}
            <ChevronRight />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
