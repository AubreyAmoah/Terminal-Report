const pool = require('../../config/database');

module.exports = {
    createClass: (data, callBack) => {
        pool.query(
            `insert into classes (id, name, createdBy) values (?,?,?)`, [
                data.id,
                data.name,
                data.createdBy
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    updateClass: (data, id, owner, callBack) => {
        pool.query(
            `update classes set name = ? where id = ? and createdBy = ?`, [
                data.name,
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
    deleteClass: (id, owner, callBack) => {
        pool.query(
            `delete from classes where id = ? and createdBy = ?`,
            [id,owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getClassByID: (id, owner, callBack) => {
        pool.query(
            `select * from classes where id = ? and createdBy = ?`,
            [id, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getClassByClassName: (name, owner, callBack) => {
        pool.query(
            `select * from classes where name = ? and createdBy = ?`,
            [name, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getAllClasses: (owner, callBack) => {
        pool.query(
            `select * from classes where createdBy = ?`,
            [owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getClassByName: (owner, query, callBack) => {
        pool.query(
            `select * from classes where createdBy = ? and name LIKE '%${query}%'`,
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