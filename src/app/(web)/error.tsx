'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto py-48 text-center justify-center">
        <h2 className="font-heading py-10 text-red-800 mb-10 pb-10">
          Something went wrong!
        </h2>
        <button onClick={() => reset()} className="btn-primary">
          Try again
        </button>
    </div>
  );
}
