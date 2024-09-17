'use client'
import React, { useState, useEffect } from "react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Grid24Regular, AppsListDetail24Regular } from "@fluentui/react-icons";

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
                <Grid24Regular />
                Board
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="table">
                <AppsListDetail24Regular />
                List
            </TabsTrigger>
        </TabsList>
        </Tabs>
    )
}
export default ButtonFilter
