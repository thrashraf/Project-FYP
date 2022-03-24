import db from "../config/db.js";

class admin {
  
    static async updateUser(id, name, email, role) {
        const sql = `
        UPDATE
            users
        SET
            name = '${name}',
            email = '${email}',
            role = '${role}'
        where
            id = '${id}'        
    `
        return db.execute(sql)
    }
}

export default admin;
