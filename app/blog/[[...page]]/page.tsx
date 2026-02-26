import BlogPosts from "@/components/blogposts/BlogPosts";
import { supabase } from "@/supabase/client";

export default async function BlogHome({
    params,
  }: {
    params: Promise<{ page: string }>
  }) {
    const { page } = await params;

    return (
        <div className="flex justify-center items-start">
            <BlogPosts all={true} page={page ? Number(page) : 1} />
        </div>
    )
}