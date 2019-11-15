import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './Errors/404'
import Users from './Users'
import Layout from './Layout'

export default class extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    this.setState({ users })
  }

  render() {
    const { users } = this.state

    return <BrowserRouter>
      <Layout users={users}>
        <Switch>
          <Route exact path="/" render={
            () => <div>Home</div>
            } />
          <Route path="/users" render={
            props => <Users {...props} users={users} /> 
            } />
          <Route component={NotFound} />       
        </Switch>       
      </Layout>
    </BrowserRouter>   
  }
}