export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          404
        </h2>
        <p className="text-2xl font-semibold mb-4">Sayfa Bulunamadı</p>
        <p className="text-gray-400 mb-6">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}

