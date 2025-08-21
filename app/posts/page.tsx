"use client";

import PostCard from "@/app/posts/components/post-card";
import { useState } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import useSWR from "swr";
import useDebounce from "@/hooks/useDebounce";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

const PostsPage = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce

    const { data, error, isLoading } = useSWR<Post[]>(
        searchTerm.length > 0 ? // if search term is not empty
            debouncedSearchTerm ? // if debounced search term is not empty
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?userId=${debouncedSearchTerm}` // fetch with debounced search term
                : `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts` // fetch with no search term
            : `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`, // (UX improvement) fetch with no search term, so that when going from a length > 0 to a length = 0 the request is immediate
        fetcher);

    if (error) return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="font-bold mb-2">
                Oops! An error occurred while fetching the posts...
            </p>
            <p className="mb-2">
                {error}
            </p>
            <Link href="/" className="underline tracking-tighter" title="Go back to /">
                Take me to &apos; / &apos;
            </Link>
        </div>
    );

    const renderGridContent = () => {
        if (isLoading) {
            return Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} className="h-[300px] max-w-screen-sm rounded-bl-none rounded-tr-none rounded-tl-[3rem] rounded-br-[3rem]" />
            ));
        }

        if (data && data.length > 0) {
            return data.map((post: Post) => (
                <PostCard key={post.id} post={post} />
            ));
        }

        return (
            <div className="col-span-3 flex flex-col items-center justify-center">
                <p className="font-bold mb-2">
                    No posts have been found.
                </p>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto px-8 lg:px-16 my-16">
            <input
                type="text"
                placeholder="Search by userId"
                className="col-span-2 lg:col-span-3 px-6 p-4 rounded-full bg-tech-blue mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {renderGridContent()}
        </div>
    );
}

export default PostsPage;