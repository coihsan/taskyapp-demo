"use client";

import React from "react";
import Logo from "@/components/global/logo";
import FooterOnSidebar from "@/components/global/footer-on-sidebar";
import SelectWorkspace from "../select-workspace";
import WorkspaceMenu from "../workspace-menu";
import { SidebarContent } from "@/components/global/sidebar-content";
import GetAllProjects from "../get-all-projects";
import NotificationUser from "../notification-user";

interface Props {
  workspaceid: string;
}

const Sidebar = ({ workspaceid }: Props) => {
  return (
    <aside className="w-full h-screen min-h-dvh max-w-64 relative">
      <div className="flex items-center justify-between px-2 py-4">
          <Logo />
        <NotificationUser />
      </div>
      <div className="px-2">
        <SelectWorkspace />
      </div>
      <WorkspaceMenu />
      <GetAllProjects />
      <SidebarContent borderTop>
        <FooterOnSidebar />
      </SidebarContent>
    </aside>
  );
};

export default Sidebar;
