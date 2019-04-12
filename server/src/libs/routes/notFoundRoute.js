module.exports = (req, res) => {
  // console.log('inside not found route')
  res.send({
    error: "not found",
    message: "Not Found Route",
    status: "404"
  });
  // return next();
};
