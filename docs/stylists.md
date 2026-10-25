# Updating Stylists / 스타일리스트 바꾸는 방법

The stylists on the website's **Stylists** page come from a Google Sheet.
웹사이트 **Stylists** 페이지의 스타일리스트 정보는 구글 시트에서 불러옵니다.

## Edit stylists / 수정하기

1. Open the **K-Beauty Website** sheet → **Stylists** tab.
   **K-Beauty Website** 시트를 열고 **Stylists** 탭으로 이동하세요.
2. One row = one stylist. Change, add or delete rows, then close the sheet. Saving is automatic.
   한 줄 = 스타일리스트 한 명. 줄을 고치거나 추가·삭제하고 닫으면 됩니다. 저장은 자동이에요.
3. The website updates in about **5 minutes**. Refresh the page to check.
   약 **5분** 뒤 사이트에 반영됩니다. 새로고침해서 확인하세요.

| Name (A) | Position (B) | Description (C) | Photo (D) |
|---|---|---|---|
| Joy | Master Stylist | Joy ran a hair salon in Sindorim… | |
| Mia | Stylist | Mia specializes in… | https://drive.google.com/file/d/…/view |

- Stylists show in the same order as the sheet, alternating photo left / right.
  시트 순서대로 표시되고, 사진이 왼쪽/오른쪽 번갈아 나옵니다.
- For a new paragraph in the description, press **Alt + Enter** (Mac: **⌘ + Enter** or **Option + Enter**) inside the cell.
  소개글에서 줄을 바꾸려면 셀 안에서 **Alt + Enter** (맥: **⌘ + Enter** 또는 **Option + Enter**)를 누르세요.
- Position and Description can be left empty. 직책과 소개글은 비워도 됩니다.

## Adding a photo / 사진 넣기

1. Upload the photo to **Google Drive**. 사진을 **구글 드라이브**에 올리세요.
   - A **portrait (vertical) photo** works best, with the face in the **upper part** of the picture.
     **세로 사진**이 가장 좋고, 얼굴이 사진 **위쪽**에 오게 해주세요.
2. Right-click the photo → **Share** → under "General access" choose **Anyone with the link** → **Copy link**.
   사진 우클릭 → **공유** → "일반 액세스"에서 **링크가 있는 모든 사용자** 선택 → **링크 복사**.
3. Paste the link into column **D (Photo)**. 복사한 링크를 **D열(Photo)**에 붙여 넣으세요.

⚠️ **Google Photos links (`photos.app.goo.gl/…`) don't work.** They open an album page, not the image. Use a Google Drive link.
⚠️ **구글 포토 링크(`photos.app.goo.gl/…`)는 작동하지 않아요.** 사진 파일이 아니라 앨범 페이지라서요. 꼭 구글 드라이브 링크를 써주세요.

If the photo can't be shown (for example, sharing is not set to "Anyone with the link"):
사진을 불러올 수 없으면 (예: 공유가 "링크가 있는 모든 사용자"로 설정되지 않은 경우):
- Joy and Lucy show their saved photo. Joy, Lucy는 저장된 사진이 표시되고,
- other stylists show their first initial on a dark background. 다른 스타일리스트는 이름 첫 글자가 표시됩니다.

Joy and Lucy can keep column D empty, since their photos are already saved on the website.
Joy, Lucy는 사진이 사이트에 이미 저장되어 있어서 D열을 비워둬도 됩니다.

## Rules / 주의사항

- Keep row 1 (`Name`, `Position`, `Description`, `Photo`) as it is. 1행(제목 줄)은 지우지 마세요.
- Rows with an empty Name are ignored. 이름이 빈 줄은 무시됩니다.
- Don't rename the **Stylists** tab or turn off "Publish to web".
  **Stylists** 탭 이름을 바꾸거나 "웹에 게시"를 끄지 마세요.

If the sheet can't be reached, the website shows the default stylists saved in `src/constants.js` (`DEFAULT_STYLISTS`).
시트를 불러오지 못하면 코드에 저장된 기본 스타일리스트가 표시됩니다.

## One-time setup (developer) / 최초 설정 (개발자)

1. Open the spreadsheet → **File → Import → Upload** → choose `docs/stylists-sheet-template.csv`.
   - Import location: **Insert new sheet(s)**
   - Separator type: **Comma**
2. Rename the new tab to **Stylists**.
3. **File → Share → Publish to web** → select the **Stylists** tab and **Comma-separated values (.csv)** → **Publish**.
4. Copy the link and paste it into `STYLISTS_CSV_URL` in `src/constants.js`, then deploy once.
