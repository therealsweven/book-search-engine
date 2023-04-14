import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($email: String!, $username: String!, $password: String!) {
    createUser(email: $email, username: $username, password: $password) {
      token
      uer {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation($bookId: String!, $saveBookUserId2: String!) {
    saveBook(bookId: $bookId, userId: $saveBookUserId2) {
      _id
      username
      savedBooks {
        _id
        title
      }
    }
  }
`;
