const { createAdmin, getUserByAdminEmail } = require('./user.service');
const { createAdminRefreshToken, compareAdminRefreshToken } = require('../tokens/token.service');
const { genSaltSync, hashSync, compareSync} = require('bcrypt');
const { sign } = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

module.exports = {
    registerAdmin : (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        getUserByAdminEmail(body.email, (err, results) => {
            if(err) {
                console.log(err);
            }

            if (!results) {
                createAdmin(body, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'Database connection error'
                        });
                    }
        
                    return res.status(200).json({
                        success: 1,
                        data: results
                    });
                })
            } else {
                return res.status(401).json({
                    success: 0,
                    message: 'Email already exists'
                });
            }
        })
    },
    adminLogin : (req, res) => {
        const body = req.body;
        getUserByAdminEmail(body.email, (err, results) => {
            if(err) {
                console.log(err);
            }
            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'Invalid email or password'
                });
            }

            const result = compareSync(body.password, results.password);

            if(result) {
                results.password = undefined;
                const token = sign({ result: results },
                process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn: '1h'
                });

                const refreshToken = sign({ result: results},
                process.env.REFRESH_TOKEN_SECRET,{
                    expiresIn: '1d'
                });

                createAdminRefreshToken(results.email, refreshToken, (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!results) {
                        return res.status(401).json({
                            success: 0,
                            data: 'Could not save refresh tokens'
                        });
                    }

                    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite:'None', secure: true, maxAge: 24 * 60 * 60 * 1000});

                    return res.status(200).json({
                        success: 1,
                        message: 'login successfully',
                        token: token
                    });
                })
            } else {
                return res.status(401).json({
                    success: 0,
                    data: 'Invalid email or password'
                });
            }
        })
    },
    getAdminDetails: (req,res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        compareAdminRefreshToken (refreshToken, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.sendStatus(201).json({
                    success: 0,
                    data: 'Token not found'
                });
            } else {
                const user = results[0];
                getUserByAdminEmail(user.email, (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!results) {
                        res.sendStatus(201).json({
                            success: 0,
                            data: 'No user found'
                        });
                    }
    
                    results.password = undefined;
                    console.log(results);
                    return res.json({
                        results
                    });
                })
            }
        })
    }
}