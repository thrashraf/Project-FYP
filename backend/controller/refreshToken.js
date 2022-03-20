import user from "../model/users.js";
import jwt from "jsonwebtoken"

export const refreshToken = async(req, res) => { 
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!isValid) return res.sendStatus(401);
        const userInfo = await user.findRefreshToken(refreshToken)

        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = userInfo[0].id;
            
            const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET)
            expiresIn: '15s'

            res.json({ accessToken });
        });
        
    } catch (error) {
        console.log(first)
        
    }
}