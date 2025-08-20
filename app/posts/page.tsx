"use client";

import PostCard from "@/app/posts/components/post-card";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./components/loading-skeleton";
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

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
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
    }, []);

    if (loading) return <LoadingSkeleton />;
    if (errorMessage) return <div>Error: {errorMessage}</div>;
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto px-8 lg:px-16 my-16">
            {data && data.map((post: Post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsPage;