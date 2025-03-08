import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id);

  return (
    <div className="min-h-screen pt-6 px-6 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Blog Makaleleriniz</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Blog Oluştur
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
