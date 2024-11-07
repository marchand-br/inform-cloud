import { ReactNode } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

interface Props {
    title: string;
    description: string;
    titleConfirm?: string;
    titleCancel?: string;
    handleConfirm(): void;
    children: ReactNode;
}

export default function ShowDialog({
    title,
    description = "",
    titleConfirm = "Confirma",
    titleCancel = "Cancela",
    handleConfirm,
    children
}: Props) {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{ title }</AlertDialogTitle>
                    <AlertDialogDescription>{ description }</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{ titleCancel }</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>{ titleConfirm }</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}