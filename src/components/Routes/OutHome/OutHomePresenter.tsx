import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import iphone from '../../../images/iphone.png';
import Input from '../../Input';

interface IProps {
    emailCode: string;
    password: string ;
} // React-Router는 자동적으로 props들을 모든 Route Component로 적용한다.

const OutHomePresenter: React.SFC<IProps> = ({ emailCode, password }) => (
    <body>
        <Helmet><title>HOME | BETHEL</title></Helmet>
        <div>
            <div>
              <img src={iphone} alt="worship" />
            </div>
            <div>
              <h1>BETHEL CHURCH</h1>
              <h2>베델교회에 오신 것을 환영합니다</h2>
              <div>
                <Link to={"/social-login"}>
                    <button>FACEBOOK으로 로그인 </button>
                </Link></div>
                <div>
                 <Link to={"/email-login"}>
                    <button>EMAIL로 로그인</button>
                 </Link>
              </div>
              <div>
              <Input type="text" placeholder={emailCode} value={emailCode} />
              <Input type="password" placeholder={password} value="sean" />
              <Link to={"/email-login"}>
                <button> 가입 </button>
              </Link>
              </div>
              
            </div>
        </div>
  </body>
);

export default OutHomePresenter;