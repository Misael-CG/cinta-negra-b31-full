const { PostModel } = require('../dataBase/models');

const createPostAction = (postData) => {
  return new Promise((resolve, reject) => {
    PostModel.create(postData)
      .then((postAdded) => {
        resolve(postAdded);
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  createPostAction,
}