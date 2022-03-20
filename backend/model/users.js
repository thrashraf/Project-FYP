import db from "../config/db.js";

class user {
    static async checkEmail(email) {
        const sql = `SELECT * FROM users where email = '${email}'`;
        return db.execute(sql)
    }

    static async register(id, firstName, email, password) {

        const sql = `INSERT INTO
            users (id, name, email, password, role)
        VALUES
        (
            '${id}', 
            '${firstName}',
            '${email}',
            '${password}',
            'staff'

        )`;
        return db.execute(sql);
    }
   
}

export default user;