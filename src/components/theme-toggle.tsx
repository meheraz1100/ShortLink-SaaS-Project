"use client";

import { Moon, Sun, Laptop, Palette } from "lucide-react";

import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          size="icon"
          variant="outline"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem
          onClick={() => setTheme("light")}
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
        >
          <Laptop className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>

        <DropdownMenuItem
          
        >
          👑 Gray Theme (Pro)
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}