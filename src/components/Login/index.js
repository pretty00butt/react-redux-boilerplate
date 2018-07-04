import React, { Component } from "react";
import { string } from "prop-types";

import Button from "@/components/Common/Button";

export default class LoginComponent extends Component {
  static propTypes = {
    username: string.isRequired
  };

  render() {
    const { username } = this.props;

    return (
      <section>
        <h1>{username}</h1>
        <Button text="로그인" />
      </section>
    );
  }
}
