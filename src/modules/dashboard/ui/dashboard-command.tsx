import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <div>
      <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Find a meeting or agent" />
        <CommandList>
          <CommandItem>Tests</CommandItem>
        </CommandList>
        <CommandList>
          <CommandItem>Tests2</CommandItem>
        </CommandList>
      </CommandResponsiveDialog>
    </div>
  );
};
