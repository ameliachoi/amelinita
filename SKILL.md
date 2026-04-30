# SKILL: 30일 한국어 챌린지 TikTok 콘텐츠 생성
> @ameliachoi00 | 한국어 × 스페인어(초중급) TikTok 시리즈

---

## 📌 프로젝트 개요

- **채널**: @ameliachoi00 (TikTok)
- **콘텐츠**: 스페인어 사용자를 위한 30일 한국어 학습 숏폼 시리즈
- **언어**: 한국어 대본 + 스페인어 대본 (초중급 수준)
- **영상 길이**: 30~40초
- **산출물**: ① TikTok 대본 ② 워크북 PDF (A4 1페이지)

---

## 🗂 커리큘럼

### 🟢 Part 1: 생존 한국어 (Day 1~10)
| Day | 주제 |
|-----|------|
| 1 | 안녕하세요 / 저는 ~예요 |
| 2 | 감사합니다 / 미안해요 |
| 3 | 이거 뭐예요? |
| 4 | 어디예요? / 여기 / 저기 |
| 5 | 얼마예요? / 비싸요 / 싸요 |
| 6 | 좋아요 / 싫어요 |
| 7 | 괜찮아요 |
| 8 | 진짜요? |
| 9 | 배고파요 |
| 10 | 화장실 어디예요? |

### 🟡 Part 2: 패턴 학습 (Day 11~20)
| Day | 주제 |
|-----|------|
| 11 | 저는 ~예요 (직업) |
| 12 | 저는 ~ 좋아해요 |
| 13 | 저는 ~ 가요 |
| 14 | ~ 먹어요 |
| 15 | ~ 있어요 / 없어요 |
| 16 | 뭐 해요? |
| 17 | 누구예요? |
| 18 | 언제예요? |
| 19 | 어디 가요? |
| 20 | 같이 가요 |

### 🔵 Part 3: 한글 + 구조 (Day 21~30)
| Day | 주제 |
|-----|------|
| 21 | 한글 모음 + 자음 (전체 훑기) |
| 22 | 한글 자음 심화 |
| 23 | 받침 개념 |
| 24 | 읽기 연습 |
| 25 | SOV 구조 (나는 밥을 먹어요) |
| 26 | 과거형 (먹었어요) |
| 27 | 미래형 (갈 거예요) |
| 28 | 질문 만들기 |
| 29 | K드라마 표현 |
| 30 | 자기소개 완성 |

---

## 🗒 TikTok 캡션 포맷

영상 설명란 고정 포맷. 해시태그 없음.

```
Aprender Coreano en 30 días 🇰🇷 | Día {N}
{오늘 배운 내용 한 줄 요약 — 스페인어}
{표현 1} = {뜻} | {표현 2} = {뜻}
¡Repite conmigo en los comentarios! 댓글에 자기소개 남겨봐요 🙌
```

예시 (Day 1):
```
Aprender Coreano en 30 días 🇰🇷 | Día 1
Hoy aprendemos a saludarnos y presentarnos en coreano 👋
안녕하세요 = Hola | 저는 ___예요 = Yo soy ___
¡Repite conmigo en los comentarios! 댓글에 자기소개 남겨봐요 🙌
```

---

## 📱 TikTok 대본 구조

모든 대본은 아래 3단계 구조로 작성한다.

```
🎣 HOOK (0~5초)
- 숫자 또는 궁금증으로 시작
- 한국어 버전 / 스페인어 버전 각각 작성
- 예: "한국어로 ~하는 법, 5초면 배워요."

📖 CONTENT (5~30초)
- 핵심 표현 2개 이내
- 자막 지시 포함: [자막: 한국어 = 스페인어]
- 발음 가이드 (로마자) 포함
- 간단한 행동 지시 포함: [손 흔들기], [가리키기] 등
- 한국어 버전 / 스페인어 버전 각각 작성

🔚 OUTRO (30~40초)
- 다음 날(Day N+1) 주제 예고
- 팔로우 CTA
- 한국어 버전 / 스페인어 버전 각각 작성
```

