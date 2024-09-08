import Link from "next/link";
import UseNetworkStatus from "./online-status";
import { ModeToggle } from "./mode-toggle";
import UserButtonCustom from "../auth/user-button";

const FooterOnSidebar = () => {
  return (
    <footer className="w-full grid grid-cols-1 space-y-2">
      <UserButtonCustom />
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <div>
          <UseNetworkStatus />
          <div className="flex items-center space-x-2">
            <Link className="text-xs" href="/privacy">
              Privacy
            </Link>
            <Link className="text-xs" href="/policy">
              Policy
            </Link>
            <Link
              className="text-lime-600 text-xs dark:text-lime-400"
              href="/support"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOnSidebar;
