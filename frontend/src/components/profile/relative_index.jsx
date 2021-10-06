/* eslint-disable import/first */
import React from 'react';;
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import { fetchAllRelatives } from '../../actions/relative_actions';
import { AiOutlineEdit } from 'react-icons/ai'; 
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { deleteRelative } from '../../actions/relative_actions';
import './relative.css';


class RelativeIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            household: this.props.household
        };
    }

    componentDidMount() {
        this.props.fetchAllRelatives(this.props.profileId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.household.length !== this.props.household.length) {
            this.setState({
                household: this.props.household
            })
        }
    }

    render() {
        if (!this.props.household) return null
        
        const showHousehold = this.props.household.map((member, i) => {

            
           const phone = member.phoneNumber !== null ? `(${member.phoneNumber.toString().slice(0, 3)}) 
                    ${member.phoneNumber
                      .toString()
                      .slice(3, 6)}-${member.phoneNumber.toString().slice(6)}`
                      : "";

            return (
              <div key={`${i}`} className="single-member">
                <div className="icon-box">
                  <div className="icon"><FaRegUser id="user-icon"/></div>
                  <div className="icon-btn">
                    <div
                      onClick={() =>
                        this.props.openModal("editRelative", member._id)
                      }
                    >
                      <AiOutlineEdit id="edit-icon"/>
                    </div>
                    <div onClick={() => this.props.deleteRelative(member._id)}>
                      <RiDeleteBin2Line id="delete-icon"/>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Name: {member.name}</p>
                </div>
                <div>
                  <p>Age: {member.age}</p>
                </div>
                <div>
                  <p>Relationship: {member.relationship}</p>
                </div>
                <div>
                  <p>Phone Number: {phone}</p>
                </div>
              </div>
            );
        });

        return (

            <div className="relative-container">
                {!this.props.household ? null : showHousehold}
            </div>
        )

    }
}

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.user.id,
        profileId: ownProps.profileId,        
        household: Object.values(state.entities.relative).filter(
            member => {
                return member.profile === ownProps.match.params.profileId
            }
        )
    };
};

const mDTP = dispatch => {
    return {
        fetchAllRelatives: (profileId) => dispatch(fetchAllRelatives(profileId)),
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        deleteRelative: relativeId => dispatch(deleteRelative(relativeId))
    };
};

export default withRouter(connect(mSTP, mDTP)(RelativeIndex));