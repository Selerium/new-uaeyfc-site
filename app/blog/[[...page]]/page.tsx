import BlogPosts from "@/components/blogposts/BlogPosts";

export async function generateStaticParams() {
    return [{ page: ['1'] }, { page: ['2'] }, { page: ['3'] }, { page: [] },];
}

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