import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlanIcon, AppsIcon, CustomizeIcon, SettingsIcon, LogoutIcon } from "./icons/Icons";
import Settings from "./Settings";

const AvatarDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-10 w-10 flex items-center justify-center rounded-full focus-visible:outline-0 focus-visible:token-surface-secondary hover:token-surface-secondary">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src="https://lh3.googleusercontent.com/a/AEdFTp7GohtCTuOxye4y1c9F_BD4P6svNv7398pMSiLS=s96-c"
            loading="lazy"
            decoding="async"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 rounded-3xl mr-4">
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2" disabled>
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <PlanIcon />
          </div>
          My plan
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2" disabled>
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <AppsIcon />
          </div>
          My GPTs
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2" disabled>
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <CustomizeIcon />
          </div>
          Customize ChatGPT
        </DropdownMenuItem>
        <Settings />
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-md p-3 m-1.5 gap-2" disabled>
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <LogoutIcon />
          </div>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
