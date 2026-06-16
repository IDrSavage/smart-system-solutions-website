# ربط نموذج «أرسل لنا رسالة» بـ Google Sheets + إشعار بريد

النموذج في الموقع يرسل الطلبات إلى Google Sheet عبر Google Apps Script (مجاني، بدون أي خدمة خارجية)،
ويرسل لك **إيميل بكل طلب جديد**. حالياً الحقل فارغ فالنموذج يفتح بريد `info@smsyso.com` كحل مؤقت.
لتفعيل الإرسال للشيت + الإيميل اتبع الخطوات:

## الخطوات (≈ 3 دقائق)

1. أنشئ **Google Sheet** جديد، وسمِّ التبويب الأول `Leads`.
2. من القائمة: **Extensions → Apps Script**.
3. احذف أي كود موجود، والصق الكود التالي بالكامل:

```javascript
// ====== الإعدادات ======
var NOTIFY_EMAIL = 'info@smsyso.com';  // ← ضع إيميلك هنا إذا تبي الإشعار يجيك أنت
var SHEET_NAME   = 'Leads';

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var d = JSON.parse(e.postData.contents);

    // عناوين الأعمدة (تُنشأ مرة واحدة فقط)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['التاريخ', 'الاسم', 'الجوال', 'الخدمة', 'الرسالة', 'الصفحة']);
    }

    // إضافة صف جديد بالطلب
    sheet.appendRow([d.time || new Date(), d.name, d.phone, d.service, d.message, d.page]);

    // إرسال إشعار بالبريد لكل طلب جديد
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '🔔 طلب جديد من الموقع - ' + (d.name || ''),
      body:
        'وصلك طلب جديد عبر موقع Smart System Solutions:\n\n' +
        'الاسم: '   + (d.name    || '-') + '\n' +
        'الجوال: '  + (d.phone   || '-') + '\n' +
        'الخدمة: '  + (d.service || '-') + '\n' +
        'الرسالة: ' + (d.message || '-') + '\n\n' +
        'التاريخ: ' + (d.time || new Date())
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

> لو تبي الإشعار يجيك على إيميلك الشخصي، غيّر `info@smsyso.com` في أول سطر إلى إيميلك.

4. اضغط **Deploy → New deployment**.
   - **Type**: اختر *Web app*.
   - **Execute as**: *Me*.
   - **Who has access**: *Anyone*.
   - اضغط **Deploy**، وسيطلب صلاحيات (الشيت + إرسال البريد) — اقبلها.
5. انسخ رابط **Web app URL** (يبدأ بـ `https://script.google.com/macros/s/.../exec`).
6. افتح `assets/js/main.js`، وابحث عن السطر:

   ```js
   const SHEET_ENDPOINT = '';
   ```

   وضع الرابط بين علامتي التنصيص:

   ```js
   const SHEET_ENDPOINT = 'https://script.google.com/macros/s/XXXXXXXX/exec';
   ```

7. احفظ الملف وحدّث الموقع. جرّب إرسال رسالة — تظهر في الشيت ✅ ويصلك إيميل 📧.

## ملاحظات
- الإيميل يُرسَل من حساب Google صاحب السكربت (حد يومي: 100 رسالة/اليوم للحساب العادي — أكثر من كافٍ).
- بدائل جاهزة بدون كود (إن رغبت): **Formspree**, **SheetDB**, **Sheety** — كلها تعطيك رابطاً يوضع في نفس متغير `SHEET_ENDPOINT`.
