"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteLink } from "@/actions/link-actions";
import { toast } from "sonner";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  async function handleDelete() {
    const ok = confirm("Delete this link?");

    if (!ok) return;

    const res = await fetch(`/api/links/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      toast.error("Delete Failed");
    } else {
      toast.success("Link Deleted");
}

    await deleteLink(id);
  }

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleDelete}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}