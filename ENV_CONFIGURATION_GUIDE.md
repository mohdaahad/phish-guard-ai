# 📧 Email Configuration Guide for Contact Form

## Quick Setup Steps

### Step 1: Locate Your `.env.local` File
The `.env.local` file should be in your project root directory:
```
e:\sol9x\.env.local
```
(Same folder as `package.json`)

---

## Step 2: Get Gmail App Password (IMPORTANT!)

### Why App Password?
Gmail **does NOT accept** your regular password for SMTP. You **MUST** use an App Password.

### How to Get Gmail App Password:

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords

2. **Enable 2-Step Verification** (if not already enabled)
   - Gmail requires 2-Step Verification to generate App Passwords
   - If you see "2-Step Verification is off", enable it first

3. **Generate App Password**
   - Scroll to "App passwords" section
   - Click "Select app" → Choose **"Mail"**
   - Click "Select device" → Choose **"Windows Computer"** (or your device)
   - Click **"Generate"**

4. **Copy the 16-Character Password**
   - Google will show a 16-character password like: `abcd efgh ijkl mnop`
   - **Copy this entire password** (including spaces, or remove spaces - both work)

---

## Step 3: Configure `.env.local` File

Open `.env.local` in your code editor and update it with your credentials:

```env
# Email Configuration for Contact Form
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### Important Notes:
- **EMAIL_USER**: Your full Gmail address (e.g., `suruchi.jha.ug23@nsut.ac.in` if using Gmail)
- **EMAIL_PASSWORD**: The 16-character App Password (NOT your regular Gmail password!)
- **No quotes needed** around the values
- **No spaces** before/after the `=` sign

### Example (Correct):
```env
EMAIL_SERVICE=gmail
EMAIL_USER=suruchi.jha.ug23@nsut.ac.in
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### Example (Wrong - Will Cause Error):
```env
EMAIL_SERVICE=gmail
EMAIL_USER=suruchi.jha.ug23@nsut.ac.in
EMAIL_PASSWORD=your-regular-gmail-password  ❌ DON'T USE THIS!
```

---

## Step 4: Restart Development Server

After updating `.env.local`, you **MUST** restart your server:

1. **Stop the server**: Press `Ctrl + C` in your terminal
2. **Start again**: Run `npm run dev`
3. **Test the form**: Submit a test message

---

## Troubleshooting

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"

**Common Causes:**
1. ❌ Using regular Gmail password instead of App Password
   - **Fix**: Generate App Password from https://myaccount.google.com/apppasswords

2. ❌ App Password copied incorrectly
   - **Fix**: Copy the entire 16-character password exactly as shown

3. ❌ 2-Step Verification not enabled
   - **Fix**: Enable 2-Step Verification first, then generate App Password

4. ❌ Wrong email address
   - **Fix**: Make sure `EMAIL_USER` matches the Gmail account you're using

5. ❌ Spaces or quotes in `.env.local`
   - **Fix**: Remove quotes and extra spaces around values

### Error: "Missing email configuration"

**Cause**: `.env.local` file doesn't exist or variables are missing

**Fix**:
1. Create `.env.local` in project root
2. Add all 3 variables: `EMAIL_SERVICE`, `EMAIL_USER`, `EMAIL_PASSWORD`
3. Restart server

### Emails Not Arriving

**Check:**
1. ✅ Check spam/junk folder
2. ✅ Verify `hr@sol9x.in` email address is correct
3. ✅ Check server logs for errors
4. ✅ Verify Gmail account is active

---

## Alternative Email Providers

### Outlook/Hotmail
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### Yahoo Mail
```env
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

### Custom SMTP
```env
EMAIL_HOST=smtp.provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@provider.com
EMAIL_PASSWORD=your-password
```

---

## Security Best Practices

✅ **DO:**
- Use App Passwords (not regular passwords)
- Keep `.env.local` in `.gitignore` (already done)
- Never commit `.env.local` to Git
- Use different passwords for different environments

❌ **DON'T:**
- Share your `.env.local` file
- Use your regular Gmail password
- Commit `.env.local` to version control
- Hardcode credentials in code

---

## Verification Checklist

Before considering setup complete:

- [ ] `.env.local` file exists in project root
- [ ] `EMAIL_SERVICE=gmail` is set
- [ ] `EMAIL_USER` contains your full Gmail address
- [ ] `EMAIL_PASSWORD` contains 16-character App Password (not regular password)
- [ ] 2-Step Verification is enabled on Gmail account
- [ ] Development server has been restarted after changes
- [ ] Test form submission works
- [ ] Email received at `hr@sol9x.in`
- [ ] User confirmation email received

---

## Quick Reference

| Variable | Example | Required |
|----------|---------|----------|
| `EMAIL_SERVICE` | `gmail` | ✅ Yes |
| `EMAIL_USER` | `your-email@gmail.com` | ✅ Yes |
| `EMAIL_PASSWORD` | `abcd efgh ijkl mnop` | ✅ Yes |

**App Password Generator**: https://myaccount.google.com/apppasswords

---

## Still Having Issues?

1. **Double-check** you're using App Password (not regular password)
2. **Verify** 2-Step Verification is enabled
3. **Restart** your development server
4. **Check** server logs for specific error messages
5. **Test** with a simple email first

---

*Last Updated: Today*
*For Gmail, always use App Passwords, never your regular password!*
