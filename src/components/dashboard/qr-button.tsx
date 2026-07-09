"use client";

import { useState } from "react";
import { QrCode } from "lucide-react";

import { Button } from "@/components/ui/button";
import QRDialog from "./qr-dialog";

type Props = {
  shortCode: string;
};

export default function QRButton({
  shortCode,
}: Props) {
  const [open, setOpen] = useState(false);

  const shortUrl = `${process.env.NEXT_PUBLIC_APP_URL}/${shortCode}`;

  return (
    <>
      <Button
        size="icon"
        variant="outline"
        onClick={() => setOpen(true)}
      >
        <QrCode className="w-4 h-4" />
      </Button>

      <QRDialog
        open={open}
    onOpenChange={setOpen}
    shortUrl={shortUrl}
    shortCode={shortCode}
      />
    </>
  );
}