import { gql } from 'apollo-boost';

export const IS_LOGGED_IN = gql`
    {
        auth { # login 유무를 알려주기 위해
            isLoggedIn @client # 이게 client이므로 api에 보내지 않고, cache에 보낸다
        }
    }
`;
