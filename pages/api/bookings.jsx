import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const bookingData = req.body;

      // Send email using Nodemailer
      const transporter = nodemailer.createTransport({
        host: process.env.ZOHO_MAIL_HOST,
        port: process.env.ZOHO_MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.ZOHO_MAIL_USERNAME,
          pass: process.env.ZOHO_MAIL_PASSWORD,
        },
      });

   const emailContent = `
  New Customer for Mr. Ortega

  Name: ${bookingData.name}
  Nationality: ${bookingData.nationality}
  Number of People: ${bookingData.numberOfPeople}
  Reason for Travel: ${bookingData.reasonForTravel}
  Luggage: ${bookingData.luggage}
  Arrival Time: ${bookingData.arrivalTime}
  Transportation Mode: ${bookingData.transportationMode}
`;

const mailOptions = {
  from: process.env.ZOHO_MAIL_USERNAME,
  to: process.env.YOUR_EMAIL,
  cc: process.env.FRIEND_EMAIL,
  subject: 'New Booking - Ortega',
  text: emailContent,
};


      await transporter.sendMail(mailOptions);

      res.status(200).end();
    } catch (error) {
      console.error('Failed to send booking details:', error);
      res.status(500).end();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
