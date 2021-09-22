import React from 'react';
import { connect } from 'react-redux';
import { createUserProfile } from '../../actions/profile_actions';
import "./profile.css";

class CreateProfileForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.profile;

    }

    handleSubmit(e){
        e.preventDefault()
        this.props
          .createUserProfile(this.state)
        //   .then((res) => console.log(res));
        // .then((res) => this.props.history.push(`/profile${res.profile._id}`))
        
    }

    update(field){
        return e => { 
        let value = e.target.value 
        // if (
        //     field === "phoneNumber" ||
        //     field === "householdSize"
        // ) {
        //     value = parseInt(e.target.value);
        // }
        this.setState({[field]: value})
        }
    }

    render(){

        return (
          <div className="create-form">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
              <label>
                Household Name:
                <input
                  onChange={this.update("householdName")}
                  type="text"
                  value={this.state.householdName}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  onChange={this.update("email")}
                  type="text"
                  value={this.state.email}
                />
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  onChange={this.update("phoneNumber")}
                  type="text"
                  value={this.state.phoneNumber}
                />
              </label>
              <br />
              <label>Household Size:
                <input
                  onChange={this.update("householdSize")}
                  type="text"
                  value={this.state.householdSize}
                />
              </label>
              <button>Create Profile</button>
            </form>
          </div>
        );
        
    }


}

const mSTP = ({session}) => {
    return {
      currentUser: session.user.id,
      profile: {
        user: session.user.id,
        email: "",
        householdName: "",
        householdSize: "",
        phoneNumber: "",
      },
    };
}

const mDTP = (dispatch) => {
  return {
    createUserProfile: (profile)=> dispatch(createUserProfile(profile))
  };
};


export default connect(mSTP, mDTP)(CreateProfileForm)