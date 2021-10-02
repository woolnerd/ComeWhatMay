import { connect } from 'react-redux'
import { fetchUserProfile} from "../../actions/profile_actions"
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';


const mSTP = ({entities, session}, ownProps) => {
    return {
      profileId: ownProps.match.params.profileId, 
      profile: entities.profile,
      currentUserId: session.user.id,
    };
    
}

const mDTP = dispatch => ({
    fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
    updateUserProfile: (profile) => dispatch(profile),
    deleteUserProfile: (profileId) => dispatch(profileId),
    openModal: (modal, id) => dispatch(openModal(modal, id))
})

export default withRouter(connect(mSTP, mDTP)(Profile))
