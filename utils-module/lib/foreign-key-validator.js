module.exports = (model, id) => {
  console.log(model);
  return model.findOne({ _id: id }).then(result => {
    if (result) {
      return Promise.resolve('true');
    } else
      return Promise.reject(
        new Error(
          `FK Constraint 'checkObjectsExists' for '${id.toString()}' failed`
        )
      );
  });
};
