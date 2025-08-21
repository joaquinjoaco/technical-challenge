"use client";

import PostCard from "@/app/posts/components/post-card";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsPage = () => {

    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");


    // Get all posts on initial render and on search.
    // No debounce.
    useEffect(() => {
        const fetchPosts = async () => {
            console.log("fetching posts on initial render");
            try {
                setLoading(true);
                const response = search ?
                    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?userId=${search}`)
                    : await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);

                if (!response.ok) {
                    throw new Error('Response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setErrorMessage(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [search]);

    if (errorMessage) return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="font-bold mb-2">
                Oops! An error occurred while fetching the posts...
            </p>
            <p className="mb-2">
                {errorMessage}
            </p>
            <Link href="/" className="underline tracking-tighter" title="Go back to /">
                Take me to &apos; / &apos;
            </Link>
        </div>
    );

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto px-8 lg:px-16 my-16">
            <input
                type="text"
                placeholder="Search by user"
                className="col-span-2 lg:col-span-3 px-6 p-4 rounded-full bg-[#2F6CBD]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} className="h-[300px] max-w-screen-sm rounded-bl-none rounded-tr-none rounded-tl-[3rem] rounded-br-[3rem]" />
                ))
            ) : (
                data.length > 0 ? (
                    data.map((post: Post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                ) : (
                    <div className="col-span-3 flex flex-col items-center justify-center">
                        <p className="font-bold mb-2">
                            No posts have been found.
                        </p>
                    </div>
                )
            )}
        </div>
    );
}

export default PostsPage;