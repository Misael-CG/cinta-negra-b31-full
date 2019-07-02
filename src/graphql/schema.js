
const { gql } = require('apollo-server');

// typeDefs, esquema de graphql que define los datos que seran almacenados en la aplicacion
// y la logica de negocio (queries y mutations)
// Queries -- GET -- pide datos
// Mutations -- PUT, PATCH, DELETE, POST -- sirven para crear datos, eliminarlos y actualizarlos
// NOTA: necesita como minimo un query para funcionar.

//@AuthDirective - sirve para decir cuales queries necesitan login para ejecutarce

const typeDefs = gql`
  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

  type Auth {
    token: String
    message: String
  }

  type Message {
    message: String
  }

  input PostInput {
    title: String, 
    content: String,
  }

  input UserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
    queryWithLogin: Message @AuthDirective
    simpleQuery: Message 
  }

  type Mutation {
    signup(data: UserInput): Auth
    login(email: String!, password: String!): Auth
    cretePost(postData: PostInput) : Message @AuthDirective
  }
`;

// exporta typeDefs
module.exports = typeDefs;
