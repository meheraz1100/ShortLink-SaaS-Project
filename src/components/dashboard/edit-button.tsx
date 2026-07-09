"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type Props = {
  id: string;
};

export default function EditButton({ id }: Props) {
  return (
    <Link href={`/dashboard/edit/${id}`}>
      <Button
        variant="outline"
        size="icon"
      >
        <Pencil className="h-4 w-4" />
      </Button>
    </Link>
  );
}