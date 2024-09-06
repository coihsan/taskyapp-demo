"use client";

import React from "react";
import Logo from "@/components/global/logo";
import FooterOnSidebar from "@/components/global/footer-on-sidebar";
import SelectWorkspace from "../select-workspace";
import WorkspaceMenu from "../workspace-menu";
import { SidebarContent } from "@/components/global/sidebar-content";
import { useGetAllProjectsByWorkspaceId } from "@/lib/hooks/use-swr";
import GetAllProjects from "../get-all-projects";

interface Props {
  workspaceId: string;
}

const Sidebar = ({ workspaceId }: Props) => {
  return (
    <aside className="w-full h-screen min-h-dvh max-w-64 relative">
      <SidebarContent>
        <Logo />
      </SidebarContent>
      <div className="pt-3 px-2">
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
