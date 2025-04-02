import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export function SearchForm() {
  return (
    <div className="mx-4 hidden max-w-sm flex-1 items-center md:flex">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Buscar..." className="w-full pl-9" />
      </div>
    </div>
  );
}
