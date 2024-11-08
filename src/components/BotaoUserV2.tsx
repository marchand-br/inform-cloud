import { useState } from "react";
import { User } from "phosphor-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

  
export default function BotaoUserV2() {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline">
                            <User size={32} weight='bold' />
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px] text-popover-foreground">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </>
        )
      }
    
    return (
        <>
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button variant="outline">
                        <User size={32} weight='bold' />
                    </Button>
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Edit profile</DrawerTitle>
                        <DrawerDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DrawerDescription>
                    </DrawerHeader>

                    <p>alguma coisa aqui</p>

                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        <Toaster />
        </>
    )
}