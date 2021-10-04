import { connect } from "react-redux";
import { withRouter } from "react-router";
import {updateActionStep, deleteActionStep} from '../../actions/action_step_actions'
import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./actions_steps.css";


class ActionStep extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            owner: this.props.action.owner, 
            task: this.props.action.task, 
            modal: 0, 
            errors: this.props.errors
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.action._id !== prevProps.action._id){
            this.setState({
                owner: this.props.action.owner, 
                task: this.props.action.task, 
                modal: 0
            })
        }
    }

    handleChange(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors });
      }
  
      renderErrors() {
        const errors = this.state.errors.map(
            (error, i) => <li key={`error-${i}`}>{error}</li>
          )
        return (
          <ul className="plan-errors">
            {errors}
          </ul>
        );
      }

    ActionStepModal(){
        switch (this.state.modal) {
            case 0:
                return null
            case 1:
                return (
                <div className="modal-background">
                    <div className='action-step-form-frame modal-child-task'>
                        <form onSubmit={
                            ()=> this.props.updateActionStep(
                                this.props.planId, {   
                                    owner: this.state.owner, 
                                    task: this.state.task, 
                                    _id: this.props.action._id
                                    })
                                    .then(()=> 
                                    this.setState({
                                        modal: !this.state.errors.length ? 0 : 1}))}>

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
                            <div className="plan-error-container">{this.renderErrors()}</div>
                        </form>
                    </div>
                </div>
                )
            case 2:
                return (
                    <div className="modal-background">
                        <div className="modal-child">
                   <div className='delete-action-frame'>
                        <h5>Are you sure you want to delete this action?</h5>
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
                        </div> 
                    </div>
                )
            default:
                break;
        }
    }

    render(){
        return (
          <div className="action-step-frame">
            <div className="task-owner">
              {/* <div className='owner-of-taks'> */}
              <h6>Person: {this.state.owner}</h6>
              {/* </div> */}
              {/* <div className="task-information"> */}
              <p>Task: {this.state.task}</p>
              {/* </div> */}
            </div>
            {this.ActionStepModal()}
            <div className="task-btn">
              <AiOutlineEdit onClick={() => this.setState({ modal: 1 })} />
              <RiDeleteBin2Line onClick={() => this.setState({ modal: 2 })} />
            </div>
          </div>
        );
    }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.match.params.disasterId,
    errors: Object.values(state.errors.actionSteps)
})

const mDTP = (dispatch) => ({
    updateActionStep: (planId, actionStep) => dispatch(updateActionStep(planId, actionStep)),
    deleteActionStep: (planId, actionStep) => dispatch(deleteActionStep(planId, actionStep))
})

export default withRouter(connect(mSTP, mDTP)(ActionStep));
