
module.exports = (err, req, res) => {
  if (res.headersSent) {
    return next(err);
  }
  const { error, message, status } = err;
  const errorMsg = {
    Error: error || 'Undefined',
    Message: message || 'Error Occurred',
    Status: status || 200,
    Timestamp: new Date(),
  };
  res.status(status).send(errorMsg);
};
