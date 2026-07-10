import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditForm from "@/components/dashboard/edit-form";
import { auth } from "@clerk/nextjs/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPage({
  params,
}: Props) {
  const { userId } = await auth();

  if (!userId) {
    notFound();
  }

  const { id } = await params;

  const link = await prisma.link.findUnique({
    where: {
      id,
    },
  });

  if (!link) {
    notFound();
  }

  // Prevent editing other users' links
  if (link.clerkUserId !== userId) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-2xl px-4 py-10">
      <div className="rounded-xl border p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Edit Link
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update your URL, custom alias or expiration date.
        </p>

        <div className="mt-8">
          <EditForm
            id={link.id}
            defaultValue={link.originalUrl}
            defaultAlias={link.shortCode}
            defaultExpiresAt={
              link.expiresAt
                ? new Date(link.expiresAt)
                    .toISOString()
                    .slice(0, 16)
                : ""
            }
          />
        </div>
      </div>
    </main>
  );
}