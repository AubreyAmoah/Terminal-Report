const { createProgram, getProgramByID, getProgramByName, getProgramByProgramName, getAllPrograms, updateProgram, deleteProgram } = require('./programme.service');
const { getUserByToken } = require('../users/user.service');

module.exports = {
    addProgram : (req, res) => {

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
            body.name.toLowerCase();
            if(body.name.startsWith("general")){
                const str1 = body.name.substring(0,3);
                const str2 = "-";
                const str3 = body.name.substring(7,8);
                const str4 = str1 + str2 + str3;
                body.short_name = str4.toLocaleUpperCase();

            } else {
                body.short_name = body.name.substring(0,3).toUpperCase();
            }
            body.created_by = owner;

            getProgramByProgramName(body.name, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }

                if (!results) {
                    createProgram(body, (err, results) => {
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
                                data: 'program creation failed!!'
                            })
                        }
            
                        return res.status(200).json({
                            success: 1,
                            data: results
                        });
                    })
                } else {
                    return res.status(401).json({
                        success: 0,
                        message: 'Program already exists'
                    });
                }
            })
        })
    },
    getProgramDetail: (req,res) => {
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
            getProgramByID(id, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }
    
                if (!results) {
                    return res.json({
                        success: 0,
                        message: `No program with ${id} found!`
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
    displayPrograms: (req, res) => {
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


            getAllPrograms(owner, (err, results) => {
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
    searchProgram: (req,res) => {
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


            getProgramByName(owner, query, (err, results) => {
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
    modifyProgram: (req,res) => {
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

            body.name.toLowerCase();
            if(body.name.startsWith("general")){
                const str1 = body.name.substring(0,3);
                const str2 = "-";
                const str3 = body.name.substring(7,8);
                const str4 = str1 + str2 + str3;
                body.short_name = str4.toLocaleUpperCase();

            } else {
                body.short_name = body.name.substring(0,3).toUpperCase();
            }

            const id = req.params.id;
            const owner = results.email;
            
            updateProgram(body, id, owner, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        message: 'Failed to update program'
                    });
                }

                return res.json({
                    success: 1,
                    message: 'program succesfully'
                });
            })
        })
    },
    removeProgram: (req, res) => {
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
            
            deleteProgram(id, owner, (err, results) => {
                if (err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        data: 'Failed to delete program'
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