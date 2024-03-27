# Middleware Documentation

## validateTokenHandler.js
This middleware validates the JWT token sent in the request header.

- **Functionality:** Verifies the JWT token and attaches the decoded user information to the request object.
- **Usage:** Used in protected routes to authenticate users.
- **Dependencies:** Requires express-async-handler and jsonwebtoken.
- **Example:**
***javascri***
```
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(404);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
        });

        if (!token) {
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;
```