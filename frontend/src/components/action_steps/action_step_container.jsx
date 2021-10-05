import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
    updateActionStep, 
    deleteActionStep,
    clearActionStepErrors} from '../../actions/action_step_actions'
import {fetchDisasterPlan} from '../../actions/disaster_plan_actions'
import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./actions_steps.css";
import { AiOutlineClose } from 'react-icons/ai'



class ActionStep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: this.props.action.owner,
      task: this.props.action.task,
      modal: 0,
      errors: this.props.errors,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else {
      return null;
    }
  }


  componentDidUpdate(prevProps) {
    if (this.props.action._id !== prevProps.action._id) {
      this.setState({
        owner: this.props.action.owner,
        task: this.props.action.task,
        modal: 0,
      });
    }
    if (prevProps.errors !== this.props.errors) {
        this.setState({ errors: this.props.errors });
    }
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    const errors = this.state.errors.map((error, i) => (
      <li key={`error-${i}`}>{error}</li>
    ));
    return <ul className="plan-errors">{errors}</ul>;
  }

  ActionStepModal() {
    switch (this.state.modal) {
      case 0:
        return null;
      case 1:
        return (
          <div className="modal-background">
            <div className="modal-child-task">
              <form
                className="action-step-update-modal"
                onSubmit={() =>
                  this.props
                    .updateActionStep(this.props.planId, {
                      owner: this.state.owner,
                      task: this.state.task,
                      _id: this.props.action._id,
                    })
                    .then(() =>
                      this.setState({
                        modal: !this.state.errors.length ? 0 : 1,
                      })
                    )
                }>

                <div className='create-task-top'>
                    <div className='action-owner'>
                    <h6>Action Owner</h6>
                    <input
                        type="text"
                        value={this.state.owner}
                        placeholder="Who's job is this?"
                        onChange={this.handleChange("owner")}/>
                    </div>
                    <p
                    className="exit_edit"
                    onClick={
                        () => this.setState({ modal: 0 }, 
                        () => this.props.clearActionStepErrors())
                    }>
                    <AiOutlineClose className="close-x" />
                    </p>
                </div>
                <div className='action-task-details'>
                    <h6>Action Task</h6>
                    <textarea
                    className="create-task-info-input"
                    value={this.state.task}
                    placeholder="What's the task"
                    onChange={this.handleChange("task")}>
                    </textarea>
                </div>
                <button>Update Action</button>
                <div className="plan-error-container">{this.renderErrors()}</div>
            </form>
        </div>
          </div>
        );
      case 2:
        return (
          <div className="modal-background">
            <div className="modal-child">
              <div className="delete-action-frame">
                <h5>Are you sure you want to delete this action?</h5>
                <button onClick={() => this.setState({ modal: 0 })}>
                  Cancel
                </button>
                <button
                  onClick={() =>
                    this.props
                      .deleteActionStep(
                        this.props.planId,
                        this.props.action._id
                      )
                      .then(() => this.setState({ modal: 0 }))
                  }>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div className="action-step-frame">
      <div className="task">
        <div className='owner-of-task'>
          <h6>Owner</h6> 
          <p>{this.props.action.owner}</p> 
        </div>
        <div className="task-information">
          <h6>Task</h6> 
          <p>{this.props.action.task}</p>
        </div>
      </div>
      {this.ActionStepModal()}
      <div className="task-btn">
        <AiOutlineEdit
          id="edit-icon"
          onClick={  
              () => this.setState({ 
                  owner: this.props.action.owner, 
                  task: this.props.action.task, 
                  modal: 1 })
          }/>
        <RiDeleteBin2Line
          id="delete-icon"
          onClick={() => this.setState({ modal: 2 })}
        />
      </div>
    </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.match.params.disasterId,
    errors: Object.values(state.errors.actionSteps)
})

const mDTP = (dispatch, ownProps) => ({
    updateActionStep: (planId, actionStep) => dispatch(updateActionStep(planId, actionStep)),
    deleteActionStep: (planId, actionStep) => dispatch(deleteActionStep(planId, actionStep)),
    fetchDisasterPlan: () => dispatch(fetchDisasterPlan(ownProps.match.params.disasterId)),
    clearActionStepErrors: () => dispatch(clearActionStepErrors())
})

export default withRouter(connect(mSTP, mDTP)(ActionStep));
