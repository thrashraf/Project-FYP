import user from "../model/users.js";
import jwt from "jsonwebtoken"

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        console.log('token: ' + req.cookies.refreshToken);

        if (!refreshToken) return res.sendStatus(401);
        
        const [userInfo] = await user.findRefreshToken(refreshToken);

        if (!userInfo[0]) return res.sendStatus(403);

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {

            if (err) return res.sendStatus(403);

            const accessToken = jwt.sign({
                
                id: userInfo.id,
                name: userInfo.name,
                email: userInfo.email,
                role: userInfo.role,
                profile_picture: userInfo.profile_picture

            }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });

            res.json({
                accessToken
            });
        });

    } catch (error) {
        console.log(error)
    }
}