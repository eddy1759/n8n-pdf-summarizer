const N8N_WEBHOOK_URL = "https://your-n8n-url/webhook/pdf-parser-v2";

function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();

  const timestamp = sheet.getRange(lastRow, 1).getValue();
  const email = sheet.getRange(lastRow, 2).getValue();
  const name = sheet.getRange(lastRow, 3).getValue();
  const docType = sheet.getRange(lastRow, 4).getValue();
  const fileUrl = sheet.getRange(lastRow, 5).getValue();

  const payload = {
    timestamp,
    email,
    name,
    docType,
    fileUrl
  };

  const options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  UrlFetchApp.fetch(N8N_WEBHOOK_URL, options);
}
