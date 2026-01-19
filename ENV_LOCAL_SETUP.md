# .env.local Configuration Template

## Copy and Paste This Template

Create a file named `.env.local` in your project root with these contents:

```
# Contact Form Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=admin@sol9x.com
```

## How to Fill It Out

### EMAIL_SERVICE
The email provider you're using. Common options:
- `gmail` ← Recommended for most users
- `outlook` ← For Outlook/Hotmail
- `yahoo` ← For Yahoo Mail

### EMAIL_USER
Your actual email address that will send the emails. Examples:
- `jane@gmail.com`
- `john.smith@outlook.com`
- `contact@yourcompany.com`

### EMAIL_PASSWORD
The password for your email account. 

**If using Gmail** (most common):
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" → "Windows Computer"
3. Google will generate a 16-character password like: `abcd efgh ijkl mnop`
4. Copy this and paste here (remove spaces if any)
5. **DO NOT use your regular Gmail password**

**If using Outlook/Yahoo/Other**:
- Use your account password
- May need to enable "Less Secure Apps" in account settings

### ADMIN_EMAIL
Where you want to receive contact form submissions. This can be the same as EMAIL_USER or a different email. Example:
- `admin@sol9x.com`
- `contact@sol9x.com`
- Your personal email

---

## Complete Example (Gmail)

```
# Contact Form Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=jane.doe@gmail.com
EMAIL_PASSWORD=qwer tyui asdf ghjk
ADMIN_EMAIL=admin@sol9x.com
```

## Complete Example (Outlook)

```
# Contact Form Email Configuration
EMAIL_SERVICE=outlook
EMAIL_USER=jane.doe@outlook.com
EMAIL_PASSWORD=MyP@ssw0rd
ADMIN_EMAIL=contact@sol9x.com
```

## Complete Example (Custom Company Email)

```
# Contact Form Email Configuration
EMAIL_SERVICE=outlook
EMAIL_USER=noreply@sol9x.com
EMAIL_PASSWORD=CompanyPassword123!
ADMIN_EMAIL=admin@sol9x.com
```

---

## After Creating .env.local

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Test the form**:
   - Visit: http://localhost:3000/contact-us
   - Fill in all fields
   - Click "Start the Conversation"
   - You should receive emails within seconds

3. **Check both emails**:
   - Admin notification at ADMIN_EMAIL
   - User confirmation at the email entered in the form

---

## Important Notes

⚠️ **DO NOT**:
- Commit `.env.local` to Git
- Share this file with others
- Use your actual Gmail password (use app password instead)
- Upload `.env.local` to GitHub

✅ **DO**:
- Keep `.env.local` private
- Use app passwords for Gmail
- Create a `.env.local` on each environment
- Update `.env.local` if you change email addresses

---

## Troubleshooting

### Form says "Failed to send message"
- Check that `.env.local` exists in project root
- Verify all 4 variables are filled in correctly
- Restart `npm run dev`

### Getting "EAUTH" error
- You're using wrong password
- For Gmail: Use app password from myaccount.google.com/apppasswords
- Not your actual Gmail password

### Emails going to spam
- Check spam/junk folder
- Mark as "Not Spam"
- Add sender email to contacts

### Email authentication fails
- Verify EMAIL_USER matches the account you're sending from
- Verify EMAIL_PASSWORD is correct
- For Gmail, confirm it's an app password, not account password

---

## For Different Email Providers

### Gmail Setup (5 minutes)
1. Visit: https://myaccount.google.com/apppasswords
2. Login if needed
3. Select "Mail" and "Windows Computer"  
4. Click "Generate"
5. Copy the 16 characters shown
6. Paste into EMAIL_PASSWORD in this file

### Outlook Setup
1. No special password needed
2. Use your regular Outlook password
3. May ask to enable "Less Secure Apps"
4. Set EMAIL_SERVICE=outlook

### Custom SMTP
If your company uses custom SMTP:
```
EMAIL_HOST=smtp.company.com
EMAIL_PORT=587
EMAIL_USER=your-email@company.com
EMAIL_PASSWORD=your-password
ADMIN_EMAIL=admin@company.com
```

---

## Once Working

Your contact form will:
- ✅ Accept submissions 24/7
- ✅ Validate all inputs
- ✅ Send admin notification emails
- ✅ Send user confirmation emails
- ✅ Handle errors gracefully
- ✅ Show success/error messages

**That's it! Your contact form is ready to collect inquiries.**
