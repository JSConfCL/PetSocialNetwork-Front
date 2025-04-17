"use client";
import { pets } from "@/placeholder/pets";
import { Suspense } from "react";

import { HeaderActions, HeaderHider, HeaderProfile, Logo, SearchBar } from "@/components";

import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const currentPet = pets[0];

  return (
    <HeaderHider className="sticky top-0 z-50 w-full backdrop-blur-sm transition-all">
      <header className="border-b bg-white shadow-md shadow-purple-100 backdrop-blur supports-[backdrop-filter]:bg-background dark:bg-[#10061d] dark:shadow-none">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />

          <SearchBar />

          <div className="flex items-center gap-2">
            <Suspense>
              <LanguageSwitcher />
            </Suspense>
            <HeaderActions />
            <HeaderProfile currentPet={currentPet} />
          </div>
        </div>
      </header>
    </HeaderHider>
  );
};

export default Header;
