import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatHome from '../components/ChatHome';
import { motion } from 'framer-motion';
import ChatInput from '@/components/ChatInput';

const Home: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: '12d', sender: 'user', text: 'According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or ‘embodied artificial intelligence’ (AI) – is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.' },
    { id: '12e', sender: 'other', text: 'According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or ‘embodied artificial intelligence’ (AI) – is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.' },
    { id: 'gasf', sender: 'user', text: 'Hello' },
    { id: '12g', sender: 'other', text: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello' }
  ]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const addMessage = (text: string) => {
    setMessages([...messages, { id: '12n', sender: 'user', text }]);
  };

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
      <div className="flex flex-col flex-1">
        <ChatHome />
        {/* <ChatInput addMessage={addMessage} /> */}
      </div>
    </div>
  );
};

export default Home;
