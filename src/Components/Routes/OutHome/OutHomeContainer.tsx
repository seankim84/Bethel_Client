import { FormComponentProps } from "antd/lib/form/Form";
import React from "react";
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from "react-router-dom";
import { toast } from 'react-toastify';
import OutHomePresenter from "./OutHomePresenter";
import { EMAIL_SIGN_IN } from './OutHomeQueries';

interface IState {
    name: string;
    password: string;
}

interface IMutationInterface {
  email: string;
  password: string;
}

class EmailSignInMutation extends Mutation<any, IMutationInterface>{}

class OutHomeContainer extends React.Component<
  RouteComponentProps<any> & FormComponentProps,
  IState
> {
  public state = {
    name: "",
    password: ""
  };

  public render() {
    const { name, password } = this.state;
    return (
      <EmailSignInMutation
        mutation={EMAIL_SIGN_IN}
        variables={{
          email: `${name}`,
          password: `${password}`
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
