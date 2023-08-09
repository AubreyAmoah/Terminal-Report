const { createSubject, getSubjectBySubjectCode, getSubjectByName, getSubjectByID, getAllSubjects, updateSubject, deleteSubject, getSubjectBySubjectName } = require('./subject.service');
const { getUserByToken } = require('../users/user.service');

module.exports = {
    addSubject : (req, res) => {

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
            body.created_by = owner;

            getSubjectBySubjectCode(body.subject_code, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }

                if(!results) {
                    createSubject(body, (err, results) => {
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
                                data: 'subject creation failed!!'
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
                        message: 'There is already a subject in current year'
                    });
                }
            })
        })
    },
    getSubjectDetail: (req,res) => {
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
            getSubjectByID(id, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }
    
                if (!results) {
                    return res.json({
                        success: 0,
                        message: `No subject with ${id} found!`
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
    displaySubjects: (req, res) => {
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


            getAllSubjects(owner, (err, results) => {
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
    searchSubject: (req,res) => {
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


            getSubjectByName(owner, query, (err, results) => {
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
    modifySubject: (req,res) => {
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
            
            updateSubject(body, id, owner, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        message: 'Failed to update subject'
                    });
                }

                return res.json({
                    success: 1,
                    message: 'updated succesfully'
                });
            })
        })
    },
    removeSubject: (req, res) => {
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
            
            deleteSubject(id, owner, (err, results) => {
                if (err) {
                    console.log(err)
                }

                if (!results) {
                    return res.json({
                        success: 0,
                        data: 'Failed to delete subject'
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