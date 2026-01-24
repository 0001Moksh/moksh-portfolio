# 🎨 Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring a secure contact form with Gmail SMTP integration.

## ✨ Features

- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 📱 Fully responsive design
- 🎭 Smooth animations with GSAP and Framer Motion
- 📧 **Secure contact form with Gmail SMTP**
- 🔐 **Environment-based secret management**
- ⚡ **Netlify serverless functions**

## 📧 Contact Form

This project includes a production-ready contact form that:
- ✅ Sends emails via Gmail SMTP using Nodemailer
- ✅ Uses Netlify serverless functions (no backend server needed)
- ✅ Keeps all credentials secure in environment variables
- ✅ Includes input validation and error handling
- ✅ Sends professional HTML emails
- ✅ Has been tested and verified working

**📚 Documentation:**
- [Quick Start Guide](./QUICKSTART.md) - Get up and running in 5 minutes
- [Setup Instructions](./SETUP_INSTRUCTIONS.md) - Complete setup documentation
- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) - What was built and why
- [Architecture](./ARCHITECTURE.md) - System design and data flow

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Netlify CLI installed: `npm install -g netlify-cli`
- Gmail account with App Password configured

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Your `.env` file is already configured
   - For production, set these in Netlify dashboard:
     - `SMTP_HOST=smtp.gmail.com`
     - `SMTP_PORT=587`
     - `SMTP_USER=your_email@gmail.com`
     - `SMTP_PASS=your_app_password`
     - `EMAIL_TO=destination@gmail.com`

4. **Run locally:**
   ```bash
   npm run dev:netlify
   ```
   
   Visit: http://localhost:8888

5. **Build for production:**
   ```bash
   npm run build
   npm run deploy
   ```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications
- **Axios** - HTTP client

### Backend
- **Netlify Functions** - Serverless compute
- **Nodemailer** - Email sending
- **Gmail SMTP** - Email delivery

## 📁 Project Structure

```
portfolio2/
├── netlify/
│   └── functions/
│       └── contact.cjs          # Email handler function
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── Project.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                         # Environment variables (local)
├── .env.example                 # Template
└── package.json
```

## 📜 Available Scripts

```bash
npm run dev              # Run Vite dev server
npm run dev:netlify      # Run Netlify dev server (with functions)
npm run build            # Build for production
npm run preview          # Preview production build
npm run deploy           # Deploy to Netlify
npm run lint             # Run ESLint
```

## 🔐 Security

- ✅ All SMTP credentials stored in environment variables
- ✅ `.env` file excluded from Git
- ✅ Input validation on frontend and backend
- ✅ XSS protection in email templates
- ✅ CORS properly configured
- ✅ Gmail App Password used (not regular password)

## 🧪 Testing the Contact Form

1. Start the dev server: `npm run dev:netlify`
2. Navigate to the Contact section
3. Fill out the form with:
   - Your name
   - Valid email address
   - Message (min 10 characters)
4. Click "Send Message"
5. Check the destination inbox for the email

**Expected Result:** Professional HTML email with sender info and message content.

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect your Git repository to Netlify**

2. **Set environment variables in Netlify:**
   - Go to Site Settings → Environment Variables
   - Add all SMTP variables from `.env.example`

3. **Deploy:**
   ```bash
   npm run deploy
   ```

   Or push to your Git branch (auto-deploy)

## 📝 Environment Variables

Required environment variables:

| Variable      | Description                | Example                        |
|---------------|----------------------------|--------------------------------|
| `SMTP_HOST`   | Gmail SMTP server          | smtp.gmail.com                 |
| `SMTP_PORT`   | SMTP port                  | 587                            |
| `SMTP_USER`   | Sender email               | noreply@yourdomain.com        |
| `SMTP_PASS`   | Gmail App Password         | xxxx xxxx xxxx xxxx           |
| `EMAIL_TO`    | Destination email          | your@email.com                 |

**How to get Gmail App Password:**
1. Enable 2-Step Verification on your Google account
2. Visit: https://myaccount.google.com/apppasswords
3. Generate an app password for "Mail"
4. Use the 16-character password in your `.env` file

## 🐛 Troubleshooting

### Contact form not sending emails?

1. **Check environment variables are loaded:**
   ```bash
   netlify dev
   # Should show: "Injected .env file env vars..."
   ```

2. **Verify Gmail App Password:**
   - Must be 16 characters
   - 2-Step Verification enabled
   - Not your regular Gmail password

3. **Check function logs:**
   ```bash
   netlify functions:log contact
   ```

4. **Common errors:**
   - "Invalid login" → Wrong app password or 2FA not enabled
   - "ECONNREFUSED" → Network/firewall blocking port 587
   - "Missing fields" → Frontend validation not working

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed troubleshooting.

## 📚 Additional Documentation

- [Quick Start Guide](./QUICKSTART.md) - 5-minute setup
- [Setup Instructions](./SETUP_INSTRUCTIONS.md) - Complete guide
- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) - What & why
- [Architecture](./ARCHITECTURE.md) - System design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Moksh Bhardwaj**
- Portfolio: [Your Portfolio URL]
- GitHub: [@0001Moksh](https://github.com/0001Moksh)
- Email: mokshbhardwaj2333@gmail.com

## 🙏 Acknowledgments

- React team for the amazing library
- Vite for the blazing fast build tool
- Netlify for serverless functions
- Nodemailer for email handling

---

**Status:** ✅ Production Ready | ⚡ Fully Functional | 🔐 Secure

*Last Updated: January 24, 2026*
