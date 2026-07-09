"use client";

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
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
  id: string;
};

export default function DeleteDialog({
  id,
}: Props) {
  async function handleDelete() {
    try {
      const res = await fetch(`/api/links/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        toast.error("Delete failed");
        return;
      }

      toast.success("Link deleted");

      window.location.reload();
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
  render={
    <Button
      size="icon"
      variant="destructive"
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  }
/>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Link?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone.
            Your short URL will be removed
            permanently.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}