"use client";

import { Bell, MessageCircle } from "lucide-react";

import { pets } from "@/data-access/pets";

import CountUp from "@/components/Animations/CountUp/CountUp";
import { HeaderHider } from "@/components/HeaderHider";
import { PetSocialLogo } from "@/components/PetSocialLogo";
import { SearchForm } from "@/components/SearchForm";
import { Button } from "@/components/ui";

import { ButtonOptionsUser } from "./UserOptionsButton";

export function Header() {
  const currentPet = pets[0];

  return (
    <HeaderHider className="sticky top-0 z-50 w-full transition-all">
      <div className="border-b bg-white shadow-md shadow-purple-100 backdrop-blur supports-[backdrop-filter]:bg-background dark:bg-[#10061d] dark:shadow-none">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <PetSocialLogo />
            {/* Buscador */}
            <SearchForm />
            {/* Acciones */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                  <CountUp
                    from={0}
                    to={3}
                    separator="."
                    direction="up"
                    duration={1}
                  />
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <ButtonOptionsUser pet={currentPet} />
              <span className="hidden font-medium md:inline-block">
                {currentPet.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </HeaderHider>
  );
}
