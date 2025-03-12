import { google } from 'googleapis';

export const fetchDataFromGoogleSheet = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: import.meta.env.VITE_GOOGLE_CLIENT_EMAIL,
      private_key: import.meta.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A:C', // Thay Sheet1 bằng tên sheet của bạn
  });

  return response.data.values;
};