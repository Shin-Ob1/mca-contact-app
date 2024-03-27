# Error Handling Documentation

## errorHandler.js
This middleware handles different types of errors and sends appropriate responses.

- **Functionality:** Handles validation errors, not found errors, unauthorized errors, forbidden errors, and server errors.
- **Usage:** Used as the last middleware in the application to catch and handle errors.
- **Dependencies:** Requires constants.js.
- **Example:**
***javascript***
```
const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed",
            message: err.message,
            stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found",
            message: err.message,
            stackTrace: err.stack
            });
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized",
            message: err.message,
            stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden",
            message: err.message,
            stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error",
            message: err.message,
            stackTrace: err.stack
            });
        default:
            console.log("No Error, All good !");
            break;
    }
};

module.exports = errorHandler;
```