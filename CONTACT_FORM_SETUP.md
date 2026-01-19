# Contact Form Setup Guide

## Overview
The contact form on the `/contact-us` page now has full backend integration with:
- Form validation (email, phone)
- Email notifications to admin
- Confirmation email to user
- Error handling and user feedback

## Installation Steps

### 1. Install nodemailer
Run this command in your project directory:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Configure Environment Variables
Create or update your `.env.local` file with the following variables:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@sol9x.com
```

### 3. Gmail Setup (Recommended)
If using Gmail, follow these steps:

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Copy this password and paste it into `EMAIL_PASSWORD` in `.env.local`
5. Do NOT use your Gmail password directly - always use the app password

### 4. Alternative Email Providers
You can use any email provider that supports SMTP. Update `EMAIL_SERVICE` accordingly:
- `gmail` - Gmail (recommended)
- `outlook` - Outlook/Hotmail
- `yahoo` - Yahoo Mail
- For custom SMTP providers, you may need to configure:
  ```env
  EMAIL_HOST=smtp.provider.com
  EMAIL_PORT=587
  EMAIL_USER=your-email@provider.com
  EMAIL_PASSWORD=your-password
  ```

## Features

### Frontend (Client-side)
- **Form Validation**:
  - Name: Required
  - Email: Required + valid email format
  - Phone: Required + valid phone format (7+ digits)
  - Message: Optional

- **User Feedback**:
  - Loading state while submitting
  - Success message after submission
  - Error messages with specific details
  - Form clears on successful submission

### Backend (Server-side)
- **Email Validation**: Ensures valid email format
- **Phone Validation**: Accepts various phone formats with 7+ digits
- **Admin Notification**: Sends detailed message to admin email
- **User Confirmation**: Sends confirmation email to the user
- **Error Handling**: Comprehensive error handling with logging

## Email Templates

### Admin Email
The admin receives a formatted email containing:
- User's name, email, and phone
- Full message content
- Timestamp of submission

### User Confirmation Email
The user receives a professional confirmation email:
- Thank you message
- Confirmation that their message was received
- Assurance that the team will respond

## Testing

### Test the Form
1. Navigate to `/contact-us`
2. Fill in all required fields
3. Click "Start the Conversation"
4. Check your email for both the admin notification and user confirmation

### Troubleshooting
- **"Failed to send message" error**: Check your `.env.local` variables
- **Gmail authentication failed**: Make sure you're using an app password, not your Gmail password
- **SMTP connection error**: Verify EMAIL_SERVICE and network connectivity
- **Emails not received**: Check spam/junk folder, verify email addresses are correct

## Security Considerations

1. **Never commit `.env.local`** to version control - use `.env.local.example` as reference
2. **Use app passwords** instead of actual passwords for email services
3. **Validate input** on both client and server side (already implemented)
4. **Rate limiting** (optional): Consider adding rate limiting for production

## Future Enhancements

Consider adding:
- Rate limiting to prevent spam
- Database storage of submissions
- Admin dashboard to view submissions
- Email templates with branding
- CAPTCHA verification
- File upload support

## Support

For issues or questions about the contact form implementation, refer to:
- Nodemailer docs: [nodemailer.com](https://nodemailer.com/)
- Gmail App Passwords: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
