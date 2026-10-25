# Updating Business Hours / 영업시간 바꾸는 방법

The hours on the website's home page come from a Google Sheet.
웹사이트 홈 화면의 영업시간은 구글 시트에서 불러옵니다.

## Edit the hours / 수정하기

1. Open the **K-Beauty Website** sheet → **Hours** tab.
   **K-Beauty Website** 시트를 열고 **Hours** 탭으로 이동하세요.
2. Change the time in column **B** and close the sheet. Saving is automatic.
   **B열**의 시간을 고치고 닫으면 됩니다. 저장은 자동이에요.
3. The website updates in about **5 minutes**. Refresh the page to check.
   약 **5분** 뒤 사이트에 반영됩니다. 새로고침해서 확인하세요.

| Day (A) | Hours (B) |
|---|---|
| Monday | 10AM – 7PM |
| Sunday | Closed |

## Rules / 주의사항

- Keep row 1 (`Day`, `Hours`) as it is. 1행(제목 줄)은 지우지 마세요.
- Column A = day, column B = hours. A열은 요일, B열은 시간입니다.
- Rows show on the website in the same order as the sheet. 시트 순서 그대로 표시됩니다.
- Empty rows are ignored. 빈 줄은 무시됩니다.
- Don't rename the **Hours** tab or turn off "Publish to web".
  **Hours** 탭 이름을 바꾸거나 "웹에 게시"를 끄지 마세요.

If the sheet can't be reached, the website shows the default hours saved in `src/constants.js` (`DEFAULT_BUSINESS_HOURS`).
시트를 불러오지 못하면 코드에 저장된 기본 영업시간이 표시됩니다.

## One-time setup (developer) / 최초 설정 (개발자)

1. In the sheet: **File → Share → Publish to web** → select the **Hours** tab and **Comma-separated values (.csv)** → **Publish**.
2. Copy the link and paste it into `BUSINESS_HOURS_CSV_URL` in `src/constants.js`, then deploy once.
