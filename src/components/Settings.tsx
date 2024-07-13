import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  SettingsIcon,
  GeneralIcon,
  PersonalizationIcon,
  SpeechIcon,
  DataControlsIcon,
  BuilderProfileIcon,
  ConnectedIcon,
  SecurityIcon,
} from "./icons/Icons";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from './ui/separator';

const Settings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2"
          onSelect={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-2 w-full token-text-primary">
            <div className='token-text-secondary'>
              <SettingsIcon />
            </div>
            Settings
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="flex flex-col rounded-3xl p-0 min-w-[750px] min-h-[500px] gap-0">
        <DialogHeader className='flex-grow-0 px-8 pt-8 pb-6 justify-center'>
          <div className='flex justify-between items-center'>
            <DialogTitle className="text-xl font-semibold leading-6 token-text-primary h-full">
              Settings
            </DialogTitle>
            <DialogClose asChild>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent hover:token-surface-secondary focus-visible:outline-none dark:hover:bg-token-main-surface-tertiary sm:mt-0">
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
                    d="M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </DialogClose>
          </div>
        </DialogHeader>
        <Separator />
        <Tabs defaultValue="general" orientation="vertical" className="flex-grow flex flex-row">
          <TabsList className="flex flex-col justify-start w-auto h-auto p-4">
            <TabsTrigger value="general" className="flex w-full items-center justify-start gap-2 p-2">
              <GeneralIcon />
              <div className="text-left">General</div>
            </TabsTrigger>
            <TabsTrigger value="personalization" className="flex w-full items-center justify-start gap-2 p-2">
              <PersonalizationIcon />
              <div className="text-left">Personalization</div>
            </TabsTrigger>
            <TabsTrigger value="speech" className="flex w-full items-center justify-start gap-2 p-2">
              <SpeechIcon />
              <div className="text-left">Speech</div>
            </TabsTrigger>
            <TabsTrigger value="data-controls" className="flex w-full items-center justify-start gap-2 p-2">
              <DataControlsIcon />
              <div className="text-left">Data controls</div>
            </TabsTrigger>
            <TabsTrigger value="builder-profile" className="flex w-full items-center justify-start gap-2 p-2">
              <BuilderProfileIcon />
              <div className="text-left">Builder profile</div>
            </TabsTrigger>
            <TabsTrigger value="connected-apps" className="flex w-full items-center justify-start gap-2 p-2">
              <ConnectedIcon />
              <div className="text-left">Connected apps</div>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex w-full items-center justify-start gap-2 p-2">
              <SecurityIcon />
              <div className="text-left">Security</div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="flex-grow p-4 mt-0">
            <div className='w-full overflow-y-auto'>
              <div className='flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0'>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Theme</div>
                    <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
                      <span>System</span>
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                          <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Always show code when using data analyst</div>
                    <Switch />
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Language</div>
                    <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
                      <span>Auto-detect</span>
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                          <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Archived chats</div>
                    <Button variant="secondary" className="rounded-full">
                      <div className="flex items-center justify-center">Manage</div>
                    </Button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Archive all chats</div>
                    <Button variant="secondary" className="rounded-full">
                      <div className="flex items-center justify-center">Archive all</div>
                    </Button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Delete all chats</div>
                    <Button variant="destructive" className='rounded-full'>
                      <div className="flex items-center justify-center">Delete all</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="personalization" className="flex-grow p-4 mt-0">
            <div className='w-full overflow-y-auto'>
              <div className='flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0'>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Theme</div>
                    <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
                      <span>System</span>
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                          <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Always show code when using data analyst</div>
                    <Switch />
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Language</div>
                    <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
                      <span>Auto-detect</span>
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                          <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Archived chats</div>
                    <Button variant="secondary" className="rounded-full">
                      <div className="flex items-center justify-center">Manage</div>
                    </Button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Archive all chats</div>
                    <Button variant="secondary" className="rounded-full">
                      <div className="flex items-center justify-center">Archive all</div>
                    </Button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3">
                  <div className="flex items-center justify-between">
                    <div>Delete all chats</div>
                    <Button variant="destructive" className='rounded-full'>
                      <div className="flex items-center justify-center">Delete all</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="speech" className="flex-grow p-4 mt-0">
            <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
              <span>System</span>
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                  <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
          </TabsContent>
          
          <TabsContent value="data-controls" className="flex-grow p-4 mt-0">
            Data
          </TabsContent>
          
          <TabsContent value="builder-profile" className="flex-grow p-4 mt-0">
            Builder
          </TabsContent>
          
          <TabsContent value="connected-apps" className="flex-grow p-4 mt-0">
            Apps
          </TabsContent>
          
          <TabsContent value="security" className="flex-grow p-4 mt-0">
            Security
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
