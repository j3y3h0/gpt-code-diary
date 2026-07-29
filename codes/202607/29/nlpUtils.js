// nlpUtils.js
// 자연어 처리(NLP) 관련 유틸리티 함수들을 모아둔 파일입니다.

/**
 * 텍스트를 단어 단위로 토큰화합니다.
 * 간단한 공백 기반 분리와 구두점 제거를 포함합니다.
 * @param {string} text - 처리할 원본 텍스트.
 * @returns {string[]} 토큰화된 단어들의 배열.
 */
function tokenize(text) {
    // 텍스트를 소문자로 변환하고, 알파벳, 숫자, 한글을 제외한 모든 문자를 공백으로 대체합니다.
    // 그 후 공백을 기준으로 분리하고 빈 문자열을 제거합니다.
    return text.toLowerCase()
               .replace(/[^a-z0-9가-힣\s]/g, ' ')
               .split(/\s+/)
               .filter(word => word.length > 0);
}

/**
 * 미리 정의된 불용어(Stop Words) 목록을 사용하여 단어 배열에서 불용어를 제거합니다.
 * 이 목록은 일반적으로 텍스트 분석에서 중요도가 낮은 단어들입니다.
 * @param {string[]} words - 토큰화된 단어들의 배열.
 * @returns {string[]} 불용어가 제거된 단어들의 배열.
 */
function removeStopWords(words) {
    // 한국어 불용어 목록 (예시). 실제 사용 시에는 더 광범위한 목록이 필요합니다.
    const stopWords = new Set([
        '은', '는', '이', '가', '을', '를', '과', '와', '도', '만',
        '입니다', '있다', '없다', '하다', '되다', '이다', '것', '수',
        '있습니다', '같은', '같은데', '등', '이런', '저런', '그럼', '그리고', '하지만',
        '대한', '위한', '통한', '따라', '같은', '처럼', '까지', '부터', '또한',
        '많은', '더', '가장', '좀', '잘', '약간', '정말', '매우', '아주',
        '이번', '지난', '다음', '각', '모든', '어떤', '몇', '어느', '다른',
        '저희', '우리', '그', '이', '저', '여기', '거기', '저기'
    ]);

    return words.filter(word => !stopWords.has(word));
}

/**
 * 텍스트에서 주요 키워드를 추출합니다.
 * 단어 빈도수를 기반으로 상위 N개의 단어를 키워드로 선정합니다.
 * @param {string} text - 키워드를 추출할 원본 텍스트.
 * @param {number} numKeywords - 추출할 키워드의 최대 개수.
 * @returns {string[]} 추출된 키워드들의 배열.
 */
function extractKeywords(text, numKeywords = 5) {
    // 1. 텍스트 토큰화
    const tokens = tokenize(text);

    // 2. 불용어 제거
    const filteredTokens = removeStopWords(tokens);

    // 3. 단어 빈도수 계산
    const wordFrequencies = filteredTokens.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    // 4. 빈도수를 기준으로 정렬하고 상위 N개 키워드 추출
    const sortedKeywords = Object.entries(wordFrequencies)
                                 .sort(([, freqA], [, freqB]) => freqB - freqA)
                                 .map(([word]) => word);

    return sortedKeywords.slice(0, numKeywords);
}

module.exports = {
    tokenize,
    removeStopWords,
    extractKeywords
};
