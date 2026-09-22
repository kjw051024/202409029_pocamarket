# DESIGN.md 초안

> 근거 상태  
> - **확정**: GitHub의 `GPT.md`, Token 또는 Component Contract에 실제 정의됨  
> - **현재 Figma Component에서 확인**: 현재 Figma Component 구조에서 확인됨  
> - **캡처에서 반복 확인**: 기존 포카마켓 참고 캡처 여러 장에서 반복 관찰됨  
> - **특정 캡처에서만 확인**: 한 화면 또는 한 사례에서만 관찰됨  
> - **확인 필요**: 현재 자료만으로 확정할 수 없음  

## 1. Design Principles

- 정의된 Token과 Component 규칙을 사용한다. [확정]
- Button은 정해진 Type·Size 조합과 Semantic Token을 사용한다. [확정]
- 정의되지 않은 Token, Variant, State를 임의로 추가하지 않는다. [확정]

## 2. Color

### 확정된 Color Token

- Atomic: `Neutral 100`, `Neutral 300`, `Neutral 900`, `Brand 500` [확정]
- Semantic: `Surface/Brand/Primary`, `Surface/Neutral/Primary`, `Surface/Neutral/Inverse` [확정]
- Semantic: `Foreground/Neutral/Primary`, `Foreground/Neutral/Inverse` [확정]
- Semantic: `Icon/Neutral/Primary`, `Icon/Neutral/Inverse`, `Border/Neutral/Primary` [확정]

### 현재 Figma Component에서 확인되는 역할

- Main Button은 `Surface/Brand/Primary`와 `Foreground/Neutral/Inverse`를 사용한다. [확정]
- Alternative Button은 `Surface/Neutral/Inverse`와 `Foreground/Neutral/Inverse`를 사용한다. [확정]
- Outlined Button은 `Surface/Neutral/Primary`, `Foreground/Neutral/Primary`, `Border/Neutral/Primary`를 사용한다. [확정]
- Toggle Icon Button에는 Neutral·Inverse 대비와 Default·Selected 상태가 존재한다. [현재 Figma Component에서 확인]

### 캡처에서 관찰되는 색상 역할

- 코랄 계열 표면은 로그인, 상품 거래, 판매·입고판매, 배송 흐름의 주요 CTA에 반복된다. [캡처에서 반복 확인]
- 밝은 Surface 위에 짙은 텍스트·아이콘, 옅은 구분선이 반복된다. [캡처에서 반복 확인]
- 캡처에서 보이는 색상을 새로운 Hex 값 또는 새 Token으로 정의하지 않는다. [확인 필요]

## 3. Typography

### 확정된 Typography

- Button Typography: Pretendard, 16px, SemiBold(600), Line-height 24px, Letter-spacing 0% [확정]

### 현재 Figma Component에서 확인되는 Typography 역할

- Button은 Label Text Property를 사용한다. [확정]
- Text Button, Navigation, Badge, Card, Chat 관련 텍스트 역할은 Figma Component로 존재한다. 단, 각 역할의 폰트·크기·행간 Token은 아직 GitHub에 정의되어 있지 않다. [현재 Figma Component에서 확인]

### 아직 확정할 수 없는 Typography

- 화면 제목, 본문, 상품명, 가격, 보조 정보, Badge, 채팅 메시지의 Typography Token [확인 필요]
- 캡처에서 보이는 글자 크기·굵기·행간의 정확한 수치 [확인 필요]

## 4. Spacing / Dimension / Radius

### 확정된 값

- Spacing: `8`, `16`, `24` [확정]
- Dimension: `24`, `44`, `48`, `56` [확정]
- Radius: `12` [확정]
- Border Width Default: `1` [확정]

### Button에서 확정된 사용

- Large Button: 높이 56, 가로 Padding 24 [확정]
- Medium Button: 높이 48, 가로 Padding 24 [확정]
- Outlined Small Button: 높이 44, 가로 Padding 16 [확정]
- 아이콘 슬롯: 24×24, 아이콘·Label 간 Gap: 8 [확정]
- 모든 Button 모서리: Radius 12 [확정]

### 현재 Figma Component에서 확인되는 구조

- Icon Button, Floating Icon Button, Toggle Icon Button은 별도 Action Component로 존재한다. [현재 Figma Component에서 확인]
- Button 외 Component의 실제 Spacing·Dimension·Radius Token 연결은 현재 자료만으로 확인할 수 없다. [확인 필요]

## 5. Actions

### Button

- Type: Main, Alternative, Outlined [확정]
- Main·Alternative: Large, Medium만 허용 [확정]
- Outlined: Large, Medium, Small 허용 [확정]
- Leading/Trailing Icon을 선택적으로 표시할 수 있다. [확정]
- Pressed·Disabled·Selected는 Button Variant로 만들지 않는다. [확정]

