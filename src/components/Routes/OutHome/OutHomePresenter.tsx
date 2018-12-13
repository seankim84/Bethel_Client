import { Button, Col, Form,  Icon, Input, Row } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import iphone from '../../../images/iphone.png';
import './OutHome.css';

const FormItem = Form.Item;

interface IProps {
    emailCode: string;
    password: string ;
} // React-Router는 자동적으로 props들을 모든 Route Component로 적용한다.


class OutHomePresenter extends React.Component<FormComponentProps & IProps>{

    public handleSubmit = (e:any) => {
        e.preventDefault();
    }

    public render() {
        const { getFieldDecorator }:any = this.props.form;
        return (
        <body>
        <Row align="middle"  gutter={48} justify="center" type="flex" >
            <Helmet><title>HOME | BETHEL</title></Helmet>
            <Col span={12}>
                <div className="LBox">
                    <img style={{ height:"586px" ,width:"375px"}} src={iphone} alt="worship" />
                </div>
            </Col>
            <Col span={12}>
                <div className="RBox">
                <h1>BETHEL CHURCH</h1>
                <span className="Explain">교회 소개와 설교를 보려면 로그인하세요</span>
                <div style={{display: "grid", justifyContent: "center"}}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    <Link to={"/social-login"}>Facebook으로 로그인하기</Link>
                </Button>
                </div>
                <Form style={{display: "grid", justifyItems:"center"}} onSubmit={this.handleSubmit} className="login-form">
                    <FormItem style={{width:"80%"}}> 
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username"  />
                        )}
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                        <div style={{display: "grid",justifyContent: "center"}}>
                            <Button style={{top:"10px"}} type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>
                        <br/>
                        <p> 계정이 없으신가요? <Link to={"/SignUp"}>register now!</Link></p>
                        </div>
                        
                    </FormItem>     
                </Form>
                </div>
            </Col>
        </Row>
        </body>
    )
  }  
}

export default Form.create<IProps>()(OutHomePresenter);