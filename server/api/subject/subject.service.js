const pool = require('../../config/database');

module.exports = {
    createSubject: (data, callBack) => {
        pool.query(
            `insert into subject (name, type, subject_code, year, created_by) values (?,?,?,?,?)`, [
                data.name,
                data.type,
                data.subject_code,
                data.year,
                data.created_by
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    updateSubject: (data, id, owner, callBack) => {
        pool.query(
            `update subject set name = ?, year = ?, type = ?, subject_code = ? where id = ? and created_by = ?`, [
                data.name,
                data.year,
                data.type,
                data.subject_code,
                id,
                owner
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    deleteSubject: (id, owner, callBack) => {
        pool.query(
            `delete from subject where id = ? and created_by = ?`,
            [id,owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getSubjectByID: (id, owner, callBack) => {
        pool.query(
            `select * from subject where id = ? and created_by = ?`,
            [id, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getSubjectBySubjectCode: (subject_code, owner, callBack) => {
        pool.query(
            `select * from subject where subject_code = ? and created_by = ?`,
            [subject_code, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getSubjectBySubjectName: (name, owner, callBack) => {
        pool.query(
            `select * from subject where name = ? and created_by = ?`,
            [name, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getAllSubjects: (owner, callBack) => {
        pool.query(
            `select * from subject where created_by = ?`,
            [owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getSubjectByName: (owner, query, callBack) => {
        pool.query(
            `select * from subject where created_by = ? and name LIKE '%${query}%' or subject_code LIKE '%${query}%'`,
            [owner],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    }
}