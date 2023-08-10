const { createClass, updateClass, getAllClasses, getClassByID, getClassByName, deleteClass, getClassByClassName } = require('./class.service');
const { getUserByToken } = require('../users/user.service');

module.exports = {
    addClass : (req, res) => {

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
            const id = body.id
            body.createdBy = owner;

            getClassByClassName(body.name, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }

                if(!results) {
                    getClassByID(id, owner, (err, results) => {
                        if(err) {
                            console.log(err);
                        }

                        if(!results) {
                            createClass(body, (err, results) => {
                                if (err) {
                                    console.log(err);
                                    return res.status(500).json({
                                        success: 0,
                                        message: 'Database connection error'
                                    });
                                }
        
                                if(!results) {
                                    return res.json({
                                        success: 0,
                                        data: 'class creation failed!!'
                                    })
                                }
                    
                                return res.status(200).json({
                                    success: 1,
                                    data: results
                                });
                            })
                        } else {
                            while (body.id < body.id) {
                                body.id + 1
                            }
                            console.log(body.id);
                            
                            createClass(body, (err, results) => {
                                if (err) {
                                    console.log(err);
                                    return res.status(500).json({
                                        success: 0,
                                        message: 'Database connection error'
                                    });
                                }
        
                                if(!results) {
                                    return res.json({
                                        success: 0,
                                        data: 'class creation failed!!'
                                    })
                                }
                    
                                return res.status(200).json({
                                    success: 1,
                                    data: results
                                });
                            })
                        }
                    })
                } else {
                    return res.status(401).json({
                        success: 0,
                        message: 'Class already exists'
                    });
                }
            })
        })
    },
    getClassDetail: (req,res) => {
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
            const id = req.params.id
            getClassByID(id, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }
    
                if (!results) {
                    return res.json({
                        success: 0,
                        message: `No class with ${id} found!`
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
    displayClasses: (req, res) => {
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


            getAllClasses(owner, (err, results) => {
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
    searchClass: (req,res) => {
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


            getClassByName(owner, query, (err, results) => {
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
    modifyClass: (req,res) => {
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

            const id = req.params.id;
            const owner = results.email;
            
            updateClass(body, id, owner, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        message: 'Failed to update class'
                    });
                }

                return res.json({
                    success: 1,
                    message: 'updated succesfully'
                });
            })
        })
    },
    removeClass: (req, res) => {
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

            const id = req.params.id;
            const owner = results.email;
            
            deleteClass(id, owner, (err, results) => {
                if (err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        data: 'Failed to delete class'
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