import db from "../config/db.js";

class user {
<<<<<<< HEAD
 
=======

>>>>>>> 3f3ebadd462a45e2aafbcd1588606f1ecc6f0c69
    static async checkEmail(email) {
        const sql = `SELECT * FROM users where email = '${email}'`;
        return db.execute(sql)
    }

    static async register(id, firstName, email, password) {

<<<<<<< HEAD
        const sql = `INSERT INTO
            users (id, name, email, password, role)
=======
        console.log(password)
        const sql = `INSERT INTO
            users (id, name, email, password)
>>>>>>> 3f3ebadd462a45e2aafbcd1588606f1ecc6f0c69
        VALUES
        (
            '${id}',
            '${firstName}',
            '${email}',
            '${password}'
<<<<<<< HEAD
            'staff'
=======
>>>>>>> 3f3ebadd462a45e2aafbcd1588606f1ecc6f0c69
        )`;
        return db.execute(sql);
    }
}

export default user;