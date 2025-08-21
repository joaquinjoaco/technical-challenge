import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto px-8 lg:px-16 my-16">
            {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} className="h-[300px] max-w-screen-sm rounded-bl-none rounded-tr-none rounded-tl-[3rem] rounded-br-[3rem]" />
            ))}
        </div>
    );
}

export default LoadingSkeleton;