"use client";

import PostCard from "@/components/ui/post-card";
import { useEffect, useState } from "react";

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

    if (loading) return <div>Loading...</div>;
    if (errorMessage) return <div>Error: {errorMessage}</div>;
    return (
        <div className="flex flex-col items-center justify-center gap-y-4 max-w-screen-lg mx-auto my-16">
            {data && data.map((post: Post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsPage;