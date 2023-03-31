const getCurrent = async (req, res, next) => {
  const { email, subscription } = req.user;
  
  if (req.user) {
    res.status(200).json({
      status: "Success",
      data: { user: { email, subscription } },
    });
    
  } else {
  res.status(400).json({
    status: "Bad Request",
    });
  }
};

module.exports = getCurrent;
