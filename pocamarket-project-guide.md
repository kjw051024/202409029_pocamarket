# PocaMarket Swap Project

## Project Overview
PocaMarket is a photocard marketplace service. This project expands the existing service with a new **Photocard Swap** feature.

The goal is to let users exchange photocards through a clear matching process while keeping the existing PocaMarket service structure and visual language.

## Core Feature
**Photocard Swap**

Users can select a photocard they own, choose a photocard they want, set exchange conditions, receive matching results, compare values, verify the card condition, and send a swap offer.

## Main User Flow
1. Enter Collection Book
2. Select an owned photocard
3. List the photocard for swap
4. Select a wanted photocard
5. Set swap conditions
6. Complete swap registration
7. Start automatic matching
8. Review matching results
9. Compare photocard values
10. Suggest an additional photocard or adjust conditions when the value difference is large
11. Check card condition and video verification
12. Send a swap offer
13. Wait for the other user's response
14. If accepted, continue in PocaTalk
15. If rejected, view another match or return to the waiting list

## Main Screens
- Collection Book
- Owned Photocard Detail
- List for Swap
- Wanted Photocard Selection
- Swap Condition Setup
- Swap Registration Complete
- Automatic Matching
- Matching Result
- Value Comparison
- Condition Verification
- Swap Offer
- Offer Accepted
- Offer Rejected
- PocaTalk

## Design Direction
- Keep each screen focused on one primary task.
- Reduce unnecessary information and visual clutter.
- Make the current swap status easy to understand.
- Clearly distinguish owned, wanted, and matched photocards.
- Present value differences neutrally and clearly.
- Make verification information visible before an offer is sent.
- Reuse existing PocaMarket components and patterns whenever possible.
- Create new components only when the swap flow requires them.

## Figma and ChatGPT Rules
- Do not modify unrelated existing components.
- Do not add features outside the defined swap flow without a clear reason.
- Keep naming consistent across Figma, JSON, and Markdown files.
- Reuse existing design rules before creating new ones.
- Do not invent design-token values that have not been defined.
- Keep all project documentation in English.

## Author
Kim Jiwon  
202409029