---

## 📄 워크북 PDF 규격

### 기본 설정
- **크기**: A4 1페이지 (꽉 차게, min-height: 269mm)
- **여백**: 상하좌우 12mm
- **폰트**: `Noto Sans CJK KR` (시스템 폰트, 네트워크 불필요)
- **대표색**: 그린 (`#2e7d4f`)
- **생성 도구**: pdfkit (wkhtmltopdf 래퍼)
- **저작권 표기**: `© 2026 @ameliachoi00 · Workbook original para TikTok`

### wkhtmltopdf 옵션 (필수)
```python
options = {
    'page-size': 'A4',
    'margin-top': '12mm', 'margin-right': '12mm',
    'margin-bottom': '12mm', 'margin-left': '12mm',
    'encoding': 'UTF-8',
    'enable-local-file-access': '',
    'dpi': '150',
    'disable-smart-shrinking': '',
    'zoom': '1.0',
}
```

### 섹션 구성 및 높이 가이드
| 섹션 | 높이 | 설명 |
|------|------|------|
| Header | ~40px | h1 + subtitle |
| Info box | ~55px | objetivo + mini tip |
| 1. Expresiones clave | ~80px | 핵심 표현 2개 |
| 2. Cómo usar la estructura | ~70px | 구조 설명 |
| 3. Frases para practicar | ~120px | 연습 문장 3개 |
| 4. Tu turno | flex: 1 (min ~130px) | 빈칸 쓰기 — 나머지 공간 채움 |
| Pronunciation note | ~30px | 발음 팁 |
| Footer | ~25px | position: absolute, bottom |

### 디자인 시스템
```
Primary green:       #2e7d4f
Light green (헤더):  #e8f4ed
Border:              #ccc / #e0e0e0
Korean text:         #1a1a1a
Romanization:        #666, italic
Spanish translation: #2e7d4f, font-weight 600
Tags/labels:         #888, 8.5pt
Body text:           #2d2d2d
```

### 로마자 표기 규칙 (스페인어 화자 기준)
- ㅈ → **ch** (j 아님): 저는 → `choneun`, 진짜 → `chincha`
- eo → **eo** (발음 팁에서 "entre e y o"로 설명)
- ㄱ → **g** (모음 사이), **k** (어두/어말)
- ㅇ (초성) → 묵음 / (종성) → **ng**
- 쌍자음: ㄲ→kk, ㄸ→tt, ㅃ→pp, ㅆ→ss, ㅉ→tch
- 스페인어 이름 악센트 표기 필수: Sofía, Daniela

### HTML 구조
```html
<div class="page">
  <div class="header">...</div>
  <div class="info-box">...</div>
  <div class="section-header">1. Expresiones clave</div>
  <div class="section-content">...</div>
  <div class="section-header">2. Cómo usar la estructura</div>
  <div class="section-content">...</div>
  <div class="section-header">3. Frases para practicar</div>
  <div class="section-content">...</div>
  <div class="section-header">4. Tu turno</div>
  <div class="section-content turno-flex">...</div>  <!-- flex:1 -->
  <div class="pron-note">...</div>
  <div class="footer">...</div>  <!-- position: absolute, bottom -->
</div>
```

### 푸터 포맷
```
© 2026 @ameliachoi00 · Workbook original para TikTok    |    Day N · Página 1/1
```

### 생성 코드
```python
import pdfkit
pdfkit.from_file('/home/claude/dayN_workbook.html',
                 '/mnt/user-data/outputs/coreano_diaN.pdf', options=options)
```

---

## ⚙️ 생성 프로세스

1. 커리큘럼에서 해당 Day 주제 확인
2. TikTok 대본 작성 (한국어 + 스페인어)
3. 대본 확인 후 → 워크북 HTML 작성
4. wkhtmltopdf로 PDF 변환
5. `/mnt/user-data/outputs/` 에 저장

---

## 📁 산출물 파일명 규칙

