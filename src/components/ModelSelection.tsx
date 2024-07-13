import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModelSelectionDownArrow, ModelSelectionTick, Gpt3Icon, Gpt4Icon, Gpt4oIcon } from './icons/Icons';

const ModelSelection = () => {
  const [selectedModel, setSelectedModel] = useState('4o');

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };

  const models = [
    { name: '4o', description: 'Newest and most advanced model', icon: (<Gpt4oIcon/>) },
    { name: '4', description: 'Advanced model for complex tasks', icon: (<Gpt4Icon/>) },
    { name: '3.5', description: 'Great for everyday tasks', icon: (<Gpt3Icon/>) },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        <div className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 font-semibold hover:token-surface-secondary token-text-secondary overflow-hidden whitespace-nowrap">
          <div className="flex gap-2 token-text-secondary text-xl">
            ChatGPT
            <span className="token-text-secondary">{selectedModel}</span>
          </div>
          <ModelSelectionDownArrow />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="rounded-3xl w-96 py-2">
        <div className="flex items-center justify-between pb-0 pl-5 pr-4 pt-2">
          <DropdownMenuLabel className="text-md token-text-tertiary">
            Model
          </DropdownMenuLabel>
        </div>
        {models.map((model) => (
          <DropdownMenuItem
            key={model.name}
            className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 gap-2.5 py-3 !pr-3"
            onSelect={() => handleModelSelect(model.name)}
          >
            <div className="flex grow items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className='flex items-center token-surface-secondary rounded-full p-1.5'>
                  {model.icon}
                </div>
                <div className="flex flex-col gap-1">
                  GPT-{model.name}
                  <div className="token-text-tertiary text-sm">
                    {model.description}
                  </div>
                </div>
              </div>
              {selectedModel === model.name && <ModelSelectionTick />}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModelSelection;
