'use client';

import type { Post } from '@/interfaces/post';
import { petsPost } from '@/placeholder/pets-post';
import { MessageSquare, Search } from 'lucide-react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

import { Input } from '@/components';

export default function Chat() {

  const [ selectedChat, setSelectedChat ] = useState<Post | null>(null);
  const [ filterValue, setFilterValue ] = useState<string>('');

  const filteredChats = useMemo(() => {
    return petsPost.filter(({ petName, userName }) => {
      const parsedValue = filterValue.toLocaleLowerCase();
      const parsedPetName = petName.toLocaleLowerCase();
      const parsedUserName = userName.toLocaleLowerCase();
      return parsedPetName.includes(parsedValue) || parsedUserName.includes(parsedValue);
    });
  }, [filterValue]);

  return (
    <div className="backdrop-blur-sm overflow-hidden rounded-xl border border-purple-200 bg-transparent transition-transform duration-300 dark:border-purple-950 mx-auto w-full text-purple-950 shadow-lg shadow-purple-100 dark:bg-[#10061d]/50 dark:text-purple-300 dark:shadow-purple-950/50 flex h-[calc(100vh-180px)]">
      <div className="w-96 shadow-lg relative overflow-y-auto border-r border-purple-200 dark:border-purple-950">
        {/* Header */}
        <div className="p-4 border-b">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-purple-300 ">Chats</h1>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <div className="flex relative h-fit">
            <Input
              type="text"
              placeholder="Busca entre tus contactos..."
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="flex-grow border-purple-700 text-purple-700"
            />
            <div className="absolute top-2 right-2">
              <Search className="text-purple-700 w-5 h-5" />
              </div>
          </div>
        </div>

        {/* Contacts List */}
        <div>
          {filteredChats.map((post) => (
            <div
              key={post.id}
              className={`flex items-center p-4 hover:bg-purple-100 dark:hover:bg-purple-950/40 hover:text-purple-700 cursor-pointer border-b border-purple-200 dark:border-purple-950 transition-colors ${selectedChat?.id === post.id && 'bg-purple-100 dark:bg-purple-950/40'}`}
              onClick={() => setSelectedChat(post)}
            >
              <Image
                src={post.imageUrl}
                alt={post.petName}
                width={54}
                height={54}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="font-semibold text-purple-950 dark:text-purple-300">{post.petName}</h2>
                </div>
                <p className="text-sm text-gray-600 dark:text-purple-300 mt-1">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty Chat State */}
      { !!!selectedChat ?
        <div className="flex-1 bg-transparent flex items-center justify-center">
          <div className="text-center">
            <MessageSquare className="w-16 h-16 text-purple-700 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-purple-700">Selecciona un chat</h2>
            <p className="text-gray-500">Choose from your existing conversations</p>
          </div>
        </div>
      :
        <div>
          { selectedChat.petName }
        </div>
      }
    </div>
  );
};

