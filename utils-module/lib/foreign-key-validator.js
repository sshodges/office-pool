module.exports = (model, id) => {
  console.log(model);
  return new Promise((resolve, reject) => {
    model.findOne({ _id: id }, (err, result) => {
      if (result) {
        return resolve(true);
      } else if (err) {
        console.log('in fale');
        return reject(new Error('Oops!'));
      }
    });
  });
};
