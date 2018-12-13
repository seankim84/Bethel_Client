import { FormComponentProps } from "antd/lib/form/Form";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import OutHomePresenter from "./OutHomePresenter";

interface IState {
    emailCode: string;
    password: string;
}

class OutHomeContainer extends React.Component<
    RouteComponentProps<any> & FormComponentProps,
    IState
> {
  public state = {
    emailCode: "example@example.com",
    password: "Input the Password "
  };

  public render() {
    const { emailCode, password } = this.state;
    return (
      <OutHomePresenter
        emailCode={emailCode}
        password={password}
      />
    );
  }


}


export default OutHomeContainer;
