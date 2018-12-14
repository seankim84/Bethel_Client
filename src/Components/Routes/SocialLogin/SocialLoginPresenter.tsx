
import React from "react";
// import { MutationFn } from "react-apollo";
import FacebookLogin from 'react-facebook-login';
import Helmet from "react-helmet";
import styled from "../../../typed-components";


const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;


const Link = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface IProps {
  loginCallback: ({response}:any) => void;
}

const SocialLoginPresenter: React.SFC<IProps> = ({ loginCallback }) => (
  <Container>
    <Helmet>
      <title>Social Login | Bethel</title>
    </Helmet>
    <FacebookLogin
      appId="275319959852656"
      autoLoad={false}
      callback={loginCallback}
      fields="first_name, last_name, email, picture"
      onClick={() => (
        <Link>Facebook Login</Link>
      )}
    />
  </Container>
);

export default SocialLoginPresenter;