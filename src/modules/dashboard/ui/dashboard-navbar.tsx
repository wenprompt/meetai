"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { DashboardCommand } from "./dashboard-command";

export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar(); //from the sidebar provider
  const [commandOpen, setCommandOpen] = useState(false);

  //handle the keyboard shortcut for the command
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background">
        <Button className="size-9" variant="outline" onClick={toggleSidebar}>
          {state === "collapsed" || isMobile ? (
            <PanelLeftIcon />
          ) : (
            <PanelLeftCloseIcon />
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-9 w-[240px] justify-start font-normal text-muted-foreground"
          onClick={() => setCommandOpen((open) => !open)}
        >
          <SearchIcon className="size-4" />
          Search
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">&#8984;</span>K
          </kbd>
        </Button>
      </nav>
    </>
  );
};
