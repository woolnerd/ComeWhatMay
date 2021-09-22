import React, { Component } from 'react'
// import EditProfileFormContainer from "./edit_profile_form";
import RelativeIndexContainer from "./relative_index";

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile;
        
    }

    componentDidMount(){
        this.props.fetchUserProfile(this.props.currentUserId)
            .then(res=>this.setState({profile: res}))
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
            <button onClick={() => this.props.openModal('createRelative', this.props.profileId)}>Test Add Relative</button>
            <RelativeIndexContainer profileId={this.props.profileId}/>
            {/* <EditProfileFormContainer /> */}
          </div>
        );
    }
}


export default Profile;
