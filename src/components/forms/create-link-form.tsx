"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { linkSchema, LinkFormData } from "@/lib/validations/links";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function CreateLinkForm() {
  const [loading, setLoading] = useState(false);
  const [shortLink, setShortLink] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),
  });

  async function onSubmit(data: LinkFormData) {
    try {
      setLoading(true);

      const res = await fetch("/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Something went wrong");

        return;
      }

      setShortLink(`${window.location.origin}/${result.shortCode}`);

      toast.success("Short URL Created Successfully");

      reset();
    } catch {
      toast.error("Failed to create short link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-3xl gap-3"
      >
        <Input
          type="url"
          placeholder="Paste your long URL..."
          {...register("originalUrl")}
        />

        {errors.originalUrl && (
          <p className="text-sm text-red-500">{errors.originalUrl.message}</p>
        )}

        <Input
          placeholder="Custom Alias (optional)"
          {...register("customAlias")}
        />

        {errors.customAlias && (
          <p className="text-sm text-red-500">{errors.customAlias.message}</p>
        )}
        
        <div className="w-full">
          <Input type="datetime-local" {...register("expiresAt")} />

          {errors.expiresAt && (
            <p className="text-sm text-red-500 mt-1">
              {errors.expiresAt.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Shorten URL"}
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
