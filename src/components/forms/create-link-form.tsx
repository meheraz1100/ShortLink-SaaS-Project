"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { linkSchema, LinkFormData } from "@/lib/validations/links";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Loader2 } from "lucide-react";

export default function CreateLinkForm() {
  const [shortLink, setShortLink] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const {
  register,
  handleSubmit,
  reset,
  setValue,
  getValues,
  formState: {
    isSubmitting,
    errors,
  },
} = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),
  });

  async function generateAlias() {
  const url = getValues("originalUrl");

  if (!url) {
    toast.error("Please enter a URL first.");
    return;
  }

  try {
    setIsGenerating(true);

    const res = await fetch("/api/ai/alias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      toast.error(result.message);
      return;
    }

    setSuggestions(result.suggestions);
  } catch {
    toast.error("Failed to generate alias.");
  } finally {
    setIsGenerating(false);
  }
}

  async function onSubmit(data: LinkFormData) {
    try {
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

      setShortLink(
        `${process.env.NEXT_PUBLIC_APP_URL}/r/${result.shortCode}`
      );

      toast.success("Short URL Created Successfully");

      reset();
    } catch {
      toast.error("Failed to create short link.");
    }
  }

  return (
    <section className="mx-auto mt-12 w-full max-w-6xl">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors md:p-6"
      >
        <div className="grid gap-4 lg:grid-cols-4">

          {/* URL */}
          <div className="lg:col-span-2">
            <Input
              type="url"
              placeholder="Paste your long URL..."
              {...register("originalUrl")}
            />

            {errors.originalUrl && (
              <p className="mt-2 text-sm text-destructive">
                {errors.originalUrl.message}
              </p>
            )}
          </div>

          {/* Alias */}
          <div>
            <Input
              placeholder="Custom Alias"
              {...register("customAlias")}
            />
            
            <Button
  type="button"
  variant="outline"
  size="sm"
  className="mt-3 w-full"
  onClick={generateAlias}
  disabled={isGenerating}
>
  {isGenerating ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Suggesting...
    </>
  ) : (
    <>
      <Sparkles className="mr-2 h-4 w-4" />
      Suggest Alias
    </>
  )}
</Button>

{suggestions.length > 0 && (
  <div className="mt-4 flex flex-wrap gap-2">

    {suggestions.map((alias) => (
      <button
        key={alias}
        type="button"
        onClick={() =>
          setValue("customAlias", alias)
        }
        className="
          rounded-full
          border
          bg-muted
          px-4
          py-2
          text-sm
          transition
          hover:bg-primary
          hover:text-primary-foreground
        "
      >
        ✨ {alias}
      </button>
    ))}

  </div>
)}

            {errors.customAlias && (
              <p className="mt-2 text-sm text-destructive">
                {errors.customAlias.message}
              </p>
            )}
          </div>
          

          {/* Expire */}
          <div>
            <Input
              type="datetime-local"
              {...register("expiresAt")}
            />

            {errors.expiresAt && (
              <p className="mt-2 text-sm text-destructive">
                {errors.expiresAt.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full md:w-auto"
        >
          {isSubmitting
            ? "Creating..."
            : "🚀 Shorten URL"}
        </Button>
      </form>

      {shortLink && (
        <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-5 transition-colors">

          <h3 className="mb-4 text-lg font-semibold text-green-600 dark:text-green-400">
            🎉 Your Short Link is Ready!
          </h3>

          <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-colors md:flex-row md:items-center md:justify-between">

            <a
              href={shortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all font-medium text-primary hover:underline"
            >
              {shortLink}
            </a>

            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                navigator.clipboard.writeText(shortLink);
                toast.success("Copied to clipboard");
              }}
            >
              Copy Link
            </Button>

          </div>
        </div>
      )}
    </section>
  );
}