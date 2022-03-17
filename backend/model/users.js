import db from "../config/db.js";

class user {

    static async register(firstName, lastName, email, password) {
        const sql = ``;
        return db.execute(sql);
    }
}

export default user;