import { gql } from '@apollo/client';

const GET_FILES = gql`
  query getFiles {
    files {
      id
      googleId
      name
      iconLink
      webViewLink
      tags
    }
  }
`;

export default GET_FILES;
