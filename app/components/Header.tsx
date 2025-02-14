'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Bell, MessageCircle, Search, PawPrint as Paw } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { pets } from '../data/pets';

export function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const currentPet = pets[0];

    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded-full">
                            <Paw className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold">PetSocial</span>
                    </Link>

                    {/* Buscador */}
                    <div className="hidden md:flex items-center max-w-sm flex-1 mx-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                            <Input
                                type="search"
                                placeholder="Buscar..."
                                className="w-full pl-9"
                                value={searchQuery}
                                onChange={(e: any) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium flex items-center justify-center text-destructive-foreground">
                                3
                            </span>
                        </Button>

                        <Button variant="ghost" size="icon">
                            <MessageCircle className="h-5 w-5" />
                        </Button>

                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <Image
                                    src         = {currentPet.profilePicture}
                                    alt         = {currentPet.name}
                                    width       = {32}
                                    height      = {32}
                                    className   = "rounded-full object-cover"
                                />
                            </Avatar>

                            <span className="hidden md:inline-block font-medium">
                                {currentPet.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}