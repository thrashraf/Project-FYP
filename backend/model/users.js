import db from "../config/db.js";
import { refreshToken } from "../controller/refreshToken.js";

class user {
  static async checkEmail(email) {
    const sql = `SELECT * FROM users where email = '${email}'`;
    return db.execute(sql);
  }

  static async register(id, firstName, email, password) {
    const sql = `INSERT INTO
            users (id, name, email, password, role, RefreshToken)
        VALUES
        (
            '${id}', 
            '${firstName}',
            '${email}',
            '${password}',
            'staff',
            '${null}'
            

        )`;
    return db.execute(sql);
  }

  static async updateRefreshToken(id, refreshToken) {
    const sql = `UPDATE users
                    SET RefreshToken = '${refreshToken}'
                    WHERE id =  '${id}'`;
    return db.execute(sql);
  }

  static async findRefreshToken(refreshToken) {
    const sql = `SELECT * FROM USERS
                    WHERE RefreshToken = '${refreshToken}' `;
    return db.execute(sql);
  }

  static async deleteRefreshToken(id) {
    const sql = `UPDATE USERS
                    SET RefreshToken = '${null}'
                    WHERE id = '${id}'`;
    return db.execute(sql);
  }

  static async getAllUser() {
    const sql = `SELECT * FROM users`
    return db.execute(sql); 
  }
}

export default user;
