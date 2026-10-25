# Updating Prices / 가격표 바꾸는 방법

The price menu on the website's **Services** page comes from a Google Sheet.
웹사이트 **Services** 페이지의 가격표는 구글 시트에서 불러옵니다.

## Edit prices / 수정하기

1. Open the **K-Beauty Website** sheet → **Prices** tab.
   **K-Beauty Website** 시트를 열고 **Prices** 탭으로 이동하세요.
2. Change, add or delete rows, then close the sheet. Saving is automatic.
   줄을 고치거나, 추가하거나, 삭제하고 닫으면 됩니다. 저장은 자동이에요.
3. The website updates in about **5 minutes**. Refresh the page to check.
   약 **5분** 뒤 사이트에 반영됩니다. 새로고침해서 확인하세요.

| Category (A) | Subtitle (B) | Item (C) | Price (D) |
|---|---|---|---|
| Cut & Style | | Men | $30+ |
| | | Women | $40+ |
| | | | |
| | | Shampoo | $5+ |
| Hair Perm | ( Shampoo + Cut + Blow Dry ) | Men | $100+ |
| | | Korean Style Heating Perm | |
| | | Design Perm | *By consultation only |
| Colour | ( Shampoo + Blow-Dry ) | Full Colour | M $90+  W $110+ |

## Rules / 규칙

- **Column A (Category)**: write the menu name (e.g. `Colour`) only on the first row of that menu. Leave it empty on the rows below. A new name starts a new box on the website.
  **A열(카테고리)**: 메뉴 이름은 그 메뉴의 첫 줄에만 쓰고, 아래 줄은 비워두세요. 새 이름을 쓰면 사이트에 새 박스가 생깁니다.
- **Column B (Subtitle)**: optional small text under the title, on the first row only.
  **B열(부제목)**: 제목 아래 작은 글씨 (선택). 첫 줄에만 쓰세요.
- **Column C (Item) / D (Price)**: service name and price. Upper/lower case doesn't matter, because names are shown in capitals.
  **C열(서비스) / D열(가격)**: 서비스 이름과 가격. 대소문자는 상관없어요 (사이트에선 대문자로 보입니다).
- **Empty row** = a gap between groups. 빈 줄 = 그룹 사이 간격.
- **Item with no price** = bold heading (e.g. `Korean Style Heating Perm`).
  **가격 없이 이름만** 쓰면 굵은 소제목이 됩니다.
- **Price starting with `*`** (e.g. `*By consultation only`) = note style, last word in gold.
  **`*`로 시작하는 가격**은 안내 문구 스타일이 되고, 마지막 단어는 금색으로 표시돼요.
- To add a service, insert a row where you want it. To remove one, delete the row. The website layout adjusts by itself.
  서비스를 추가하려면 원하는 위치에 줄을 삽입하고, 없애려면 줄을 삭제하세요. 사이트 레이아웃은 자동으로 맞춰집니다.
- Keep row 1 (`Category`, `Subtitle`, `Item`, `Price`) as it is. Don't rename the **Prices** tab or turn off "Publish to web".
  1행(제목 줄)은 지우지 마세요. **Prices** 탭 이름을 바꾸거나 "웹에 게시"를 끄지 마세요.

If the sheet can't be reached, the website shows the default menu saved in `src/constants.js` (`DEFAULT_PRICE_MENU`).
시트를 불러오지 못하면 코드에 저장된 기본 가격표가 표시됩니다.

## One-time setup (developer) / 최초 설정 (개발자)

1. Open the spreadsheet → **File → Import → Upload** → choose `docs/prices-sheet-template.csv`.
   - Import location: **Insert new sheet(s)**
   - Separator type: **Comma**
   - **Uncheck** "Convert text to numbers, dates, and formulas" (so `$30+` stays as text)
2. Rename the new tab to **Prices**.
3. **File → Share → Publish to web** → select the **Prices** tab and **Comma-separated values (.csv)** → **Publish**.
4. Copy the link and paste it into `PRICE_MENU_CSV_URL` in `src/constants.js`, then deploy once.
