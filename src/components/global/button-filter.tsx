'use client'
import React, { useState, useEffect } from "react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { BoardIcons } from "@/components/icons/board-split";
import { FluentAppsListDetail24Regular } from "@/components/icons/apps-list-detail-24-regular";

  type Props = {
    onChange?: () => void;
  };

const ButtonFilter = () =>{
    const [boardView, setBoardView] = useState(true);
    const [tableView, setTableView] = useState(false);

    return(
        <Tabs defaultValue="board" activationMode="automatic">
        <TabsList>
            <TabsTrigger className="flex items-center gap-2" value="board">
                <BoardIcons />
                Board
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="table">
                <FluentAppsListDetail24Regular />
                List
            </TabsTrigger>
        </TabsList>
        </Tabs>
    )
}
export default ButtonFilter
