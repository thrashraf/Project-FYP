import db from "../config/db.js";

class user {

    static async register(id, firstName, email, password) {

        console.log(password)
        const sql = `INSERT INTO
            users (id, name, email, password)
        VALUES
        (
            '${id}',
            '${firstName}',
            '${email}',
            '${password}'
        )`;
        return db.execute(sql);
    }
}

export default user;