import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
     
      <Spinner size="lg" color="success" labelColor="success" label="Loading data..." />
      
      
      <p className="text-green-600 font-bold animate-pulse">
        Please wait, connecting to QurbaniHat...
      </p>
    </div>
  );
}