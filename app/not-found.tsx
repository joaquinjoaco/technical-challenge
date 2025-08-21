import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="font-bold mb-2">
                Oops! Could not find what you were looking for...
            </p>
            <Link href="/" className="underline tracking-tighter" title="Go back to /">
                Take me to &apos; / &apos;
            </Link>
        </div>
    )
}

export default NotFound;