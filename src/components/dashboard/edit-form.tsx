"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  linkSchema,
  LinkFormData,
} from "@/lib/validations/links";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = {
  id: string;
  defaultValue: string;
};

export default function EditForm({
  id,
  defaultValue,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      originalUrl: defaultValue,
    },
  });

  async function onSubmit(data: LinkFormData) {
    const res = await fetch(`/api/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
  toast.success("Link Updated");
} else {
  toast.error("Update Failed");
}
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        {...register("originalUrl")}
      />

      {errors.originalUrl && (
        <p className="text-red-500 text-sm">
          {errors.originalUrl.message}
        </p>
      )}

      <Button type="submit"
        disabled={isSubmitting}
      >
        Save Changes
      </Button>
    </form>
  );
}