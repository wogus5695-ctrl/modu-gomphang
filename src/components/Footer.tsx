export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <span className="text-2xl font-black text-blue-600 mb-6 block">지움 (Zium)</span>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              지움은 고객님의 소중한 거주 공간을 건강하고 깨끗하게 되돌려드리는 곰팡이 제거 전문 서비스입니다. 다년간의 노하우와 친환경 공법으로 완벽한 시공을 약속합니다.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-900 font-bold text-lg mb-4">고객센터</p>
            <div className="space-y-2">
              <a href="tel:010-3059-5695" className="text-3xl font-black text-blue-600 hover:text-blue-700 transition-colors block">
                010-3059-5695
              </a>
              <p className="text-gray-500 text-sm">평일/주말 09:00 ~ 20:00 (연중무휴)</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs tracking-tight">
            대표: 박재현 | 사업자등록번호: 준비중 | 주소: 부천시 상동 아파트 일대
          </p>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} 지움 (Zium). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
