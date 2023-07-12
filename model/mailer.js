const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

exports.sendMyMail = (password, res) => {
    // Create a transporter object with your email service provider's SMTP configuration
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD
        }
    });
    
    // Define the email details
    const mailOptions = {
        from: 'the terminal-report team',
        to: 'mramoah@protonmail.com',
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


