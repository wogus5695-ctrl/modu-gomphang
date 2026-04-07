export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <span className="text-2xl font-black text-blue-600 mb-6 block">RainGuard (레인가드)</span>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              RainGuard는 아파트 및 주거 시설의 빗물누수 문제를 완벽하게 해결하는 창틀코킹 및 누수 보수 전문 브랜드입니다. 정밀 점검과 전문 실리콘 코킹 공법으로 안전한 주거 환경을 약속합니다.
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
            © {new Date().getFullYear()} RainGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
