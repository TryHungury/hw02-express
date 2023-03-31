const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: null });
  
  if (req.user) {
    res.status(204).json();
    
  } else {  
    res.status(400).json({
    status: "Bad Request",
    })

  }
};

module.exports = logout;
