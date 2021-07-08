import { gql } from '@apollo/client';

const GET_TAGS = gql`
    query getTags {
      tags {
        name
      }
    }
`;

export default GET_TAGS;
