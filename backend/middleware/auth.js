import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next();
    } catch (error) {
        res.json({
            success: false, message: "Token không hợp lệ."
        })
    }
    
}

export default auth;