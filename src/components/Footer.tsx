export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center border-t border-gray-200 pt-8 mt-8 text-gray-500 text-sm">
          <p className="font-bold text-gray-900 mb-2">모두종합관리</p>
          <p>© {new Date().getFullYear()} 모두종합관리. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
