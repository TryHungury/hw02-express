const { User } = require("../../models/user");

const updateSubscription = async (req, res, next) => {
  const { _id, subscription, email } = req.user;

  await User.findByIdAndUpdate(_id, req.body);
  
  if (req.user) {
    res.status(201).json({
      status: "Success",
      data: {
        subscription,
        email,
      },
    });
    
  } else {
    res.status(400).json({
    status: "Bad Request",
    })

  }
};

module.exports = updateSubscription;
