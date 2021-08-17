import { gql } from "@apollo/client";

const ADD_USER_DETAIL = gql`
  mutation AddUserDetail(
    $firstName: String
    $lastName: String
    $userName: String
    $email: String
    $phone: String
    $city: String
    $state: String
    $address: String
    $gender: String
  ) {
    addUserDetail(
      input: {
        firstname: $firstName
        lastname: $lastName
        username: $userName
        email: $email
        phone: $phone
        city: $city
        state: $state
        fullAddress: $address
        gender: $gender
      }
    )
  }
`;

export default ADD_USER_DETAIL;
