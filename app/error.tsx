'use client'

import Link from "next/link"

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="font-bold mb-2">
                Oops! An unexpected error occurred...
            </p>
            <Link href="/" className="underline tracking-tighter" title="Go back to /">
                Take me to &apos; / &apos;
            </Link>
        </div>
    )
}