// importamos los modelos de la base de datos
const { UserModel } = require('../dataBase/models');

// importamos las acciones(logica de negocio) para los resolvers
const {
  loginAction,
  signupAction,
} = require('../actions/userActions');
const {
  createPostAction
} = require('../actions/postActions');
const {
  addPostToUserAction
} = require('../actions/userActions');

// Resolvers funciones que son la logica del negocio y son acciones que define como se
// comportan las queries y las mutations
// parent --- es lo que necesita la funcion para que funcione como un resolver
// args -- argumentos que recibe la funcion
// context -- se variables que se comparte atravez de todos los resolvers
// info 

const resolvers = {
  Query: {
    queryWithLogin: (parent, args, context, info) => {
      return { message: 'este es un query con login' }
    },
    simpleQuery: (parent, args, context, info) => {
      return { message: 'este es un simple query' }
    }
  },
  Mutation: {
    signup: (paret, args, context, info) => {
      return signupAction({ ...args.data }).then(result => {
        return result;
      }).catch(err => {
        return err;
      });
    },
    login: (parent, args, context, info) => {
      const { email, password } = args;
      return loginAction(email, password).then(result => {
        return result;
      }).catch(error => {
        return error;
      })
    },
    cretePost: (parent, args, context, info) => {
      const { user } = context;
      console.log("TCL: user", user)
      return createPostAction({ ...args.postData })
        .then(postInfo => {
          console.log("TCL: postInfo", postInfo)
          return addPostToUserAction(postInfo, user)
            .then((message) => {
              return (message)
            });
        })
        .catch(err => { return err });
    }
  }
}

// exporta resolvers
module.exports = resolvers;
