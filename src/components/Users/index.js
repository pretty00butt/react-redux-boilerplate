import React, { Component } from "react";

export default class HomeComponent extends Component {
  render() {
    const { users } = this.props;

    return (
      <section>
        <ul>
          {users.map(user => (
            <li>
              <ol>
                <li>ID: {user.id}</li>
                <li>NAME: {user.name}</li>
              </ol>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
