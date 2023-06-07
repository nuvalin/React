import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

class GitHubUser extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push("/github");
    }

    render() {
        // new code
        const { id, login } = this.props.params;
        return (
            <div>
                <h1>User Login: {login}</h1>
                <h2>User Id: {id}</h2>
                <Button variant="primary" onClick={this.handleClick}>Go to GitHub Users</Button>
            </div>
        );
    }
}

export default (props) => (
    < GitHubUser
        {...props}
        params={useParams()}
    />
);