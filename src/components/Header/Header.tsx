import { pets } from "@/placeholder/pets";

import { HeaderActions } from "./HeaderActions";
import { HeaderHider } from "./HeaderHider";
import { Logo } from "./Logo";
import { SearchForm } from "./SearchForm";
import { UserOptionsPopover } from "./UserOptionsPopover";

export function Header() {
  const currentPet = pets[0];

  return (
    <HeaderHider className="backdrop-blur-sm sticky top-0 z-50 w-full transition-all">
      <header className="border-b bg-white shadow-md shadow-purple-100 backdrop-blur supports-[backdrop-filter]:bg-background dark:bg-[#10061d] dark:shadow-none">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <SearchForm />
          <div className="flex items-center gap-2">
            <HeaderActions />
            <UserOptionsPopover currentPet={currentPet} />
          </div>
        </div>
      </header>
    </HeaderHider>
  );
}
