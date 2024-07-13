import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChatMessages from '../../components/ChatMessages';
import ChatInput from '../../components/ChatInput';
import QuestionButton from '@/components/QuestionButton';
import { Chat } from '@/types';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([
    { id: 'first', message: 'very nice', response: { response: 'you are right', audioUrl: '', isResponseBad: false } },
    { id: 'second', message: 'very very nice', response: { response: 'you are right', audioUrl: '', isResponseBad: false } },
    { id: 'third', message: 'very very very nice', response: { response: 'The sun dipped below the horizon, casting a golden hue across the tranquil lake. The gentle rustling of leaves and the distant call of a loon added to the serene ambiance, creating a perfect backdrop for reflection. As the sky transitioned from vibrant oranges and pinks to deeper purples and blues, the first stars began to twinkle, mirroring the shimmering water below. It was a moment of pure magic, where time seemed to stand still, allowing one to fully appreciate the beauty and calm of nature', audioUrl: '', isResponseBad: false } },
    { id: 'fourth', message: 'very very very very nice', response: { response: 'The sun dipped below the horizon, casting a golden hue across the tranquil lake. The gentle rustling of leaves and the distant call of a loon added to the serene ambiance, creating a perfect backdrop for reflection. As the sky transitioned from vibrant oranges and pinks to deeper purples and blues, the first stars began to twinkle, mirroring the shimmering water below. It was a moment of pure magic, where time seemed to stand still, allowing one to fully appreciate the beauty and calm of natures evening symphony.', audioUrl: '', isResponseBad: false } },
    { id: 'fifth', message: 'very very very very nice', response: { response: `
    ### Tables

Markdown supports tables as well:

| Syntax    | Description |
|-----------|-------------|
| Header    | Title       |
| Paragraph | Text        |

### Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax.

### Horizontal Rule
    `, audioUrl: '', isResponseBad: false } },
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const addChat = async (message: string) => {
    let newChat: Chat = {
      id: new Date().toString(),
      message,
      response: {
        response: null,
        audioUrl: '',
        isResponseBad: false,
      }
    }

    setChats([...chats, newChat]);
    try {
      await wait(5000);
      setChats([...chats, { ...newChat, response: { ...newChat.response, response: 'very very very very nice' } }]);
    } catch (error) {
      console.error(error);
    }
  }

  const updateMessage = (id: string, newMessage: string) => {
    setChats(chats.map(chat => chat.id === id ? { ...chat, message: newMessage } : chat))
  }

  const regenerateResponse = (chatId: string) => {
    const chat = chats.find(chat => chat.id === chatId);
    const updatedChats = chats.filter(chat => chat.id !== chatId);
    setChats(updatedChats);

    try {
      if (chat?.message) {
        addChat(chat?.message);
      } else {
        console.error('The chat to regenerate is not found');
      }
    } catch (error) {
      console.error('Failed to regenerate response', error);
    }
  }

  const toggleMarkBad = (id: string) => {
    setChats(chats.map(chat => chat.id === id ? { ...chat, response: { ...chat.response, isResponseBad: !chat.response.isResponseBad } } : chat))
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const containerVariants = {
    close: {
      width: "0rem",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    open: {
      width: "260px",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <div className="flex h-screen">
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "close"}
        variants={containerVariants}
        layout
        className="hidden md:flex flex-shrink-0 bg-gray-50 overflow-x-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </motion.div>
      <div className="flex flex-col flex-1 px-1 pt-1">
        <ChatMessages 
          chats={chats} 
          updateMessage={updateMessage} 
          toggleMarkBad={toggleMarkBad}
          regenerateResponse={regenerateResponse}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <ChatInput addChat={addChat} />
      </div>
      <QuestionButton />
    </div>
  );
};

export default Home;
