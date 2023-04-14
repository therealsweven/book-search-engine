import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    savedBooks {
      _id
      title
      image
      description
      authors
      bookId
      link
    }
  }
`