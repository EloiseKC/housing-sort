// Housing 2 — Inventory Sort — Google Apps Script
// ─────────────────────────────────────────────────────────────────────────────
// Setup:
//   1. Open your Google Sheet → Extensions → Apps Script
//   2. Paste this entire file
//   3. Deploy → New deployment → Web app
//      - Execute as: Me
//      - Who has access: Anyone
//   4. Copy the deployment URL
//   5. Paste it into index.html as WEBHOOK_URL
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_NAME = 'Sort Results'; // will be created automatically if missing

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();

    // Get or create the sheet
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Write header row if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Respondent',
        'Session ID',
        'Furniture ID',
        'Furniture Name',
        'Furniture Type',
        'Category ID',
        'Category Name',
      ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }

    // Write one row per furniture item
    const rows = data.assignments.map(a => [
      data.timestamp,
      data.respondent,
      data.session_id,
      a.id,
      a.name,
      a.type,
      a.category_id || '',
      a.category_name,
    ]);

    if (rows.length > 0) {
      sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 8).setValues(rows);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', rows: rows.length }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function — run manually to verify the sheet is accessible
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Connected to: ' + ss.getName());
  Logger.log('Sheets: ' + ss.getSheets().map(s => s.getName()).join(', '));
}