```
대본:    Day{N}_TikTok_Script.txt
워크북:  Day{N}_Workbook.pdf
```

---

## ✅ 완료 현황

| Day | 대본 | 워크북 |
|-----|------|--------|
| 1 | ✅ | ✅ |
| 2 | ✅ | ✅ |
| 3 | ✅ | ✅ |
| 4 | ✅ | ✅ |
| 5 | ✅ | ✅ |
| 6~30 | ⬜ | ⬜ |

---

## 🎬 드라마 섀도잉 시리즈 (별도 기획)

### 영상 템플릿 (60~75초 · 수익창출 기준 1분 이상)

```
🎣 HOOK (0~5초)
→ 아래 훅 유형 중 선택

🎬 대사 소개 (5~15초)
원래 대사 + 한국어 자막
발음 천천히 읽어주기

🔄 섀도잉 파트 (15~40초)
① 천천히 한 번 — 따라해봐요
② 자연스러운 속도로 한 번 더
③ 같이 해봐요 (3초 pause)

💡 문화/문법 설명 (40~55초)
이 표현이 왜 이렇게 쓰이는지
일상에서 언제 쓰는지

🔚 OUTRO (55~75초)
다음 대사 예고 + CTA
```

### 훅 유형 5가지

```
① 충격/반전형
"한국어 1년 공부해도 이 대사 못 알아들어요.
근데 오늘 5분이면 돼요."

② 공감/대리만족형
"El arte de Sarah 보다가 이 대사에서
멈춘 사람 나만이야?"

③ 도전형
"이 대사 따라할 수 있으면
당신 한국어 중급이에요. 해봐요."

④ 비밀/정보형
"한국인들이 이 대사 들으면
바로 웃는 이유 알려줄게요."

⑤ 숫자+긴박형
"이 대사 3번만 따라하면
한국인처럼 들려요. 진짜로."
```

> 💡 추천 조합: ②공감형으로 팬심 잡고 + ⑤숫자형으로 기대감 주기

### 저작권 주의사항
- 드라마 원본 영상/음성 직접 사용 → 계정 위험
- 안전한 방식: 본인이 직접 대사 따라 말하기 / 자막+텍스트만 사용

---

## 📺 유튜브 캡션 포맷

```
🇰🇷 Aprende Coreano en 30 días | Día {N}: {tema}
{한 줄 도입 — 스페인어, 흥미 유발}

👋 Expresiones del día:
• {표현1} ({로마자}) = {뜻}
• {표현2} ({로마자}) = {뜻}

¡Practica en los comentarios {참여 유도}! {한국어 CTA} 🙌

Si quieres aprender coreano desde cero, este es tu reto: 30 días, 30 lecciones. Suscríbete para no perderte ningún día 🔔

#AprendeCoreano #Coreano #Korean #KoreanForSpanishSpeakers #LearnKorean #Coreano30Días #안녕하세요 #K드라마 #Kpop #IdiomasCoreano #CoreanoParaPrincipiantes #StudyKorean #HablaCoreano #LearningKorean #Koreano
```

예시 (Day 1):
```
🇰🇷 Aprende Coreano en 30 días | Día 1: Saludos y Presentaciones
¿Cómo te presentas en coreano? ¡Hoy aprendemos las frases más esenciales para empezar!

👋 Expresiones del día:
• 안녕하세요 (annyeonghaseyo) = Hola
• 저는 ___예요 (choneun ___yeyo) = Yo soy ___

¡Practica en los comentarios presentándote en coreano! 댓글에 자기소개 남겨봐요 🙌

Si quieres aprender coreano desde cero, este es tu reto: 30 días, 30 lecciones. Suscríbete para no perderte ningún día 🔔

#AprendeCoreano #Coreano #Korean #KoreanForSpanishSpeakers #LearnKorean #Coreano30Días #안녕하세요 #K드라마 #Kpop #IdiomasCoreano #CoreanoParaPrincipiantes #StudyKorean #HablaCoreano #LearningKorean #Koreano
```
