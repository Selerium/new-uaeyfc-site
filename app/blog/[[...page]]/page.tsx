import BlogPosts from "@/components/blogposts/BlogPosts";
import { supabase } from "@/supabase/client";

export default async function BlogHome(params: {
    page?: number
}) {
    return (
        <div className="flex justify-center items-start">
            <BlogPosts all={true} page={params.page} />
        </div>
    )
}