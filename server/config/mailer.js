const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

module.exports = {
    sendMailTo: (req, res) => {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD
            }
        });

        const body = req.body
        
        // Define the email details
        const mailOptions = {
            from: 'the terminal-report team',
            to: `${req.email}`,
            subject: 'Generated Password',
            text: `Your generated password is ${password}`,
            html: `<p>Your generated password is <h1>${password}</h1></p>`
        };
        
        // Send the email
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('Error:', error);
                return res.render('master', {
                    error: 'An error occurred'
                })
            } else {
                console.log('Email sent:', info.response);
                return res.render('master', {
                    message: 'Password succesfully sent to your mail'
                })
            }
        });
    }
}