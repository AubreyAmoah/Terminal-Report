const pool = require('../../config/database');

module.exports = {
    createAdmin: (data, callBack) => {
        pool.query(
            `insert into admin (email, password, first_name, last_name) values (?,?,?,?)`, [
                data.email,data.password,data.first_name,data.last_name,
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    getUserByAdminEmail: (email, callBack) => {
        pool.query(
            `select * from admin where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getUserByToken: (token, callBack) => {
        pool.query(
            `select * from admin_tokens where token = ?`,
            [token],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }
}