### Text Button

- Emphasis: Primary, Secondary가 존재한다. [현재 Figma Component에서 확인]
- Decoration: None, Underline이 존재한다. [현재 Figma Component에서 확인]
- 로그인 하단의 계정 보조 액션과 흐름 내 보조 액션에서 유사한 사용이 보인다. [특정 캡처에서만 확인]

### Icon Button

- Style: Ghost, Outlined가 존재한다. [현재 Figma Component에서 확인]
- 검색, 알림, 채팅, 설정, 뒤로가기 등의 아이콘 액션이 여러 캡처에서 보인다. [캡처에서 반복 확인]

### Floating Icon Button

- 별도 Component가 존재한다. [현재 Figma Component에서 확인]
- 현재 캡처에서 해당 Component와 명확히 일치하는 사례는 확인되지 않는다. [확인 필요]

### Toggle Icon Button

- State: Default, Selected가 존재한다. [현재 Figma Component에서 확인]
- Contrast: Neutral, Inverse가 존재한다. [현재 Figma Component에서 확인]
- 상품 카드와 상품 상세에서 하트 아이콘을 이용한 찜 상태 표현이 반복된다. [캡처에서 반복 확인]
- 일반 Button의 Selected Variant로 확장하지 않는다. [확정]

## 6. Inputs & Filters

### Search Field

- Search Field Component가 존재한다. [현재 Figma Component에서 확인]
- 둘러보기와 콜렉트북에서 검색을 시작점으로 한 상품 탐색이 반복된다. [캡처에서 반복 확인]

### Filter Chip

- Default State의 Filter Chip이 존재한다. [현재 Figma Component에서 확인]
- 둘러보기·콜렉트북에서 카테고리 또는 필터 선택과 유사한 패턴이 반복된다. [캡처에서 반복 확인]
- Selected, Disabled 등 추가 상태는 현재 자료에서 확정하지 않는다. [확인 필요]

## 7. Navigation

### Top App Bar

- Layout: BackTitle, BackTitleAction, TitleAction이 존재한다. [현재 Figma Component에서 확인]
- 상품 상세, 채팅, 빠른판매, 입고판매, 배송 선택에서 뒤로가기형 상단 바가 반복된다. [캡처에서 반복 확인]

### Bottom Navigation

- Bottom Navigation과 Bottom Navigation Item Component가 존재한다. [현재 Figma Component에서 확인]
- Bottom Navigation Item에는 Default, Selected 상태가 존재한다. [현재 Figma Component에서 확인]
- 홈, 둘러보기, 콜렉트북, 마이페이지에서 하단 내비게이션이 반복된다. [캡처에서 반복 확인]

### Tab Item

- Default, Selected 상태가 존재한다. [현재 Figma Component에서 확인]
- 콜렉트북·마이페이지의 보유 항목 구분 영역과 유사한 패턴이 보인다. [특정 캡처에서만 확인]

### Navigation Row

- Style: Outlined, Muted, Plain이 존재한다. [현재 Figma Component에서 확인]
- 마이페이지 메뉴와 배송 방식 선택에서 행 기반 선택·이동 패턴이 보인다. [캡처에서 반복 확인]

### Section Header

- Size: Large, Medium이 존재한다. [현재 Figma Component에서 확인]
- 홈의 추천 영역처럼 콘텐츠 그룹을 구분하는 제목이 보인다. [특정 캡처에서만 확인]

## 8. Content

### Shortcut Item

- Size: Regular, Compact가 존재한다. [현재 Figma Component에서 확인]
- 홈의 빠른 진입 아이콘 영역과 대응된다. [특정 캡처에서만 확인]

### Artist / Member Item

- Default, Selected 상태가 존재한다. [현재 Figma Component에서 확인]
- 둘러보기의 아티스트·멤버 선택 영역과 대응된다. [특정 캡처에서만 확인]

### Product Card / Grid

- Size: Regular, Compact가 존재한다. [현재 Figma Component에서 확인]
- 홈, 둘러보기, 콜렉트북에서 상품을 여러 개 탐색하는 그리드 패턴이 반복된다. [캡처에서 반복 확인]

### Product Card / List

- Layout: Default, QuickBuy가 존재한다. [현재 Figma Component에서 확인]
- 찜 화면에서 세로 목록형 상품 표현이 보인다. [특정 캡처에서만 확인]

### Selectable Card

- Selectable Card Component가 존재한다. [현재 Figma Component에서 확인]
- 배송·판매 흐름의 선택형 항목과 대응될 가능성이 있다. [특정 캡처에서만 확인]

### Media Placeholder

