import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createActionStep } from '../../actions/action_step_actions'
import { AiOutlineClose } from 'react-icons/ai'

class CreateActionContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            owner: '',
            task: '',
            modal: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }

    ActionStepModal(){
        if (!this.state.modal){
            return null
        } else {

            return (
              <div className="action-step-form-frame">
                <p
                  className="exit_edit"
                  onClick={() => this.setState({ modal: 0 })}
                >
                  <AiOutlineClose className="close-x" />
                </p>
                <form
                  onSubmit={() =>
                    this.props
                      .createActionStep(this.props.planId, {
                        owner: this.state.owner,
                        task: this.state.task,
                      })
                      .then(() => this.setState({ modal: false }))
                  }
                >
                  <label>Action Owner</label>
                  <input
                    type="text"
                    value={this.state.owner}
                    placeholder="Who's job is this?"
                    onChange={this.handleChange("owner")}
                  />

                  <label>Action Task</label>
                  <input
                    type="text"
                    value={this.state.task}
                    placeholder="What's the task"
                    onChange={this.handleChange("task")}
                  />
                  <button>Confirm</button>
                </form>
              </div>
            );}  
    }

    render(){
        return (
            <div className="create-action-button">
                {this.ActionStepModal()}
                <button 
                    onClick={()=> this.setState({modal: true})}>
                    Create New Task
                </button>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.match.params.disasterId
})

const mDTP = (dispatch) => ({
    createActionStep: (planId, actionStep) => 
        dispatch(createActionStep(planId, actionStep))
})

export default withRouter(connect(mSTP, mDTP)(CreateActionContainer))