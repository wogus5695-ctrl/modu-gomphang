export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <span className="text-2xl font-black text-blue-600 mb-6 block">신비로 (Sinbiroo)</span>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              신비로는 아파트 및 주택의 창틀 누수 문제를 완벽하게 해결하는 창틀코킹 및 누수 보수 전문 서비스입니다. 정밀 진단과 전문 코킹 공법으로 빗물 누수를 완벽 차단해 드립니다.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-900 font-bold text-lg mb-4">고객센터</p>
            <div className="space-y-2">
              <a href="tel:010-4861-3226" className="text-3xl font-black text-blue-600 hover:text-blue-700 transition-colors block">
                010-4861-3226
              </a>
              <p className="text-gray-500 text-sm">평일/주말 09:00 ~ 20:00 (연중무휴)</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs tracking-tight">
            대표: 김재현 | 사업자등록번호: 405-15-02677
          </p>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} 신비로 (Sinbiroo). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
