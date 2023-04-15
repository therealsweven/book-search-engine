const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User

  }

  input SavingBook {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Mutation {
    createUser(email: String!, username: String!, password: String!): Auth
    login(email: String, username: String, password: String!): Auth
    saveBook(AddingBook: SavingBook!): User
    deleteBook(bookId: String!, userId: String!): User
  }
`;

module.exports = typeDefs;
