"use client";

import QRCode from "react-qr-code";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { useRef } from "react";
import { toPng } from "html-to-image";

import { Button } from "@/components/ui/button";

// type Props = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   shortUrl: string;
// };

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shortUrl: string;
  shortCode: string;
};

export default function QRDialog({
    open,
    onOpenChange,
    shortUrl,
    shortCode,
}: Props) {
    const qrRef = useRef<HTMLDivElement>(null);
    async function downloadQR() {
  if (!qrRef.current) return;

  const dataUrl = await toPng(qrRef.current, {
    cacheBust: true,
    pixelRatio: 3,
  });

  const link = document.createElement("a");

//   link.download = "shortlink-qr by meheraz.png";
  link.download = `${shortCode} by meheraz.png`;

  link.href = dataUrl;

  link.click();
}
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            QR Code
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6">

          <div
  ref={qrRef}
  className="bg-white rounded-xl p-6"
>
  <QRCode
    value={shortUrl}
    size={220}
  />
</div>

          <p className="text-sm text-muted-foreground break-all text-center">
            {shortUrl}
          </p>

        </div>
      <Button
  onClick={downloadQR}
  className="w-full"
>
  Download PNG
</Button>
      </DialogContent>
    </Dialog>
  );
}