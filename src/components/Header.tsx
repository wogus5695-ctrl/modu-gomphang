import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-600 tracking-tight">지움 (Zium)</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm sm:text-base">
          <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">서비스 안내</Link>
          <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">시공 사례</Link>
          <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">견적 문의</Link>
        </nav>
        <a href="tel:010-3059-5695" className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white text-sm sm:text-base font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          📞 전화 문의
        </a>
      </div>
    </header>
  );
}
