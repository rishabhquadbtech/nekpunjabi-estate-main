import axios from 'axios';
import { transporter } from '@/app/config/nodemailerManager'; // Import your transporter configuration
import { mailOptions } from '@/app/config/nodemailerManager'; // Import your default mailOptions
import { generateEmailContent } from '@/app/helpers/emailContent'; // Helper function to generate email content

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Bad request' });
  }

  const { name, phone, location, recaptchaToken } = req.body;

  // Validate the data
  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  // If reCAPTCHA token is provided, verify it
  if (recaptchaToken) {
    try {
      // Verify reCAPTCHA v2 token with Google
      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        null,
        {
          params: {
            secret: process.env.RECAPTCHA_SECRET_KEY, // Your reCAPTCHA v2 secret key
            response: recaptchaToken, // The token from the frontend
          },
        }
      );

      // If reCAPTCHA verification fails, return error
      if (!recaptchaResponse.data.success) {
        return res.status(400).json({ message: 'reCAPTCHA verification failed' });
      }
    } catch (error) {
      console.error('Error during reCAPTCHA verification:', error);
      return res.status(500).json({ message: 'Error processing reCAPTCHA' });
    }
  }

  // Generate the email content depending on the fields provided
  const emailContent = generateEmailContent({ name, phone, location });

  // Simulate sending email (you can replace with Nodemailer code)
  try {
    await transporter.sendMail({
      ...mailOptions,
      ...emailContent,
      subject: 'New Contact Form Submission',
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Email failed to send', error: error.message });
  }
};

export default handler;
