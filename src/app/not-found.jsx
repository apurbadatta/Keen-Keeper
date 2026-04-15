import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest ">
          404
        </h1>

        {/* Message */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Whoops! Lost in Space?
          </h2>
          <p className="mt-4 text-gray-500">
            The page your looking for does not exist or has been moved.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/home"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
