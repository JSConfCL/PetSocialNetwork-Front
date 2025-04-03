import { petsPost } from '@/placeholder/pets-post';
import { MessageSquare, Search } from 'lucide-react';
import React from 'react';

export default function Chat() {
  return (
    <div className="flex h-screen bg-transparent">
      <div className="w-96  shadow-lg">
        {/* Header */}
        <div className="p-4 border-b">
          <h1 className="text-2xl font-semibold text-gray-800">Chats</h1>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Contacts List */}
        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          {petsPost.map((post) => (
            <div
              key={post.id}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors"
            >
              <img
                src={post.imageUrl}
                alt={post.petName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="font-semibold text-gray-800">{post.petName}</h2>
                  
                </div>
                <p className="text-sm text-gray-600 mt-1">{post.content}</p>
              </div>
            
            </div>
          ))}
        </div>
      </div>

      {/* Empty Chat State */}
      <div className="flex-1 bg-transparent flex items-center justify-center">
        <div className="text-center">
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Select a chat to start messaging</h2>
          <p className="text-gray-500 mt-2">Choose from your existing conversations</p>
        </div>
      </div>
    </div>
  );
};

