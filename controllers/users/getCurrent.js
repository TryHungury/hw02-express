const getCurrent = async (req, res, next) => {
  const { email, subscription } = req.user;
  
  res.status(200).json({
    status: "Success",
    data: { user: { email, subscription } },
  });
};

module.exports = getCurrent;
