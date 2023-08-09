const pool = require('../../config/database');

module.exports = {
    createProgram: (data, callBack) => {
        pool.query(
            `insert into programme (name, short_name, created_by) values (?,?,?)`, [
                data.name,
                data.short_name,
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
    updateProgram: (data, id, owner, callBack) => {
        pool.query(
            `update programme set name = ?, short_name = ? where id = ? and created_by = ?`, [
                data.name,
                data.short_name,
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
    deleteProgram: (id, owner, callBack) => {
        pool.query(
            `delete from programme where id = ? and created_by = ?`,
            [id,owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getProgramByID: (id, owner, callBack) => {
        pool.query(
            `select * from programme where id = ? and created_by = ?`,
            [id, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getProgramByProgramName: (name, owner, callBack) => {
        pool.query(
            `select * from programme where name = ? and created_by = ?`,
            [name, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getAllPrograms: (owner, callBack) => {
        pool.query(
            `select * from programme where created_by = ?`,
            [owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getProgramByName: (owner, query, callBack) => {
        pool.query(
            `select * from programme where created_by = ? and name LIKE '%${query}%' or short_name LIKE '%${query}%'`,
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