- Media Placeholder Component가 존재한다. [현재 Figma Component에서 확인]
- 실제 캡처는 포토카드 이미지를 사용하므로 Placeholder의 실제 화면 사용 조건은 확인할 수 없다. [확인 필요]

## 9. Feedback / State

### Empty State

- Empty State Component가 존재한다. [현재 Figma Component에서 확인]
- 마이페이지의 보유 포토카드 없음 상태와 대응된다. [특정 캡처에서만 확인]

### Summary Item / Summary Card

- Summary Item과 Summary Card Component가 존재한다. [현재 Figma Component에서 확인]
- 마이페이지의 구매·판매·거래 요약과 대응된다. [특정 캡처에서만 확인]

### Badge

- Tone: Brand, Neutral, Feature가 존재한다. [현재 Figma Component에서 확인]
- 빠른구매 등 상품 상태·기능 표기가 여러 캡처에서 보인다. [캡처에서 반복 확인]

### Info Tag

- Info Tag Component가 존재한다. [현재 Figma Component에서 확인]
- 상품 정보의 보조 태그와 유사한 사례가 보인다. [특정 캡처에서만 확인]

### Carousel Page Indicator

- Carousel Page Indicator Component가 존재한다. [현재 Figma Component에서 확인]
- 홈 프로모션 배너의 페이지 수 표기와 대응된다. [특정 캡처에서만 확인]

## 10. Trade / Chat

### Trade Header

- Status: InProgress, Completed가 존재한다. [현재 Figma Component에서 확인]
- 거래 채팅 상단의 거래 상품·상태 요약과 대응된다. [특정 캡처에서만 확인]

### Message Bubble / Message Row

- Direction: Sent, Received가 존재한다. [현재 Figma Component에서 확인]
- 거래 채팅에서 보낸 메시지와 받은 메시지가 구분된다. [특정 캡처에서만 확인]

### Chat Message Meta / Chat Date Divider

- Chat Message Meta와 Chat Date Divider Component가 존재한다. [현재 Figma Component에서 확인]
- 거래 채팅의 시간·날짜 정보와 대응된다. [특정 캡처에서만 확인]

## 11. Marketing / Auth

### Promotion Banner

- Promotion Banner Component가 존재한다. [현재 Figma Component에서 확인]
- 홈의 프로모션 배너와 대응된다. [특정 캡처에서만 확인]

### Social Login Button

- Provider: Naver, Kakao, X, Apple이 존재한다. [현재 Figma Component에서 확인]
- 로그인 화면의 소셜 로그인 선택지와 대응된다. [특정 캡처에서만 확인]

## 12. Observed Product Patterns

- 상품 탐색, 보유·찜 관리, 거래·판매 흐름이 서로 다른 화면 목적에 맞게 분리되어 제공된다. [캡처에서 반복 확인]
- 상품 탐색 화면에서는 검색·필터·상품 카드가 함께 사용되고, 거래·판매 흐름에서는 단계별 선택과 주요 CTA가 강조된다. [캡처에서 반복 확인]
- 홈, 둘러보기, 콜렉트북, 마이페이지에서 하단 내비게이션을 통해 주요 영역을 이동한다. [캡처에서 반복 확인]
- 상품 탐색은 검색과 카테고리·필터, 상품 카드가 함께 배치되는 방식으로 나타난다. [캡처에서 반복 확인]
- 상품은 홈·탐색·콜렉트북에서는 그리드로, 찜 화면에서는 목록으로 표현된다. [캡처에서 반복 확인]
- 하트 아이콘으로 상품의 찜 상태를 보여 준다. [캡처에서 반복 확인]
- 코랄 표면 CTA는 로그인, 거래, 판매, 입고판매, 배송 흐름에서 다음 행동을 강조한다. [캡처에서 반복 확인]
- 상세·채팅·판매·배송 흐름에서는 뒤로가기와 제목을 포함한 상단 바가 사용된다. [캡처에서 반복 확인]
- 포토카드 이미지와 아티스트·멤버 정보, 가격·거래 정보가 상품 탐색과 거래 흐름에서 반복적으로 함께 나타난다. [캡처에서 반복 확인]

## 13. Open Questions

- Button 외 Component의 Color, Typography, Spacing, Dimension, Radius, 상태 Token을 어디까지 문서화할지 결정이 필요하다. [확인 필요]
- Selectable Card와 Navigation Row가 캡처의 판매·배송 선택 항목에 각각 어떻게 대응하는지 확인이 필요하다. [확인 필요]
- 캡처의 하단 CTA가 현재 Button을 부모 영역에서 Fill로 사용한 사례인지, 별도의 화면 레이아웃 규칙이 필요한지 결정이 필요하다. [확인 필요]
