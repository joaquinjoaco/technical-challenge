import { Post } from "@/app/posts/page";
import Card from "./card";
import { FileText, Hash, User } from "lucide-react";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <Card className="w-full max-w-screen-sm rounded-bl-none rounded-tr-none rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">User {post.userId}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Hash className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Post {post.id}</span>
                </div>
            </div>

            <div className="flex items-start gap-2 mb-3">
                <FileText className="w-5 h-5 text-background mt-0.5 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-background leading-tight">{post.title}</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">{post.body}</p>
        </Card>
    );
}

export default PostCard;