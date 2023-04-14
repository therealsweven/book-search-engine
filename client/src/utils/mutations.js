import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $username: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $userId: String!) {
    saveBook(bookId: $bookId, userId: $userId) {
      _id
      username
      savedBooks {
        _id
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`

  mutation deleteBook($bookId: String!, $userId: String!){
  deleteBook(bookId: $bookId, userId: $userId) {
    savedBooks {
      bookId
      title
    }
    _id
    username
  }
}
`;
