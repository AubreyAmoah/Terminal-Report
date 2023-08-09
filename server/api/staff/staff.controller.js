const { createStaff, getStaffByStaffID, getByStaffID, getAllStaffs, updateStaff, updateStaffPassword, deleteStaff, getStaffsByName } = require('./staff.service');
const { createStaffRefreshToken, compareStaffRefreshToken } = require('../tokens/token.service');
const { getUserByToken } = require('../users/user.service');
const { genSaltSync, hashSync, compareSync} = require('bcrypt');
const { sign } = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

module.exports = {
    addStaff : (req, res) => {

        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {

            if (err) {
                console.log(err);
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'Not authorized'
                });
            }

            const owner = results.email

            const body = req.body;
            body.staff_id = '224411';
            body.password = '224411';
            const salt = genSaltSync(10);
            body.password = hashSync(body.password, salt);
            body.createdBy = owner

            getStaffByStaffID(body.staff_id, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }

                if (!results) {
                    createStaff(body, (err, results) => {
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
                        message: 'Staff already exists'
                    });
                }
            })
        })
    },
    staffLogin : (req, res) => {
        const body = req.body;
        getStaffByStaffID(body.staff_id, (err, results) => {
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

                createStaffRefreshToken(results.email, refreshToken, (err, results) => {
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
    getStaffDetails: (req,res) => {
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
            } else {
                const user = results[0];
                getByStaffID(user.staff_id, (err, results) => {
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
    },
    getStaffDetail: (req,res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {

            if (err) {
                console.log(err);
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'You are not authorized'
                });
            }

            const owner = results.email
            const staff_id = req.params.staff_id
            getStaffByStaffID(staff_id, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }
    
                if (!results) {
                    return res.json({
                        success: 0,
                        message: `No staff with ${body.index_number} found!`
                    });
                } else {
                    return res.status(200).json({
                        success: 1,
                        data: results
                    });
    
                }
            })
        })
    },
    displayStaff: (req, res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {
            if(err) {
                console.log(err)
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'You are not authorized'
                });
            }

            const owner = results.email


            getAllStaffs(owner, (err, results) => {
                if (err) {
                    console.log(err)
                }

                if (!results) {
                    return res.status(201).json({
                        success: 0,
                        data: 'No data found'
                    });
                }

                return res.status(200).json({
                    success: 1,
                    data: results
                });
            })
        })
    },
    searchStaff: (req,res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {
            if(err) {
                console.log(err)
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'You are not authorized'
                });
            }


            const owner = results.email
            const query = req.query.search


            getStaffsByName(owner, query, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.status(201).json({
                        success: 0,
                        data: 'No results found'
                    });
                }

                return res.status(200).json({
                    success: 1,
                    data: results
                });
            })
        })
    },
    modifyStaff: (req,res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {
            if(err) {
                console.log(err)
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'You are not authorized'
                });
            }

            const body = req.body;
            const staff_id = req.params.staff_id;
            const owner = results.email;
            
            updateStaff(body, staff_id, owner, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        message: 'Failed to update user'
                    });
                }

                return res.json({
                    success: 1,
                    message: 'updated succesfully'
                });
            })
        })
    },
    resetStaffPass: (req,res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {
            if(err) {
                console.log(err)
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'You are not authorized'
                });
            }

            const staff_id = req.params.staff_id;
            const password = staff_id;
            const salt = genSaltSync(10);
            password = hashSync(password, salt);
            
            updateStaffPassword(password, staff_id, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        message: 'Failed to reset password'
                    });
                }

                return res.json({
                    success: 1,
                    message: 'password reset succesfully'
                });
            })
        })
    },
    removeStaff: (req, res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;

        getUserByToken(refreshToken, (err, results) => {
            if(err) {
                console.log(err)
            }

            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: 'You are not authorized'
                });
            }

            const staff_id = req.params.staff_id;
            const owner = results.email;
            
            deleteStaff(staff_id, owner, (err, results) => {
                if (err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        data: 'Failed to delete user'
                    })
                }

                return res.status(200).json({
                    success: 1,
                    data: 'Deleted Successfully'
                })
            })
        })
    }
}