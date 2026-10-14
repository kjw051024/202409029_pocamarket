# PocaMarket SWAP — AI 수정본 디자인 기록

> 기준일: 2026-10-14
>
> Figma: [SWAP / AI 수정본 / 1차 디테일 수정](https://www.figma.com/design/uD3XVQDpvmdP0gABzUGm0H?node-id=879-2730)
>
> **범위:** `01~15 / AI 수정본`의 Figma 화면 설계 및 디테일 수정 기록. GitHub 구현 코드나 글로벌 디자인 시스템 규칙이 아니다.

## 1. 버전과 문서 우선순위

| Figma 영역 | 용도 | 수정 기준 |
| --- | --- | --- |
| `01~15 / AI INITIAL` | 최초 AI 결과물/비교 원본 | 보존 |
| `01~15 / FINAL` | 사용자 검수 및 수정본/비교 원본 | 보존; 기존 [SWAP.md](SWAP.md) 적용 |
| `01~15 / AI 수정본` | 이후 피드백과 최신 디테일을 적용한 작업본 | **이 문서**와 실제 Figma가 기준 |
| `REF / SWAP / 01~15` | 레퍼런스 | 읽기 전용 |
| `SWAP / AI 수정본 / Components` | AI 수정본 한정 재사용 컴포넌트 | 기존 글로벌 컴포넌트와 구분 |

기존 Main Component, Component Set, Variant, Variable, Token 및 SWAP 외 기존 화면은 이 작업을 이유로 변경하지 않는다. 실제 Figma 레이어 속성이 이 문서와 다르면 Figma의 현재 상태를 확인하고 차이를 별도로 기록한다.

## 2. 최신 거래 데이터 및 명명 규칙

확정한 사용자 시나리오:

| 역할 | 멤버 | 요청한 앨범/활동 표기 |
| --- | --- | --- |
| 내가 보내는 기본 포카 | **CRAVITY 세림** | `sonorous / LOUDER` |
| 내가 받는 포카 | **CRAVITY 형준** | `sonorous / LOUDER` |
| 내가 추가로 보내는 포카 | **CRAVITY 성민** | `sonorous / LOUDER` |

- **01~07:** 세림 1장 ↔ 형준 1장, 기본 **1:1**, 추가 포카 없음.
- **08~10:** 세림 + 성민 **2장** ↔ 형준 **1장**, 추가 비용 없음, 메모 `추가 포카와 함께 교환하고 싶어요!`.
- **11~15:** 앞 단계에서 수정한 거래 관계를 이어받아 배송/거래를 진행한다. 선택된 배송 방식은 **준등기**.
- "1:2"처럼 보내는 쪽과 받는 쪽이 불분명한 비율 표기보다 **`내 2장 ↔ 상대 1장`**을 우선한다.
- 등록 후 조건 변경 이전 화면을 새 1:2 거래처럼 일괄 수정하지 않는다.

### 현재 Figma와 요청 기준의 차이 — 미완료

2026-10-14 캡처 기준으로 AI 수정본의 주요 카드에는 `SONOROUS`가 보이며, 사용자가 요청한 최종 표기 `sonorous / LOUDER`와 아직 정확히 같지 않다. 01·02의 일부 *비선택 목록 카드*에는 이전 앨범명 `EVERSHINE`, `MASTER : PIECE`가 남아 있다. 이 부분을 **반영 완료로 표시하지 않는다**. 향후 시각 수정 시 실제 문구, 글자 길이, 카드 높이, 텍스트 Overflow를 함께 검수한다.

### 포카 이미지 매핑

- 세림/형준/성민 각 **하나의 확인된 실물 포카 앞면 이미지**를 결정하면, 역할이 같은 모든 화면에서 동일한 이미지를 재사용한다.
- 01·02 목록의 다른 후보 이미지는 개별 후보 데이터와 일치하게 관리한다.
- 현재 Figma 캡처에서는 포카 Media가 대부분 **회색 Placeholder**로 남아 있다. 멤버별 실제 포카 이미지가 삽입됐다고 주장하지 않는다.
- 이미지 출처, 활동·멤버 식별, 사용 권한을 확인한 뒤 Instance Swap으로 적용한다. 콘셉트 사진을 확인되지 않은 '실물 포카'라고 표시하지 않는다.

## 3. AI 수정본 화면 규격

- 모바일 화면 **너비 360px**, 4-column Stretch grid, Margin **20px**, 기존 Gutter **20px**.
- 상단 `Top App Bar / FINAL 72`: 360×72px. **04**는 헤더 없음; **05·06**은 탭을 헤더에 직접 연결; **09**는 Bottom Sheet, **11**은 채팅 구조.
- 일반 화면의 Top App Bar → 첫 콘텐츠: AI 수정본에서 대체로 **32px**.
- 독립된 주요 섹션: **32px** 우선, 같은 맥락의 묶음 사이 **24px**, 제목 → 콘텐츠 **12px**, 내부 요소 **4/8/12/16px**.
- 마지막 콘텐츠 → CTA: **24~32px** 기준으로 콘텐츠와 고정 영역을 구분한다.
- 이 수치는 **AI 수정본 화면 수준의 규칙**이며 [SWAP.md](SWAP.md)의 FINAL 기준(일반 24px)이나 글로벌 [DESIGN.md](../DESIGN.md)의 Token 정의를 덮어쓰지 않는다.
- 모든 간격에 무조건 32px을 적용하지 않는다. 탭, 채팅, Bottom Sheet, 카드 내부 슬롯 등 의미 있는 예외를 유지한다.
- 글꼴: Pretendard. 기존 승인된 Button Type/Size, Semantic Variable/Token, 컴포넌트 Property를 우선 사용한다.

## 4. 01~15 화면별 수정 내역과 유지할 구조

| No. | AI 수정본에 적용된 주요 방향 | 유지/확인 사항 |
| --- | --- | --- |
| 01 교환할 포카 선택 | 보유 포카 검색창, 진한 섹션 제목, 선택 체크 이미지 우상단 | Product Card/Grid·Photocard Summary Row·Bottom Navigation |
| 02 원하는 포카 선택 | 검색 320×56, 상태 Badge와 선택 체크 분리, 카드 부모 Hug와 Badge 높이 정리 | 선택 체크는 이미지 우상단, 2열 150px 카드, Badge는 상품 상태 |
| 03 교환 조건 설정 | 세림↔형준 기본 거래, 조건·추가 포카·교환 방식·메모 입력 그룹 | Choice Chip·Text Area·주요 등록 CTA |
| 04 스왑 등록 완료 | 정보 외곽 박스 제거, 정보 행 Divider | Status Hero·Trade Pair Summary, 헤더 없음 |
| 05 매칭 대기 | 상태 안내, 등록 정보, 타임라인 분리; 조건 수정은 Outlined Medium 보조 행동 | 헤더 탭 직접 연결, 진행 상태 보존 |
| 06 매칭 결과 목록 | 매칭 카드 3개와 일치도, 중앙 정렬된 '다른 매칭 보기' 보조 행동 | 11px 앨범 메타의 기존 예외, 추가 이동 경로 미확정 |
| 07 매칭 결과 상세 | Trade Pair Summary/Compact와 Match Score 98% 그룹, 정보 행 Divider, 빈 메모 비노출 | 다른 매칭 보기 제거, 비교 정보 보존 |
| 08 추가 포카 제안/조건 수정 | 성민 추가 포카 + 2장↔1장, Mini Photocard Card, 메모/비용 입력 | Show Remove, 텍스트 잘림 방지 |
| 09 교환 제안 확인 | Bottom Sheet, 간결한 Compact 비교, Note 아이콘/행 Divider | Sheet의 정적 배경 복제는 07 수정 시 재확인 |
| 10 교환 제안 대기 | 세림+성민↔형준, 상세 정보 Divider, Note 아이콘, Outlined Medium 수정 버튼 | 타임라인 표시 날짜는 데모 데이터로 관리 |
| 11 채팅/교환 조율 | 메시지 흐름 안의 교환 방식 선택 액션, 하단 Composer | Message Row와 시간/읽음 상태, UI는 화면 전용 |
| 12 교환 방식 선택 | 5개 Inset 카드의 Typography/Auto Layout 통일, 준등기 선택 | Selected Boolean, 선택 상태에만 시각 강조 |
| 13 배송 준비 | 배송 체크리스트, 받는 사람 정보의 외곽 박스 제거·정렬 | 선택된 준등기 읽기 전용 |
| 14 송장 등록 | 입력 필드·발송 인증·안내 Status Notice | 입력값이 없으면 번호를 생성하지 않음 |
| 15 거래 진행 상세 | 세림+성민↔형준, 배송 안내 원형 트럭 아이콘, 5단계 타임라인, 배송 정보 Divider | 추가 포카 라벨은 보조 위계, 불필요한 '1:2' 큰 제목 금지 |

### 날짜/배송 데모 데이터 주의

- 05: 스왑 등록일 `2026.10.06` 표시 사례.
- 10: 제안 전송 `2026.10.07 14:30` 표시 사례.
- 15: 배송 준비 `2026.10.07`, 배송 중 `2026.10.08`, 배송 완료 `2026.10.09`, 수령 확인/거래 완료 `2026.10.10`의 **시안용 날짜 계획**. 실제 상태/완료 기록이라는 증거가 아니므로 라이브 데이터처럼 해석하지 않는다.
- 15의 등기번호는 실제 값이 확인되지 않아 `번호 미확인`으로 표시하는 사례. 14와 런타임 데이터 바인딩은 GitHub에서 아직 구현되지 않았다.
- 06 '다른 매칭 보기', 11→12 진행 등은 **UI 흐름 설계**이며, 실제 프로토타입/React 라우팅은 별도 검증 및 구현 대상이다.

## 5. AI 수정본 전용 컴포넌트 — 글로벌 Contract와 별개

Figma [AI 수정본 Components](https://www.figma.com/design/uD3XVQDpvmdP0gABzUGm0H?node-id=885-3983)에서 확인된 4개:

| Figma Node | 이름 | 확인된 기본 크기 | 사용 맥락 |
| --- | --- | --- | --- |
| `885:3984` | `SWAP / AI 수정본 / Trade Detail Row / Compact` | 288×60 | 좁은 정보 행, 특히 09·10 |
| `885:4059` | `SWAP / AI 수정본 / Match Score / 98 Percent` | 320×88 | 98% 막대 길이를 고정한 화면 전용 점수 |
| `920:4039` | `SWAP / AI 수정본 / Trade Pair Summary / Compact` | 320×156 | 07·09·10·15 포카 비교 |
| `945:4038` | `SWAP / AI 수정본 / Selection Option Card / Inset` | 320×120 | 12 교환 방식 5개, 체크 위치/텍스트 규격 |

이 컴포넌트는 Figma AI 수정본 전용이다. 기존 [Components Contract](Components.contract.md)에 정의된 원본 Main Component, Variant, Property나 기존 GitHub 코드의 새 공개 API로 오해하면 안 된다.

- `Selection Option Card / Inset`: 5개 카드 동일 제목 14/20 SemiBold, 설명 13/18 Regular 기준. 준등기 `Selected=true`, 나머지는 false.
- `Match Score / 98 Percent`: 점수 글자와 Progress 길이를 자동 연동하는 범용 계약이 아니다. 다른 값에는 그래픽 재검수 필요.
- 실제 Property 목록과 Variable 연결의 최종 기준은 해당 Figma Main Component다.

## 6. GitHub 구현 상태와 미해결 항목

**현재 GitHub 구현 범위:** Button 및 디자인 Token CSS 중심. Figma SWAP 15개 화면, AI 수정본 전용 컴포넌트, 프로토타입 이동, 데이터 상태, 포카 사진은 **이 문서의 설계 기록이며 구현 완료를 의미하지 않는다**.

다음 작업을 구분하여 관리한다:

- [ ] 전체 포카 레이블을 사용자 확정 표기 `sonorous / LOUDER`로 동기화하고 이전 앨범명을 제거
- [ ] 세림·형준·성민의 정확한 `sonorous` 실물 포토카드 사진 확보 및 화면별 Media 연결
- [ ] 01·02의 나머지 목록 포카 이름/앨범/이미지 후보 데이터 통일
- [ ] 10·15의 데모 날짜와 실제 데이터 전환 정책 정의
- [ ] 14→15 등기번호 값 연결 및 빈 상태 처리
- [ ] 06 재매칭, 11→12 교환 방식, 09 Bottom Sheet 등 프로토타입/코드 이동 경로 확인
- [ ] 필요 시 Figma AI 수정본 컴포넌트 Property를 별도로 Contract화 (원본 Contract를 임의 변경하지 않음)
- [ ] 15개 화면의 변경 이후 캡처 및 12 선택 카드 텍스트 잘림 재검수

## 7. 수정 전 체크

1. [index.md](../index.md) → [DESIGN.md](../DESIGN.md) → 필요한 Component Contract → [SWAP.md](SWAP.md) → **이 문서** → 실제 AI 수정본 Figma.
2. 화면의 핵심 행동, 사용하는 컴포넌트, 기존과 다른 화면 수준 예외를 확인.
3. `AI INITIAL`, `FINAL`, 레퍼런스, 기존 Main Component/Variable을 수정하지 않음.
4. 반영 완료/미완료와 Figma/코드 구현 여부를 분리하여 보고.
