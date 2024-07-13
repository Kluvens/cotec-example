import { useRouter } from 'next/router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShortCutsIcon, ShareRightIcon, CopyIcon } from './icons/Icons';
import Shortcuts from './question/Shortcuts';
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const QuestionButton = () => {
  const { toast } = useToast()

  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="hidden md:fixed group bottom-3 end-3 z-10 gap-1 bottom-2 end-2 md:flex lg:bottom-3 lg:end-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary" id="radix-:r3:" aria-haspopup="menu" aria-expanded="false" data-state="closed">?</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 rounded-3xl mr-4">
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' onClick={(e) => {
            e.preventDefault();
            toast({
              description: (
                <div className="mt-1 flex-shrink-0 flex-grow-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="icon-sm"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.076-4.068a1 1 0 0 1 .242 1.393l-4.75 6.75a1 1 0 0 1-1.558.098l-2.5-2.75a1 1 0 0 1 1.48-1.346l1.66 1.827 4.032-5.73a1 1 0 0 1 1.394-.242"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-2">Copied your User ID to clipboard</span>
                </div>
              ),
            })
          }}>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <CopyIcon />
            </div>
            email@example.com
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' onClick={() => handleNavigate('/qa')}>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Help & FAQ
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' onClick={() => handleNavigate('/release')}>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Release notes
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center cursor-pointer hover:by-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2' onClick={() => handleNavigate('/policies')}>
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Terms & policies
          </DropdownMenuItem>
          <Shortcuts />
        </DropdownMenuContent>
      </DropdownMenu>
      <Toaster />
    </div>
  )
}

export default QuestionButton;
