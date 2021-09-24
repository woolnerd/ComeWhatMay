import { connect } from "react-redux";
import { withRouter } from "react-router";
import {updateActionStep, deleteActionStep} from '../../actions/action_step_actions'
import React from 'react'

class ActionStep extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            owner: this.props.action.owner, 
            task: this.props.action.task, 
            modal: 0
        }
    }

    handleChange(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }

    ActionStepModal(){
        switch (this.state.modal) {
            case 0:
                return null
            case 1:
                return (
                    <div className='action-step-form-frame'>
                        <form onSubmit={
                            ()=> this.props.updateActionStep(
                                this.props.planId, {   
                                    owner: this.state.owner, 
                                    task: this.state.task, 
                                    _id: this.props.action._id
                                    })
                                    .then(()=> this.setState({modal: 0}))}>

                            <label>Action Owner</label>
                                <input 
                                    type="text"
                                    value={this.state.owner}
                                    onChange={this.handleChange('owner')} />
                            
                            <label>Action Task</label>
                                <input 
                                    type="text"
                                    value={this.state.task}
                                    onChange={this.handleChange('task')} />
                            <button>Update Action</button>
                        </form>
                    </div>
                )
            case 2:
                return (
                    <div className='delete-action-frame'>
                        <h5>Are you sure you want to delete this action</h5>
                        <button 
                            onClick={()=> this.setState({modal: 0})}>
                            Cancel
                        </button>
                        <button 
                            onClick={()=> this.props.deleteActionStep(
                                this.props.planId, this.props.action._id)
                                .then(() => this.setState({modal: 0}))}>
                            Confirm
                        </button>
                    </div>
                )
            default:
                break;
        }
    }

    render(){
        return (
            <div className="action-step-frame">
                <div className='owner-of-taks'>
                    <h6>{this.state.owner}</h6>
                </div>
                <div className="task-information">
                    <p>{this.state.task}</p>
                </div>
                {this.ActionStepModal()}
                <button 
                    onClick={()=> this.setState({modal: 1})}>
                    Update Task
                </button>
                <button 
                    onClick={()=> this.setState({modal: 2})}>
                    Delete Task
                </button>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.match.params.disasterId,
})

const mDTP = (dispatch) => ({
    updateActionStep: (planId, actionStep) => dispatch(updateActionStep(planId, actionStep)),
    deleteActionStep: (planId, actionStep) => dispatch(deleteActionStep(planId, actionStep))
})

export default withRouter(connect(mSTP, mDTP)(ActionStep));
