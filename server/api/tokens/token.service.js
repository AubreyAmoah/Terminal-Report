const pool = require('../../config/database');

module.exports = {
    createAdminRefreshToken: (email, token, callBack) => {
        pool.query(
            `insert into admin_tokens(email,token)
                        values(?,?)`,
            [
                email,
                token
            ],
            (error, results, fields) => {
                if(error) {
                  return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    compareAdminRefreshToken: (token, callBack) => {
        pool.query(
            `select * from admin_tokens where token = ?`,
            [token],
            (error, results, fields) => {
                if (error){
                    callBack(error);
                }

                return callBack(null, results);
            }
            )
    },
    deleteAdminRefreshToken: (token, callBack) => {
        pool.query(
            `delete from admin_tokens where token = ?`,
            [token],
            (error, results, fields) => {
                if (error){
                    callBack(error);
                }

                return callBack(null, results);
            }
            )
    }
}