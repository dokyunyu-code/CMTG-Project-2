export default async function handler(req, res) {
  const { symbol = 'CMTG', quarter = 'Q4-2025' } = req.query || {};
  const summaryKo = [
    `${symbol} ${quarter} earnings call 핵심 요약`,
    `- 회사는 CECL 확대와 문제 자산 정리를 최우선 과제로 제시했습니다.`,
    `- HPS term loan을 통해 단기 만기 부담 일부를 장기로 이동시켰습니다.`,
    `- 향후 초점은 회수 속도, 추가 충당금 가능성, 유동성 유지입니다.`
  ].join('\n');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ symbol, quarter, summaryKo });
}
