import React, { Component } from 'react'

export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.profile
    }

    componentDidMount(){
        this.props.fetchUserProfile()
    }

    render() {

        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}


export default Profile;