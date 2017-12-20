import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/UsersActions'
import UsersComponent from '@/components/Users'

class UsersContainer extends Component {
  componentDidMount () {
    this.getUsers()
  }

  getUsers = async () => {
    this.props.actions.getUsers()
  }

  render () {
    return (
      <UsersComponent
        users={this.props.users.users}

        getUsers={this.getUsers}
      />
    )
  }
}

UsersContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
