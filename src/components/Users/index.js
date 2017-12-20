import React, { Component } from 'react'
import { Grid, Button } from 'react-bootstrap'

export default class HomeComponent extends Component {
  render () {
    const {
      users
    } = this.props

    return (
      <Grid>
        <ul>
          {users.map(user => (
            <li>
              <ol>
                <li>ID: {user.id}</li>
                <li>NAME: {user.name}</li>
              </ol>
            </li>
          ))
          }
        </ul>
      </Grid>
    )
  }
}

