'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-red-400">Bir hata oluştu!</h2>
        <p className="text-gray-400 mb-6">{error.message || 'Beklenmeyen bir hata meydana geldi.'}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}

