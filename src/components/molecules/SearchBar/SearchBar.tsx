import { Search } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactElement } from 'react';

import { Input } from "@/components";

export const SearchBar = (props: ComponentPropsWithoutRef<'div'>): ReactElement => {
  const { className, ...otherProps } = props;
  
  return (
    <div className={`${className} mx-4 hidden max-w-sm flex-1 items-center md:flex`} {...otherProps}>
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Buscar..." className="w-full pl-9" />
      </div>
    </div>
  );
}

export default SearchBar;
