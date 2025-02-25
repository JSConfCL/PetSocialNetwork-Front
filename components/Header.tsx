"use client";

import { Bell, MessageCircle, Search, PawPrint as Paw, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { pets } from "@/data";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Button,
  Avatar,
  CountUp,
  HeaderHider
} from "@/components/";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const currentPet = pets[0];

  const { setTheme } = useTheme();

  return (
    <HeaderHider className="sticky top-0 z-50 w-full transition-all">
      <header className="border-b bg-white shadow-md shadow-purple-100 backdrop-blur supports-[backdrop-filter]:bg-background dark:bg-[#10061d] dark:shadow-none">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-full bg-purple-500 p-2">
                <Paw className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">PetSocial</span>
            </Link>

            {/* Buscador */}
            <div className="mx-4 hidden max-w-sm flex-1 items-center md:flex">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                  <CountUp from={0} to={3} separator="." direction="up" duration={1} />
                </span>
              </Button>

              <Button variant="ghost" size="icon">
                <Link href="/chat">
                <MessageCircle className="h-5 w-5" />
                
                </Link>
              </Button>

              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <Image
                    src={currentPet.profilePicture}
                    alt={currentPet.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </Avatar>

                <span className="hidden font-medium md:inline-block">{currentPet.name}</span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </HeaderHider>
  );
}
