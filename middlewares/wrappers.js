const wrapper = (action) => {
  return async (req, res, next) => {
    try {
      await action(req, res, next);

    } catch (error) {
      // console.log(error)
      next(error);
    }
};
};

module.exports = wrapper;

//   await console.log(await action(req, res, next))