const Email = require('../models/Email');
const { sendConfirmationEmail } = require('../services/emailService');

async function subscribeEmail(req, res) {
  const { email } = req.body;
  try {
    // Save email to the database
    const newEmail = await Email.create({ email });

    // Send confirmation email
    await sendConfirmationEmail(email);

    res.json({ message: "Thank you! We'll notify you on launch"})
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "This email is already registered"});
    } else {
      res.status(500).json({ message: "An error occured. Please try again later."});
    }
  }
}

module.exports = { subscribeEmail };