"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type LinkResponse = {
  id: string;
  originalUrl: string;
  shortCode: string;
};

export default function CreateLinkForm() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [shortLink, setShortLink] = useState("");
    
    // async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    //   e.preventDefault();
    
    //   console.log("Button Clicked");
    // }
  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!url) return;

    try {
      setLoading(true);

      const res = await fetch("/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalUrl: url,
        }),
      });

      const data: LinkResponse = await res.json();

      setShortLink(`${window.location.origin}/${data.shortCode}`);
      setUrl("");
    } catch (error) {
      console.error(error);
      alert("Failed to create short link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-3xl gap-3"
      >
        <Input
          type="url"
          placeholder="Paste your long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        
        <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Shorten URL"}
        </Button>
      </form>

      {shortLink && (
        <div className="mt-6 rounded-lg border bg-green-50 p-4">
          <p className="font-medium">✅ Short URL Created</p>

          <a
            href={shortLink}
            target="_blank"
            className="text-blue-600 underline"
          >
            {shortLink}
          </a>
        </div>
      )}
    </div>
  );
}