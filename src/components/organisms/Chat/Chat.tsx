"use client";

import type { Post } from "@/interfaces/post";
import { petsPost } from "@/placeholder/pets-post";
import { MessageSquare, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useMemo, useState } from "react";

import { Input } from "@/components";

export const Chat = () => {
  const t = useTranslations("Chat");

  const [selectedChat, setSelectedChat] = useState<Post | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");

  const filteredChats = useMemo(() => {
    return petsPost.filter(({ petName, userName }) => {
      const parsedValue = filterValue.toLocaleLowerCase();
      const parsedPetName = petName.toLocaleLowerCase();
      const parsedUserName = userName.toLocaleLowerCase();
      return parsedPetName.includes(parsedValue) || parsedUserName.includes(parsedValue);
    });
  }, [filterValue]);

  return (
    <div className="mx-auto flex h-[calc(100vh-180px)] w-full overflow-hidden rounded-xl border border-purple-200 bg-transparent text-purple-950 shadow-lg shadow-purple-100 backdrop-blur-sm transition-transform duration-300 dark:border-purple-950 dark:bg-[#10061d]/50 dark:text-purple-300 dark:shadow-purple-950/50">
      <div className="relative w-96 overflow-y-auto border-r border-purple-200 shadow-lg dark:border-purple-950">
        {/* Header */}
        <div className="border-b p-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-purple-300">{t("title")}</h1>
        </div>

        {/* Search Bar */}
        <div className="border-b p-4">
          <div className="relative flex h-fit">
            <Input
              type="text"
              placeholder={t("searchInputPlaceholder")}
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="flex-grow border-purple-700 text-purple-700"
            />
            <div className="absolute right-2 top-2">
              <Search className="h-5 w-5 text-purple-700" />
            </div>
          </div>
        </div>

        {/* Contacts List */}
        <div>
          {filteredChats.map((post) => (
            <div
              key={post.id}
              className={`flex cursor-pointer items-center border-b border-purple-200 p-4 transition-colors hover:bg-purple-100 hover:text-purple-700 dark:border-purple-950 dark:hover:bg-purple-950/40 ${selectedChat?.id === post.id && "bg-purple-100 dark:bg-purple-950/40"}`}
              onClick={() => setSelectedChat(post)}
            >
              <Image
                src={post.imageUrl}
                alt={post.petName}
                width={54}
                height={54}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-start justify-between">
                  <h2 className="font-semibold text-purple-950 dark:text-purple-300">{post.petName}</h2>
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-purple-300">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty Chat State */}
      {!!!selectedChat ? (
        <div className="flex flex-1 items-center justify-center bg-transparent">
          <div className="text-center">
            <MessageSquare className="mx-auto mb-4 h-16 w-16 text-purple-700" />
            <h2 className="text-xl font-semibold text-purple-700">{t("selectAChat")}</h2>
            <p className="text-gray-500">{t("chooseConversation")}</p>
          </div>
        </div>
      ) : (
        <div>{selectedChat.petName}</div>
      )}
    </div>
  );
};

export default Chat;
