# Contact Form - Quick Setup (5 minutes)

## Installation Status
✅ **nodemailer** is already installed
✅ **API endpoint** is created (`/api/contact`)
✅ **Frontend form** is ready with validation
✅ **Email templates** are configured

## All You Need to Do

### 1. Create `.env.local` file in project root
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=admin@sol9x.com
```

### 2. Get Gmail App Password (2 minutes)
If using Gmail:
1. Visit: https://myaccount.google.com/apppasswords
2. Login with your Google account
3. Select "Mail" → "Windows Computer"
4. Copy the 16-character password generated
5. Paste into `.env.local` as `EMAIL_PASSWORD`

### 3. Start and Test
```bash
npm run dev
```
Then visit: http://localhost:3000/contact-us

### 4. Submit Test Form
Fill in all fields and click "Start the Conversation" button. You should receive:
- ✉️ Admin notification email
- ✉️ User confirmation email (to the email you entered)

## That's It! 

The form is fully functional. When users submit:
1. Their data is validated on client and server
2. You receive an email with their submission
3. They receive a confirmation email
4. The form clears and shows success message

## Using Other Email Providers?

**Outlook**: `EMAIL_SERVICE=outlook`
**Yahoo**: `EMAIL_SERVICE=yahoo`
**Custom SMTP**: 
```
EMAIL_HOST=smtp.provider.com
EMAIL_PORT=587
EMAIL_USER=your-email
EMAIL_PASSWORD=your-password
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No `.env.local` file | Create it in project root with 4 variables above |
| "EAUTH" error | Using Gmail? Use app password from apppasswords, not regular password |
| Emails in spam | Check spam folder and mark as "Not Spam" |
| Form says "invalid email" | Make sure email has @ and domain |
| Form says "invalid phone" | Phone needs 7+ digits |

## Files Modified
- ✅ `app/contact-us/page.tsx` - Added validation & state
- ✅ `app/api/contact/route.ts` - Created email API
- ✅ `app/styles.css` - Added error/success message styles
- ✅ `package.json` - Added nodemailer dependency

## Next (Optional)
- Add rate limiting for production
- Store messages in database
- Create admin dashboard
- Custom email templates

---
**That's all!** Your contact form is ready to receive messages. 🚀
