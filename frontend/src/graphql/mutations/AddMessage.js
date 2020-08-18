import { gql } from "@apollo/client";

const ADD_MESSAGE = gql`
  mutation AddMessage(
    $firstName: String
    $lastName: String
    $email: String!
    $message: String!
  ) {
    addMessage(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        message: $message
      }
    )
  }
`;

export default ADD_MESSAGE;
