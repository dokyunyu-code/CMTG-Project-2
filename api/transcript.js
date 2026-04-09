export default async function handler(req, res) {
  const { symbol = 'CMTG', quarter = 'Q4-2025' } = req.query || {};
  const summaryKo = [
    `${symbol} ${quarter} earnings call 핵심 요약`,
    `- 경영진은 CECL 확대와 문제 자산 정리를 최우선 과제로 제시했습니다.`,
    `- 신규 secured term loan은 유동성 완충 역할을 하지만 비용 측면에서는 방어적 성격이 강합니다.`,
    `- 향후 관전 포인트는 추가 충당금 가능성, watchlist 자산 해결 속도, 배당/자본 정책 정상화 여부입니다.`
  ].join('\n');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ symbol, quarter, summaryKo });
}
