const logger = (req, res, next) => {
  console.log(req.method, req.originalUrl)

  next(); //passes to next middleware
}

module.exports = logger