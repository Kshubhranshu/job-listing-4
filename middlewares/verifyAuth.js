const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.currentUserId = decode.userId;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized access! Invalid token",
            isTokenInValid: true,
        });
    }
};

module.exports = verifyToken;
