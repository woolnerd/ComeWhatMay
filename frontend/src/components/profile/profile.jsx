import React, { Component } from 'react'

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile;
        
    }

    componentDidMount(){
        this.props.fetchUserProfile(this.props.currentUserId)
            .then(res=>this.setState({profile: res}))
//         this.props.fetchAllRelatives(this.props.profileId)
    }


        render() {

        if (!this.state.profile) {
            return null
        } 
        const profile = this.props.profile[this.props.profileId]
        return (
          <div>
            <h1>test</h1>
            <h1>{profile.email}</h1>
            <h1>{profile.householdName}</h1>
            <h1>{profile.householdSize}</h1>
            <h1>{profile.phoneNumber}</h1>
            <button onClick={() => this.props.openModal('createRelative')}>Test Add Relative</button>
          </div>
        );
    }
}


export default Profile;
