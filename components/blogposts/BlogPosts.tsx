import { supabase } from "@/supabase/client";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPosts(props: { all: boolean, page?: number }) {

    let { data: blogPosts } = await supabase.from('posts').select('title, brief, image_url, slug').range(10 * ((props.page ?? 1) - 1), props.all ? 9 : 2);

    blogPosts = [
        {
            brief: 'yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa ',
            image_url: '/test1.png',
            slug: '',
            title: 'yappa yappa yappa '
        },
        {
            brief: 'yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa ',
            image_url: '/test1.png',
            slug: '',
            title: 'yappa yappa yappa '
        },
        {
            brief: 'yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa yappa ',
            image_url: '/test1.png',
            slug: '',
            title: 'yappa yappa yappa '
        },
    ]

    return ((props.all == true || (blogPosts && blogPosts?.length > 0)) &&
        <section
            id="blog-recent"
            className="w-full h-fit min-h-dvh flex flex-col gap-10 items-center bg-neutral-100 px-8 lg:px-16 py-16 border-y border-neutral-200"
        >
            <h1 className="text-4xl text-black font-semibold text-center">{props.all ? '' : 'RECENT'} BLOG POSTS</h1>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                {blogPosts?.map((post, idx) =>
                    <div key={idx} className="flex lg:flex-row flex-col w-full lg:w-4/5 rounded-lg overflow-hidden border border-neutral-200 bg-white">
                        <div className="relative aspect-video lg:aspect-auto w-full lg:w-2/5">
                            <Image src={post.image_url} alt='' width={0} height={0} className="object-cover" fill />
                        </div>
                        <div className="w-full lg:w-3/5 p-4 flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-black">{post.title}</h2>
                            <p className="text-black">{post.brief}</p>
                            <Link className="button text-center bg-black hover:bg-white" href={`/${post.slug}`}>READ MORE</Link>
                        </div>
                    </div>
                )}
                {blogPosts?.length == 0 &&
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <p className="font-medium text-black text-center">No posts to show at the moment!</p>
                        <Link href='/' className="button bg-black hover:bg-white">RETURN HOME</Link>
                    </div>
                }
            </div>
            {!props.all && <Link href='/blog' className="button bg-black hover:bg-white">VIEW ALL</Link>}
        </section>
    );
}