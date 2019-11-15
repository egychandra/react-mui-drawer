import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import NotFound from '../Errors/404'
import User from './User'


export default ({ match: { url }, users }) =>
<Fragment>
    <ul>
        {users.map(({ id, name }) =>
            <li key={id}>
                <Link to={`${url}/${name}`}>{name}</Link>
            </li>
        )}
    </ul>

    <Route exact path={url} render={
        () => <h3>Please select a user from above.</h3>
        } />
    <Route path={`${url}/:userName`} render={
        props => {
            const user = users.find(user => user.name === props.match.params.userName)

            if (!user) {
                return <NotFound />
            }

            return <User {...props} {...user} />
        }
    } />
</Fragment>