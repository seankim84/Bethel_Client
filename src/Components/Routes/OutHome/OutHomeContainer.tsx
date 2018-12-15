import { FormComponentProps } from "antd/lib/form/Form";
import React from "react";
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from "react-router-dom";
import { toast } from 'react-toastify';
import { LOG_USER_IN } from '../../../sharedQueries';
import { emailSignIn, emailSignInVariables } from "../../../types/api";
import Home from '../Home';
import { EMAIL_SIGN_IN } from './OutHome.queries';
import OutHomePresenter from "./OutHomePresenter";

interface IState {
    name: string;
    password: string;
}

interface IProps extends RouteComponentProps<any>, FormComponentProps{}

class EmailSignInMutation extends Mutation<emailSignIn, emailSignInVariables>{}

class OutHomeContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    if(!props.location.state){
      props.history.push('/');
    }
    this.state = {
      name:"",
      password: ""
    }
  }

  public render() {
    const { name, password } = this.state;
    return ( 
    <Mutation mutation={LOG_USER_IN}>
      {logUserIn => (
      <EmailSignInMutation
        mutation={EMAIL_SIGN_IN}
        variables={{
          email: `${name}`,
          password: `${password}`
        }}
        onCompleted={data => {
          const { EmailSignIn } = data;
          if (EmailSignIn.ok) {
            if(EmailSignIn.token){
               logUserIn({
                variables: {
                  token: EmailSignIn.token
                }
              });
              return <Home />;
            }
            return toast.success("You're verified")
          } else {
            return toast.error(EmailSignIn.error);
          }
        }}
      >
        {(mutation, { loading }) => {
        const onSubmit: React.FormEventHandler < HTMLFormElement > = event => {
          event.preventDefault();
        const isValid = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(`${name}`);
        if (isValid) {
            mutation()
        } else {
            toast.error("Please write a valid Email");
        }
      };
      return (
        <OutHomePresenter
          name={name}
          password={password}
          onSubmit={onSubmit}
          onInputChange={this.onInputChange}
        />
      );
      }}
      </EmailSignInMutation>
    )}</Mutation>
      
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default OutHomeContainer;