"use client";
import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ErrorPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">
          This is a custom error page
        </h1>
        {/* <Link
          href="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Click Here to go Home
        </Link> */}
      </div>
    </div>
  );
}
