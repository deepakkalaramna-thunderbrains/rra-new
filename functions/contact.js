const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.freesmtpservers.com",
    port: 25,
    secure: false
});

exports.handler = async (event, context) => {
    try {
        const { name, lastName, companyName, email, telephone, message } = JSON.parse(event.body);

        await transporter.sendMail({
            from: 'kDeepakwebdev@gmail.com',
            to: 'kDeepakwebdev@gmail.com',
            subject: 'Testing',
            html: `
                <p>${name}</p>
                <p>${lastName}</p>
                <p>${companyName}</p>
                <p>${email}</p>
                <p>${telephone}</p>
                <p>${message}</p>
            `
        });

        console.log('Email sent successfully!');
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "An error occurred while sending the email" })
        };
    }
};
