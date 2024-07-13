import React, { memo, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import LoadingMessage from './LoadingMessage';
import { ChatGptIcon, MessageCopyIcon, MessageTickIcon } from './icons/Icons';
import markdownToHtml from '../lib/markdownToHtml';
import { Response } from '@/types';
interface ModelMessageProps {
  response: Response;
  onToggleMarkBad: () => void;
  regenerate: () => void;
}

const ModelMessage: React.FC<ModelMessageProps> = ({ response, onToggleMarkBad, regenerate }) => {
  const [copied, setCopied] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    async function convertMarkdown() {
      const htmlContent = await markdownToHtml(response.response);
      setContent(htmlContent);
    }
    convertMarkdown();
  }, []);
  const playAudio = async () => {
    const audio = new Audio(response.audioUrl);
      audio.play();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response.response!).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleRegenerateClick = () => {
    regenerate();
  }

  if (response.response === null) {
    return <LoadingMessage />;
  }

  return (
    <div className="group/conversation-turn w-full token-text-primary" dir="auto" data-testid="conversation-turn-3" data-scroll-anchor="false">
      <div className="py-5 px-3 text-base md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
        <div className="mx-auto flex flex-1 gap-3 text-base gap-4 md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <div className="gizmo-bot-avatar flex h-6 w-6 items-center justify-center overflow-hidden rounded-full h-8 w-8">
              <div className="relative p-1 rounded-sm flex items-center justify-center bg-token-main-surface-primary text-token-text-primary h-8 w-8">
                <ChatGptIcon />
              </div>
            </div>
          </div>
          <div className="relative flex w-full min-w-0 flex-col agent-turn">
            <div className="flex-col gap-1 md:gap-3">
              <div className="flex flex-grow flex-col max-w-full">
                <div data-message-author-role="assistant" data-message-id="567f11bc-63fd-4db4-b3d7-ab608d1777da" dir="auto" className="min-h-[20px] text-message flex flex-col items-start whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 w-full items-end overflow-x-auto gap-2">
                  <div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                    <div className="markdown prose w-full break-words dark:prose-invert light">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {response.response}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute mt-1 flex gap-3 hidden group-hover/conversation-turn:flex z-10">
                <div className="items-center justify-start rounded-xl p-1 z-10 -mt-1 bg-token-main-surface-primary md:absolute md:border md:border-token-border-light">
                  <div className="flex items-center">
                    <span className="" data-state="closed">
                      <button className="rounded-lg token-text-secondary hover:token-surface-secondary" onClick={playAudio}>
                        <span className="flex h-[30px] w-[30px] items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md-heavy">
                              <path fill="currentColor" fillRule="evenodd" d="M11 4.91a.5.5 0 0 0-.838-.369L6.676 7.737A1 1 0 0 1 6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 1 .676.263l3.486 3.196A.5.5 0 0 0 11 19.09zM8.81 3.067C10.415 1.597 13 2.735 13 4.91v14.18c0 2.175-2.586 3.313-4.19 1.843L5.612 18H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.611zm11.507 3.29a1 1 0 0 1 1.355.401A10.96 10.96 0 0 1 23 12c0 1.85-.458 3.597-1.268 5.13a1 1 0 1 1-1.768-.934A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.085-4.287 1 1 0 0 1 .402-1.356M15.799 7.9a1 1 0 0 1 1.4.2 6.48 6.48 0 0 1 1.3 3.9c0 1.313-.39 2.537-1.06 3.56a1 1 0 0 1-1.673-1.096A4.47 4.47 0 0 0 16.5 12a4.47 4.47 0 0 0-.9-2.7 1 1 0 0 1 .2-1.4" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </button>
                    </span>
                    <span className="" data-state="closed">
                      <button className="rounded-lg token-text-secondary hover:token-surface-secondary" onClick={copyToClipboard}>
                        <span className="flex h-[30px] w-[30px] items-center justify-center">
                          {copied ? (
                            <MessageTickIcon />
                          ) : (
                            <MessageCopyIcon />
                          )}
                        </span>
                      </button>
                    </span>
                    <span className="" data-state="closed">
                      <button className="rounded-lg token-text-secondary hover:token-surface-secondary" onClick={handleRegenerateClick}>
                        <span className="flex h-[30px] w-[30px] items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md-heavy">
                            <path fill="currentColor" d="M3.07 10.876C3.623 6.436 7.41 3 12 3a9.15 9.15 0 0 1 6.012 2.254V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.957A7.15 7.15 0 0 0 12 5a7 7 0 0 0-6.946 6.124 1 1 0 1 1-1.984-.248m16.992 1.132a1 1 0 0 1 .868 1.116C20.377 17.564 16.59 21 12 21a9.15 9.15 0 0 1-6-2.244V20a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.043A7.15 7.15 0 0 0 12 19a7 7 0 0 0 6.946-6.124 1 1 0 0 1 1.116-.868"></path>
                          </svg>
                        </span>
                      </button>
                    </span>
                    <span className="" data-state="closed">
                      <button className="rounded-lg token-text-secondary hover:token-surface-secondary" onClick={onToggleMarkBad}>
                        <span className="flex h-[30px] w-[30px] items-center justify-center">
                          {response.isResponseBad ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md-heavy">
                              <path fill="currentColor" d="M11.408 21.496a.99.99 0 0 1-1.06.485c-1.91-.384-3.073-2.342-2.5-4.212L8.697 15H6.986c-2.627 0-4.534-2.507-3.843-5.052l1.358-5A3.986 3.986 0 0 1 8.344 2h5.689a1.996 1.996 0 0 1 1.988 2v11h-.338a1 1 0 0 0-.865.504zM18.012 15A2.994 2.994 0 0 0 21 12V5c0-1.657-1.338-3-2.988-3h-.533c.34.588.533 1.271.533 2z"></path>
                          </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md-heavy">
                              <path fill="currentColor" fillRule="evenodd" d="M11.873 21.496a1 1 0 0 1-.992.496l-.454-.056A4 4 0 0 1 7.1 16.79L7.65 15h-.718c-2.637 0-4.553-2.508-3.859-5.052l1.364-5A4 4 0 0 1 8.296 2h9.709a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2c-.26 0-.5.14-.628.364zM14.005 4h-5.71a2 2 0 0 0-1.929 1.474l-1.363 5A2 2 0 0 0 6.933 13h2.072a1 1 0 0 1 .955 1.294l-.949 3.084a2 2 0 0 0 1.462 2.537l3.167-5.543a2.72 2.72 0 0 1 1.364-1.182V5a1 1 0 0 0-1-1m3 9V5c0-.35-.06-.687-.171-1h1.17a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clipRule="evenodd"></path>
                            </svg>
                          )}
                        </span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ModelMessage);
