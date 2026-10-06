# SWAP Final Screen Guide

This document records the current SWAP-specific screen conventions used by the FINAL Figma screens.

Figma remains the source of truth for the actual layout and component structure. These rules are screen-level conventions for the SWAP flow; they do not create new global Tokens unless the same value is also defined in `DESIGN.md` / `tokens.json`.

## Scope

- AI comparison source: `01~15 / AI INITIAL`
- User-reviewed result: `01~15 / FINAL`
- Keep AI INITIAL unchanged for comparison.
- Use `REF / SWAP / 01~15` only as reference material, not as a design-system API.
- FINAL screens use the revision-only `Top App Bar / FINAL 72` component so the AI INITIAL frames remain linked to the original Top App Bar.

## FINAL screen inventory

1. 01 / 교환할 포카 선택
2. 02 / 원하는 포카 선택
3. 03 / 교환 조건 설정
4. 04 / 스왑 등록 완료
5. 05 / 매칭 대기
6. 06 / 매칭 결과 목록
7. 07 / 매칭 결과 상세
8. 08 / 추가 포카 제안 / 조건 수정
9. 09 / 교환 제안 확인 / Bottom Sheet
10. 10 / 교환 제안 대기
11. 11 / 채팅 / 교환 조율
12. 12 / 교환 방식 선택
13. 13 / 배송 준비
14. 14 / 송장 등록
15. 15 / 거래 진행 상세

## Navigation

### Top App Bar
- FINAL screens use `Top App Bar / FINAL 72`.
- Width: 360px.
- Height: 72px.
- Variants: `Layout = BackTitle | Title`.
- 04 / 스왑 등록 완료 is a completion state and intentionally has no Top App Bar.

### Bottom Navigation
Bottom Navigation is used only on:
- 01 / 교환할 포카 선택
- 02 / 원하는 포카 선택

Reason:
- 01~02 are top-level browsing / selection steps.
- 03~15 are a focused transaction flow. Global navigation is intentionally removed so the primary task, back navigation, modal action, chat composer, or transaction CTA remains dominant.
- 09 is a modal Bottom Sheet.
- 11 uses the bottom area for the chat composer.

## Layout conventions

Use the existing 360px mobile frame and 4-column grid.

Current FINAL spacing conventions:
- Top App Bar → first content: 24px when there is no directly attached local navigation.
- Section → section: 24px.
- Section title → content: 12px.
- Label → field/content: 12px.
- Media → primary text: approximately 12px.
- Related inner content: 4 / 8 / 12 / 16px according to hierarchy.
- Last content → primary CTA: 24px.
- Primary CTA → bottom: 24px.

These are SWAP FINAL screen conventions, not new global spacing Tokens.

## Typography conventions

Typeface: Pretendard.

Current FINAL hierarchy:
- Top App Bar title: 18/24 SemiBold.
- Status Hero title: 20/28 Bold.
- Section title: 18/24 SemiBold.
- Card / option title: 14/20 SemiBold.
- Body: 14/20 Regular.
- Supporting text: 13/18 Regular.
- Meta / role label: 12/16 Regular.
- Key value: 16/24 SemiBold.
- Button label: use the approved Button component.
- Small notice body may use 11/16 when required by the current screen.

These values document the current SWAP FINAL screens. They are not automatically promoted to global typography Tokens.

## Photocard naming

Use:
- `EVERSHINE`
- `SUN SEEKER`
- `MASTER : PIECE`

Do not append product-version parentheses such as:
- `(특전)`
- `(포토북)`
- `(일반반)`

UI qualifiers such as `(선택)` and `직거래 (만남)` remain valid.

## Flow data

### Base proposal: 01~07
- My photocard: CRAVITY 형준 / EVERSHINE.
- Desired / matched photocard: CRAVITY 원진 / SUN SEEKER.
- Exchange: 1:1.
- Additional photocard: none.
- Additional cost: none.
- Memo: none.

### Revised proposal: 08~10
- Additional photocard: CRAVITY 민희 / MASTER : PIECE, one card.
- Exchange: 1:2.
- Additional cost: none.
- Memo: `추가 포카와 함께 교환하고 싶어요!`.

### Delivery: 11~15
- Negotiated method: 준등기.
- 12: 준등기 selected.
- 13: 준등기 shown read-only.
- 14: 우체국 (준등기) + tracking/registration number input.
- 15: 준등기 / 배송 중.

## Selection treatment

- Selected Product Cards do not use a forced full-card outline when it visually collides with media/text.
- Selection Check Badge is the primary selected-state cue in the current FINAL screens.
- Choice Chip, Checklist Item, and Selection Option Card keep their existing Boolean properties.

## Semantic SWAP icons

New revision assets:
- `Icon/SWAP/Mail` — general mail / mail-related delivery.
- `Icon/SWAP/MapPin` — in-person meeting / location.
- `Icon/SWAP/Store` — convenience-store parcel.
- `Icon/SWAP/Note` — memo.
- `Icon/SWAP/Calendar` — registration date / date.
- `Icon/SWAP/Wallet` — additional cost.
- `Icon/SWAP/Photocard` — additional photocard.
- `Icon/SWAP/Receipt` — tracking / registration number.

Icon rules:
- 24×24px asset frame.
- 1.5px rounded stroke for the new SWAP content icons.
- Existing Hero Check and Hourglass visuals remain unchanged.
- Existing navigation icons are not redrawn only to match this SWAP icon rule.

## Known implementation constraints

### Match Score Indicator
- `Score` is a Text property.
- Progress geometry is not currently exposed as a public Component Property.
- A score-label override does not automatically update the visual bar/ring length.
- Always visually verify the rendered progress after changing a score.

### Revision-only Top App Bar
- `Top App Bar / FINAL 72` exists to preserve the original AI INITIAL comparison.
- Do not silently replace the original Top App Bar in AI INITIAL frames.

## Source-of-truth order

For SWAP UI work, read:
1. `index.md`
2. `DESIGN.md`
3. Required component contract in `docs/Components.contract.md`
4. This file, `docs/SWAP.md`
5. Current Figma FINAL screen when exact visual behavior is required
