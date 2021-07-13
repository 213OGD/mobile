import { gql } from '@apollo/client';

const DELETE_TAG = gql`
  mutation deleteTag($args: tagInput) {
    deleteTag(tagInput: $args) {
      id
      tags
    }
  }
`;

export default DELETE_TAG;
