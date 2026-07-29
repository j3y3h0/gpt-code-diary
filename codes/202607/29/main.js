// main.js
// 프로그램의 주 진입점입니다.
// 샘플 텍스트에서 키워드를 추출하는 기능을 실행합니다.

const sampleTexts = require('./data');
const { extractKeywords } = require('./nlpUtils');

console.log("=== AI 기반 키워드 추출 프로젝트 시작 ===");
console.log("각 문장에서 주요 키워드를 추출합니다.");
console.log("-------------------------------------------
");

sampleTexts.forEach((text, index) => {
    console.log(`[${index + 1}] 원본 텍스트: ${text}`);
    const keywords = extractKeywords(text, 3); // 각 문장에서 상위 3개 키워드 추출
    console.log(`    추출된 키워드: ${keywords.join(', ')}
`);
});

console.log("-------------------------------------------");
console.log("=== 키워드 추출 프로젝트 완료 ===");
