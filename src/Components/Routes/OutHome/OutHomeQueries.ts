import { gql } from 'apollo-boost';

export const EMAIL_SIGN_IN = gql`
         mutation emailSignIn($email: String! $password: String!) {
           EmailSignInResponse(email: $email, password: $password){
               ok
               error
           }
         }
       `;