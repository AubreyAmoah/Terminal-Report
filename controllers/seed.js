const db = require('./database');
const bcrypt = require('bcryptjs');

const mailer = require('../model/mailer');

exports.createAdmin = (req, res) => {

    const email = 'mramoah@protonmail.com';
    
    const password = Math.random().toString(36).substring(2)
    
    const hash = bcrypt.hashSync(password, 10)
    
    console.log('running seed..');
    
    db.query('SELECT email FROM admin WHERE email = ?', [email], (err, results) => {
        if(err) {
            throw err;
        }

        console.log(results.length);
    
        if (results.length > 0 ) {
            db.query('UPDATE admin SET password = ? WHERE email = ?', [hash,email], err =>{
                if (err) {
                    throw err
                }
                mailer.sendMyMail(password, res);
            })

        } else {
            db.query(`INSERT INTO admin (email, password) VALUES (?, ?);`, [email,hash], err => {
                if(err) {
                    throw err
                }
    
                mailer.sendMyMail(password, res);
            })
        }
    })
}