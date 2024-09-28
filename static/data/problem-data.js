const problemData = {
  객관식: {
    주제: ["영어", "한글", "지문변경_영어", "지문변경_한글"],
    제목: ["영어", "한글", "지문변경_영어", "지문변경_한글"],
    밑줄: [
      "주제문_영어",
      "함축적 의미_영어",
      "지문변경_주제문_영어",
      "지문변경_함축적 의미_영어",
    ],
    빈칸: [
      "주제문 빈칸(주어 제외)_영어",
      "주제문 관련된 문장(주어 제외)_영어",
      "주제문 속 핵심단어_영어(원문과 동일한 단어)",
      "주제문 속 핵심단어_영어(동의어 보기)",
      "주제문 관련 문장의 핵심단어_영어(원문과 동일한 단어)",
      "주제문 관련 문장의 핵심단어_영어(동의어 보기)",
      "접속부사 빈칸(2곳 이상)_영어",
      "접속부사 빈칸(2곳 이상)_영어_동의어",
    ],
    요지: ["영어", "한글"],
    목적: ["영어"],
    주장: ["영어", "한글"],
    지칭추론: ["지칭하는 대명사(명사) 밑줄(5개)_보기"],
    "무관한 문장": [
      "흐름상 내용과 무관한 문장 삽입_보기",
      "지문변경_흐름상 내용과 무관한 문장 삽입_보기",
    ],
    순서: [
      "‘지문 도입부분 제공’ + ‘(A),(B),(C) 단락 순서’_보기(A-B-C형태)",
      "지문변경_‘지문 도입부분 제공’ + ‘(A),(B),(C) 단락 순서’_보기(A-B-C형태)",
    ],
    삽입: ["‘지문에 들어갈 문장 제공’ + ‘지문’_보기"],
    "내용 불일치": ["한글", "영어", "영어[복수정답: 알맞은 것 '모두' 고르기]"],
    낱말: [
      "단어(밑줄 5개, 반의어 고르기)_보기",
      "지문변경_단어(밑줄 5개, 반의어 고르기)_보기",
      "단어(양자택일 동의어,반의어 / 밑줄 A,B,C 3개)_보기",
      "지문변경_단어(양자택일 동의어,반의어 / 밑줄 A,B,C 3개)_보기",
    ],
    요약: ["요약문(빈칸 A,B 2곳)_보기"],
    "내용추론(의미추론)": ["지문_영어보기"],
    어법: [
      "지문(어법 밑줄 5개, 틀린것 고르기)",
      "",
      "지문(문장 밑줄 5곳)_보기[틀린 문장 고르기]",
      "지문(단어 밑줄 5곳)_보기[어법상 틀린 갯수]",
      "지문(문장 밑줄 5곳)_보기[어법상 틀린 문장 갯수]",
    ],
    영영풀이: ["지문(단어 밑줄 5곳)_영어보기[영영사전 뜻풀이]"],
  },
  단답형: {
    빈칸: [
      "(지문 내) 반복되는 핵심단어 빈칸(공통단어 1개)",
      "(지문 내) 단어 빈칸(3곳)",
    ],
    요약: ["지문 + 한 문장 요약 빈칸(2곳)"],
    어법: ["(지문 내) 단어 밑줄(5곳) + 어법 틀린 곳(2곳) 찾아서 고치기"],
    "낱말+어법 혼합": ["(지문 내) 단어 밑줄 (양자택일 / 3곳)"],
  },
  서술형: {
    문장완성: [
      "(지문 내) 한 문장 한글 제공 + unscramble 문제 [조건 있음] [보기는 동사원형 제공]",
      "(지문 내) 한 문장 빈칸 + unscramble 문제 [보기의 단어 변형 없음]",
      "(지문 내) 한 문장 한글 제공 + unscramble 문제 [조건 있음] [보기는 동사원형 제공]",
      "(지문 내) 한 문장 빈칸 + unscramble 문제 [보기의 단어 변형 없음]",
    ],
    어법: ["(지문 내) 밑줄 없음 + 어법 틀린 곳(1곳) 찾아서 고치기"],
  },
};
