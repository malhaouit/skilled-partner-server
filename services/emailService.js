const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendConfirmationEmail(email) {
  const websiteUrl = 'https://www.skilledpartner.com';

  const msg = {
    to: email,
    from: 'info@skilledpartner.com', // Use your verified SendGrid sender email
    subject: 'Thank you for subscribing!',
    text: `Hello! Thanks for subscribing to our pre-launch updates. We’ll notify you when we launch. Visit us at ${websiteUrl}`,
    html: `<p>Hello! Thanks for subscribing to our pre-launch updates. We’ll notify you when we launch. Visit us at <a href="${websiteUrl}" target="_blank">${websiteUrl}</a></p>`,
  };
  
  try {
    await sgMail.send(msg);
    console.log(`Confirmation email sent to ${email}`);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw new Error("Could not send email");
  }
}

module.exports = { sendConfirmationEmail };