import { gql } from "@apollo/client";

const GET_ALL_MESSAGE = gql`
  query {
    getAllMessage {
      _id
      firstName
      lastName
      email
      message
    }
  }
`;

export default GET_ALL_MESSAGE;
