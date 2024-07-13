import { useState, ChangeEvent, useRef, useEffect } from "react";
import { Chat } from "@/types";
import { FileUploadIcon } from "./icons/Icons";

interface ChatInputProps {
  addChat: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ addChat }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      if (scrollHeight <= 200) {
        textareaRef.current.style.height = `${scrollHeight}px`;
        textareaRef.current.style.overflowY = 'hidden';
      } else {
        textareaRef.current.style.height = '200px';
        textareaRef.current.style.overflowY = 'scroll';
      }
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      console.log('Selected files:', files);
      // Process the files as needed
    }
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      addChat(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:pt-0 md:border-transparent md:w-[calc(100%-.5rem)]">
      <div className="px-3 text-base md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
        <div className="mx-auto flex flex-1 gap-3 text-base md:max-2-3xl lg:max-w[40rem] xl:max-w-[48rem]">
          <form className="w-full" onSubmit={handleFormSubmit}>
            <div className="relative flex h-full max-w-full flex-1 flex-col">
              <div className="flex w-full items-center">
                <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4]">
                  <div className="flex items-end">
                    {/* Upload File */}
                    <div className="flex flex-col">
                      <input ref={fileInputRef} onChange={handleFileChange} multiple type="file" tabIndex={-1} className="hidden" style={{ display: 'none' }} />
                      <button onClick={handleButtonClick} className="flex items-center justify-center token-text-primary h-8 w-8 dark:text-white rounded-full focus-visible:outline-black dark:focus-visible:outline-white mb-1 ml-2" aria-disabled="false">
                        <FileUploadIcon />
                      </button>
                    </div>
                    {/* Text Input */}
                    <div className="flex p-2 min-w-0 flex-1 flex-col">
                      <textarea
                        ref={textareaRef}
                        tabIndex={0}
                        dir="auto"
                        rows={1}
                        placeholder="Message ChatGPT"
                        className="resize-none bg-transparent token-text-primary focus:outline-none"
                        value={message}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                    {/* Send Button */}
                    <button onClick={handleSendMessage} className="mb-1 mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary" disabled={!message.trim()}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl">
                        <path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="relative px-2 py-2 text-center text-xs token-text-secondary">
        <span>ChatGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
}

export default ChatInput;
