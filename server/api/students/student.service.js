const pool = require('../../config/database');

module.exports = {
    createStudent: (data, callBack) => {
        pool.query(
            `insert into students (first_name, middle_name, last_name, index_number, year_of_admission, created_by) values (?,?,?,?,?,?)`, [
                data.first_name,data.middle_name,data.last_name,data.index_number,data.year_of_admission,data.created_by
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    updateStudent: (data, index, owner, callBack) => {
        pool.query(
            `update students set first_name = ?, middle_name = ?, last_name = ?, year_of_admission = ? where index_number = ? and created_by = ?`, [
                data.first_name,
                data.middle_name,
                data.last_name,
                data.year_of_admission,
                index,
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
    deleteStudent: (index_number, owner, callBack) => {
        pool.query(
            `delete from students where index_number = ? and created_by = ?`,
            [index_number,owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getStudentByIndex: (index, owner, callBack) => {
        pool.query(
            `select * from students where index_number = ? and created_by = ?`,
            [index, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    selectLastStudentID: (callBack) => {
        pool.query(
            `select index_number from students order by id desc limit 1`, [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },

    getAllStudents: (owner, callBack) => {
        pool.query(
            `select * from students where created_by = ?`,
            [owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getStudentsByName: (owner, query, callBack) => {
        pool.query(
            `select * from students where created_by = ? and first_name LIKE '%${query}%' or middle_name LIKE '%${query}%' or last_name LIKE '%${query}%' or index_number LIKE '%${query}%'`,
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