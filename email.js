/* eslint-disable import/no-extraneous-dependencies */
import { createTransport } from 'nodemailer';

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'kishor.ruet.cse@gmail.com',
        pass: '83205409_Kishor',
    },
});

const mailOptions = {
    from: 'kishor.ruet.cse@gmail.com',
    to: 'kishor.josephite@gmail.com, kishorkumarparoi.ruet@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy peasy!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Email sent: ${info.response}`);
    }
});
