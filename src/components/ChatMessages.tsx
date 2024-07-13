import React, { useState, useRef, useEffect } from 'react';
import UserMessage from './UserMessage';
import ModelMessage from './ModelMessage';
import AvatarDropDown from './AvatarDropDown';
import { Chat } from '@/types';
import { NewChatIcon, CollapseIcon  } from './icons/Icons';
import ShareChat from './ShareChat';
import { motion } from "framer-motion";
import ModelSelection from './ModelSelection';

interface ChatMessagesProps {
  chats: Chat[];
  updateMessage: (id: string, newText: string) => void;
  toggleMarkBad: (id: string) => void;
  regenerateResponse: (id: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ chats, updateMessage, toggleMarkBad, regenerateResponse, isSidebarOpen, toggleSidebar }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats.length]);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden h-full w-full">
      <div className="flex flex-col text-sm md:pb-9">
        {/* Model Selection */}
        <div className="sticky bg-white top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold token-surface-primary">
          <div className="flex items-center gap-2 overflow-hidden gap-0">
            {!isSidebarOpen && (
              <motion.div className="flex items-center" layout>
                <button className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary" onClick={toggleSidebar}>
                  <CollapseIcon />
                </button>
                <div role='button' tabIndex={0} className="flex items-center justify-center h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary">
                  <NewChatIcon />
                </div>
              </motion.div>
            )}
            
            <ModelSelection />
          </div>
          <div className="flex gap-2 pr-1">
            {/* Share link */}
            <ShareChat />
            {/* Profile Avatar */}
            <AvatarDropDown />
          </div>
        </div>

        {chats.map((chat) => {
          return (
            <div key={chat.id}>
              <UserMessage message={chat.message} onUpdate={(newText) => updateMessage(chat.id, newText)} />
              <ModelMessage response={chat.response} onToggleMarkBad={() => toggleMarkBad(chat.id)} regenerate={() => regenerateResponse(chat.id)} />
            </div>
          )
        })}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
