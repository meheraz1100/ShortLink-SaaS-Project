import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditForm from "@/components/dashboard/edit-form";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPage({
  params,
}: Props) {
  const { id } = await params;

  const link = await prisma.link.findUnique({
    where: {
      id,
    },
  });

  if (!link) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-xl py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Link
      </h1>

      <EditForm
        id={link.id}
        defaultValue={link.originalUrl}
      />
    </div>
  );
}