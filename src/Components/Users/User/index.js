import React, { Fragment } from 'react'

export default ({ match: { url }, name, username, email, phone, website }) =>
<Fragment>
    <h1>{name}</h1>
    <p>{username}</p>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{website}</p>
    
</Fragment>