import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { ShareUpIcon } from "./icons/Icons";
import { useState } from "react";

const ShareChat = () => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://ui.shadcn.com/docs/installation").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);  
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary">
          <ShareUpIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-3xl">
        <DialogHeader>
          <DialogTitle className="py-4">Share public link to chat</DialogTitle>
          <Separator />
          <DialogDescription className="py-4 text-lg" >
            Your name, custom instructions, and any messages you add after sharing stay private.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              className="border border-gray-300 rounded-full px-6 py-3 pr-20"
            />
          </div>
          <Button type="submit" size="sm" onClick={copyToClipboard} className="flex items-center justify-center text-md absolute right-8 px-3 rounded-full">
            { copied ? "Copied!" : "Copy" }
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareChat;
