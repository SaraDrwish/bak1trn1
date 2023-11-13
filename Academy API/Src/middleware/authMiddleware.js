const loggingMiddleware = (req, res, next) => {
    console.log(`[${new Date().toUTCString()}] - ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = {
    loggingMiddleware
};