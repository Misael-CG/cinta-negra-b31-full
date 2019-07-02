// importamos los paquetes que vamos a utilizar
const mongoose = require('mongoose');
//importamos los esquemas
const UserSchema = require('../schemas/userSchema');
const PostSchema = require('../schemas/postSchema');

// creacion de models, crea un model con el nombre de la coleccion y el esquema
const UserModel = mongoose.model("usersCintaNegra", UserSchema);
const PostModel = mongoose.model('postsCintaNegra', PostSchema)

// exporta un objeto de modelos
module.exports = {
  UserModel,
  PostModel,
}
