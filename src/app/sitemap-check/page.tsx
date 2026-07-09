import runAllSitemapValidation from "@/lib/testRunner";

export default async function SitemapCheckPage() {
  const results = runAllSitemapValidation();

  return (
    <div className="p-8 max-w-5xl mx-auto font-mono bg-slate-900 text-slate-100 min-h-screen">
      <h1 className="text-2xl font-black mb-6 text-white border-b border-slate-700 pb-4">
        Sitemap ?k= 동적 키워드 전수 검수 결과
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-slate-800 rounded">
          <div className="text-sm text-slate-400">Total Scanned</div>
          <div className="text-3xl font-bold text-blue-400">{results.total}</div>
        </div>
        <div className="p-4 bg-slate-800 rounded">
          <div className="text-sm text-slate-400">Passed</div>
          <div className="text-3xl font-bold text-green-400">{results.passed}</div>
        </div>
        <div className="p-4 bg-slate-800 rounded">
          <div className="text-sm text-slate-400">Failed</div>
          <div className="text-3xl font-bold text-red-400">{results.failed}</div>
        </div>
      </div>

      <div className="bg-slate-950 p-6 rounded border border-slate-800 overflow-y-auto max-h-[500px]">
        <h2 className="text-lg font-bold mb-4 text-slate-300">검수 세부 로그</h2>
        {results.failed === 0 ? (
          <div className="text-green-400 font-bold">✓ PASS: 모든 동적 키워드 및 연락처 매핑 검수가 성공적으로 통과되었습니다.</div>
        ) : (
          <div className="space-y-2">
            <div className="text-red-400 font-bold mb-2">✗ 검수 실패 항목이 발견되었습니다. 코드를 재점검해 주세요.</div>
            {results.failLogs.map((log, idx) => (
              <div key={idx} className="text-red-300 text-sm whitespace-pre-wrap">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
