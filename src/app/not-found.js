import Link from 'next/link';
import { Button } from '@heroui/react';
import { FiAlertCircle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center animate__animated animate__fadeIn">
      {/* Animated Icon Container */}
      <div className="bg-green-50 p-6 rounded-full mb-6 animate__animated animate__bounceIn">
        <FiAlertCircle className="text-6xl text-green-600" />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-black text-gray-800 mb-2 animate__animated animate__fadeInDown">
        Animal Not Found!
      </h1>

      {/* Descriptive Text */}
      <p className="text-gray-600 max-w-md mb-8 animate__animated animate__fadeInUp">
        Sorry, the page you are looking for is not available in our market or the link might be broken.
      </p>

      {/* Action Button */}
      <div className="animate__animated animate__zoomIn">
        <Link href="/">
          <Button 
            className="bg-green-600 text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}