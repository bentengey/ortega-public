const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/api/bookings', async (req: { body: any; }, res: { sendStatus: (arg0: number) => void; }) => {
  try {
    const bookingData = req.body;

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_MAIL_HOST,
      port: process.env.ZOHO_MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.ZOHO_MAIL_USERNAME,
        pass: process.env.ZOHO_MAIL_PASSWORD,
      },
    });

    const emailContent = `
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
      subject: 'New Booking',
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);

    res.sendStatus(200);
  } catch (error) {
    console.error('Failed to send booking details:', error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
