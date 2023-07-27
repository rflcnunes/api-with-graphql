const { ApolloServer, gql } = require('apollo-server')

const users = [
  {
    name: "River",
    active: true
  },
  {
    name: "Willow",
    active: false
  }
]

const typeDefs = gql `
  type User {
    name: String!
    active: Boolean!
    email: String
  }
`


const server = new ApolloServer( { typeDefs, resolvers } )