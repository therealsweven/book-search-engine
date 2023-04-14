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
    uer: User
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # books: [Book]
    # book(bookId: ID!): Book
  }

  type Mutation {
    createUser(email: String!, username: String!, password: String!): AAuth
    login(email: String, username: String, password: String!): Auth
    saveBook(bookId: String!, userId: String!): User
    deleteBook(bookId: String!, userId: String!): User
  }
`;

module.exports = typeDefs;
