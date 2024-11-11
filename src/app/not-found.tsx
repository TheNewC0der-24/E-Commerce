import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col text-center justify-center items-center h-screen px-8">
            <h1 className="text-9xl">404</h1>
            <h1 className="text-3xl mt-4 mb-8">Page Not Found</h1>
            <p>Oops! the page you looking for does not exist</p>

            <Link
                href="/"
                type="button"
                className="my-8 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Back to Home
            </Link>
        </div>
    );
}