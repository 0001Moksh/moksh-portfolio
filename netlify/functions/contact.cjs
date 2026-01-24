const nodemailer = require('nodemailer');

/**
 * Netlify Serverless Function for Contact Form
 * Handles secure email sending via Gmail SMTP
 */
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse request body
    const { name, email, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Missing required fields. Please provide name, email, and message.' 
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Validate message length
    if (message.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message must be at least 10 characters long' }),
      };
    }

    // Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                      📧 New Contact Form Submission
                    </h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="color: #666666; font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
                      You have received a new message from your portfolio website contact form:
                    </p>
                    
                    <!-- Sender Info -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
                          <p style="margin: 0 0 10px 0; color: #333333;">
                            <strong style="color: #667eea;">Name:</strong> ${name}
                          </p>
                          <p style="margin: 0; color: #333333;">
                            <strong style="color: #667eea;">Email:</strong> 
                            <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message -->
                    <div style="margin-bottom: 30px;">
                      <h2 style="color: #333333; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                        Message:
                      </h2>
                      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; border-left: 4px solid #667eea;">
                        <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                          ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
                        </p>
                      </div>
                    </div>
                    
                    <!-- Reply Button -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="mailto:${email}?subject=Re: Your message from portfolio" 
                             style="display: inline-block; padding: 14px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                            Reply to ${name}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="color: #999999; font-size: 12px; margin: 0;">
                      This email was sent from your portfolio contact form.<br>
                      Timestamp: ${new Date().toLocaleString('en-US', { 
                        timeZone: 'Asia/Kolkata',
                        dateStyle: 'full',
                        timeStyle: 'long'
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textContent = `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio contact form
${new Date().toLocaleString('en-US', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'long'
})}
    `;

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.',
        messageId: info.messageId,
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: false,
        error: 'Failed to send message. Please try again later or contact me directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
};
