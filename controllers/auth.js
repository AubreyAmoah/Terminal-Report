const db = require('./database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

exports.register = (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error);
        }

        if (results.length > 0 ) {
            return res.render('register', {
                message: 'That email is already in use'
            })
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword }, (error, result)=>{
            if(error) {
                console.log(error);
            } else {
                return res.render('register', {
                    message: 'User registered'
                })
            }
        })
    })
}

exports.login = (req,res) => {
    const { email, password } = req.body;

    // Query the database for the provided username
    const sql = 'SELECT * FROM admin WHERE email = ?';
    db.query(sql, [email], (err, results) => {
      if (err) {
        throw err;
      }
  
      if (results.length > 0) {
        const user = results[0];
  
        // Compare the provided password with the hashed password from the database
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
  
          if (isMatch) {
            // Set a cookie to indicate successful login
            res.cookie('loggedIn', true);
  
            // Redirect to a secure page or display a success message
            res.redirect('/master/dashboard');
          } else {
            // Redirect back to the login page with an error message
            res.redirect('/?error=1');
          }
        });
      } else {
        // Redirect back to the login page with an error message
        res.redirect('/?error=1');
      }
    });
};

exports.login_master = (req,res) => {
  const { email, password } = req.body;

  // Query the database for the provided username
  const sql = 'SELECT * FROM admin WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      throw err;
    }

    if (results.length > 0) {
      const user = results[0];

      // Compare the provided password with the hashed password from the database
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        }

        if (isMatch) {
          // Set a cookie to indicate successful login
          res.cookie('loggedIn', true);

          // Redirect to a secure page or display a success message
          res.redirect('/master/dashboard');
        } else {
          // Redirect back to the login page with an error message
          res.redirect('/?error=1');
        }
      });
    } else {
      // Redirect back to the login page with an error message
      res.redirect('/?error=1');
    }
  });
};
