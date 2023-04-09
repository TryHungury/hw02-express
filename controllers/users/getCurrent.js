const getCurrent = async (req, res) => {
    const {email, subscription} = req.user;

    if (req.user) {
    res.status(200).json({
      message: "Success",
      data: { user: { email, subscription } },
    });
    
    } else {
    res.status(400).json({
      message: "Bad Request",
      });
    }
}

module.exports = getCurrent;