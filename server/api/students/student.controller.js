const { createStudent, getStudentByIndex, getStudentsByName, getAllStudents, updateStudent, deleteStudent } = require('./student.service');
const { getUserByToken } = require('../users/user.service');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

module.exports = {
    addStudent : (req, res) => {

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

            const body = req.body;
            body.index_number = '12348';
            body.created_by = owner

            getStudentByIndex(body.index_number, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }

                if (!results) {
                    createStudent(body, (err, results) => {
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
                    return res.status(201).json({
                        success: 0,
                        message: 'Student already exists'
                    });
                }
            })
        })
    },
    getStudentDetail: (req,res) => {
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

            const body = req.body;
            
            const owner = results.email
            const index_number = req.params.index_number
            body.created_by = owner
            getStudentByIndex(index_number, owner, (err, results) => {
                if(err) {
                    console.log(err);
                }
    
                if (!results) {
                    return res.status(201).json({
                        success: 0,
                        message: `No students with index number ${index_number} found!`
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
    displayStudents: (req, res) => {
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
            const owner = results.email
            body.created_by = owner
            const creator = body.created_by

            getAllStudents(creator, (err, results) => {
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
    searchStudent: (req,res) => {
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
            const owner = results.email
            const query = req.query.search
            body.created_by = owner
            const creator = body.created_by

            getStudentsByName(creator, query, (err, results) => {
                if(err) {
                    console.log(err)
                }

                if (!results) {
                    return res.status(201).json({
                        success: 0,
                        data: 'No results found'
                    });
                }

                console.log(creator,query);
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            })
        })
    },
    modifyStudent: (req,res) => {
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
            const index_number = req.params.index_number;
            const owner = results.email;
            
            updateStudent(body, index_number, owner, (err, results) => {
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
    removeStudent: (req, res) => {
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

            const index_number = req.params.index_number;
            const owner = results.email;
            
            deleteStudent(index_number, owner, (err, results) => {
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