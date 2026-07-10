"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  linkSchema,
  LinkFormData,
} from "@/lib/validations/links";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

type Props = {
  id: string;
  defaultValue: string;
  defaultAlias?: string;
  defaultExpiresAt?: string;
};

export default function EditForm({
  id,
  defaultValue,
  defaultAlias,
  defaultExpiresAt,
}: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),

    defaultValues: {
      originalUrl: defaultValue,
      customAlias: defaultAlias,
      expiresAt: defaultExpiresAt,
    },
  });

  async function onSubmit(
    data: LinkFormData
  ) {
    try {
      const res = await fetch(
        `/api/links/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(
          result.message ??
            "Update Failed"
        );
        return;
      }

      toast.success(
        "Link Updated Successfully"
      );

      router.push("/dashboard");
      router.refresh();
    } catch {
      toast.error(
        "Something went wrong."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Original URL
        </label>

        <Input
          {...register(
            "originalUrl"
          )}
        />

        {errors.originalUrl && (
          <p className="mt-1 text-sm text-red-500">
            {
              errors.originalUrl
                .message
            }
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Custom Alias
        </label>

        <Input
          placeholder="Optional"
          {...register(
            "customAlias"
          )}
        />

        {errors.customAlias && (
          <p className="mt-1 text-sm text-red-500">
            {
              errors.customAlias
                .message
            }
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Expiration Date
        </label>

        <Input
          type="datetime-local"
          {...register(
            "expiresAt"
          )}
        />

        {errors.expiresAt && (
          <p className="mt-1 text-sm text-red-500">
            {
              errors.expiresAt
                .message
            }
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? "Saving..."
          : "Save Changes"}
      </Button>
    </form>
  );
}