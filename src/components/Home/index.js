import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeComponent extends Component {
  render() {
    return (
      <section>
        <h1>Welcome to React</h1>
        <Link to="/login">로그인</Link>
      </section>
    );
  }
}
