import { gql } from "apollo-boost";


const LoginMutation = gql`
  mutation($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      error {
        path
        msg
      }
    }
  }
`;

const SignupMutation = gql`
  mutation($password: String!,$email: String!) {
    signup(password: $password, email: $email){
      token
    }
  }
`;
export {
    LoginMutation,
    SignupMutation,
}