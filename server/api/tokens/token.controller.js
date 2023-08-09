const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { compareAdminRefreshToken, deleteAdminRefreshToken, compareStaffRefreshToken, deleteStaffRefreshToken } = require('../tokens/token.service');

dotenv.config({ path: './.env'});

module.exports = {
    handleAdminRefreshToken: (req, res) => {
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
            }

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if (err ||  results.email !== decoded.email) return res.sendStatus(401);
                const accessToken = jwt.sign(
                     { 'email': decoded.email },
                     process.env.ACCESS_TOKEN_SECRET,
                     {expiresIn: '1hr'}
                );
                res.json({ accessToken });
            })
        })
    },

    handleStaffRefreshToken: (req, res) => {
        const cookies = req.cookies;

        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        compareStaffRefreshToken (refreshToken, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.sendStatus(201).json({
                    success: 0,
                    data: 'Token not found'
                });
            }

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if (err ||  results.staff_id !== decoded.staff_id) return res.sendStatus(401);
                const accessToken = jwt.sign(
                     { 'email': decoded.email },
                     process.env.ACCESS_TOKEN_SECRET,
                     {expiresIn: '1hr'}
                );
                res.json({ accessToken });
            })
        })
    },

    handleLogout: (req, res) => {
        const cookies = req.cookies;

        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        compareAdminRefreshToken (refreshToken, (err, results) => {
            if (err) {
                console.log(err);
            }


            if (!results) {
                res.clearCookie('jwt', { httpOnly: true , sameSite:'None', secure: true });
                res.sendStatus(201).json({
                    success: 0,
                    data: 'Token not found'
                });
            }

            //Delete refreshToken
            deleteAdminRefreshToken(refreshToken, (err, results) => {
                if (err) {
                    console.log(err);
                }
   
                //Delete refreshToken
                res.clearCookie('jwt', { httpOnly: true , sameSite:'None', secure: true}); // secure: true on production
                res.json({
                    success: 1,
                    data: 'Logout succesful'
                });
            })
        })
    }
}