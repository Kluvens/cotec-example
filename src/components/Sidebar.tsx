import React from 'react';
import HistoryItem from './HistoryItem';
import { CollapseIcon, NewChatIcon } from './icons/Icons';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const chatHistory = {
    today: [
      'Interact Next js with the backend',
      'This is second for today',
      'This is third for today',
    ],
    yesterday: [
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
    ],
  };

  return (
    <div className="h-full w-full">
      <div className="flex h-full min-h-0 pt-3 flex-col">
        <div className="relative h-full w-full flex-1 items-start border-white/20">
          <nav className="flex h-full w-full flex-col px-3 pb-3.5">
            <div className="flex justify-between flex h-14 items-center">
              <span className="" data-state="closed">
                <button
                  className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary"
                  onClick={toggleSidebar}
                >
                  <CollapseIcon />
                </button>
              </span>
              <span className="" data-state="closed">
                <button className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary">
                  <NewChatIcon />
                </button>
              </span>
            </div>

            <div className="flex-col flex-1 -mr-2 pr-2">
              <div></div>

              {/* Chat History */}
              <div className="flex flex-col gap-2 pb-2 text-md mt-5">
                <div>
                  {/* Chat History Today */}
                  <div className="relative mt-5">
                    <div className="flex h-9 items-center">
                      <h3 className="pb-2 pt-3 px-2 text-sm font-semibold token-text-secondary">
                        Today
                      </h3>
                    </div>
                    <ol className="token-text-primary">
                      {chatHistory.today.map((message, index) => (
                        <HistoryItem key={index} message={message} />
                      ))}
                    </ol>
                  </div>

                  {/* Chat History Yesterday */}
                  <div className="relative mt-5">
                    <div>
                      <span className="flex h-9 items-center">
                        <h3 className="pb-2 pt-3 px-2 text-sm font-semibold token-text-secondary">
                          Yesterday
                        </h3>
                      </span>
                    </div>
                    <ol className="token-text-primary">
                      {chatHistory.yesterday.map((message, index) => (
                        <HistoryItem key={index} message={message} />
                      ))}
                    </ol>
                  </div>

                  {/* Placeholder for Previous 7 Days */}
                  <div></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
