import React from 'react';

interface HistoryItemProps {
  message: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ message }) => {
  return (
    <li className="relative z-[15] group">
      <div className="relative rounded-lg active:opacity-90 group-hover:bg-[#ececec]">
        <a href="#" className="flex items-center gap-2 p-2">
          <div className="relative grow overflow-hidden whitespace-nowrap">
            {message}
            <div className="absolute bottom-0 top-0 right-0 bg-gradient-to-l from-[#f9f9f9] to-transparent w-8 group-hover:from-[#ececec] group-hover:w-20 group-hover:from-[30%] rtl:left-0 rtl:bg-gradient-to-r rtl:right-auto"></div>
          </div>
        </a>
        <div className="absolute bottom-0 top-0 items-center gap-1.5 right-1 flex opacity-0 group-hover:opacity-100 transition-opacity">
          <span>
            <button className="flex items-center justify-center transition token-text-secondary hover:token-text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="icon-md"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default HistoryItem;
