const pool = require('../../config/database');

module.exports = {
    createStaff: (data, callBack) => {
        pool.query(
            `insert into staffs (staff_id, password, first_name, middlename, last_name, phonenumber, createdBy) values (?,?,?,?,?,?,?)`, [
                data.staff_id,data.password,data.first_name,data.last_name,data.middlename,data.phone_number,data.createdBy
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    updateStaff: (data, staffid, owner, callBack) => {
        pool.query(
            `update staffs set first_name = ?, middlename = ?, last_name = ?, phonenumber = ? where staff_id = ? and createdBy = ?`, [
                data.first_name,
                data.middlename,
                data.last_name,
                data.phonenumber,
                staffid,
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
    updateStaffPassword: (password, staffid, callBack) => {
        pool.query(
            `update staffs set password = ? where staff_id = ?`,
            [password, staffid],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    deleteStaff: (staffid, owner, callBack) => {
        pool.query(
            `delete from staffs where staff_id = ? and createdBy = ?`,
            [staffid,owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getStaffByStaffID: (staff_id, owner, callBack) => {
        pool.query(
            `select * from staffs where staff_id = ? and createdBy = ?`,
            [staff_id, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getByStaffID: (staff_id, callBack) => {
        pool.query(
            `select * from staffs where staff_id = ?`,
            [staff_id, owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    getAllStaffs: (owner, callBack) => {
        pool.query(
            `select * from staffs where createdBy = ?`,
            [owner],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getStaffsByName: (owner, query, callBack) => {
        pool.query(
            `select * from staffs where createdBy = ? and first_name LIKE '%${query}%' or middlename LIKE '%${query}%' or last_name LIKE '%${query}%' or staff_id LIKE '%${query}%'`,
            [owner],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results)
            }
        )
    },
    selectLastStaffID: (callBack) => {
        pool.query(
            `select staff_id from staffs order by id desc limit 1`, [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
}