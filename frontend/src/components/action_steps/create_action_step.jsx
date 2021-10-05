import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createActionStep } from '../../actions/action_step_actions'
import { AiOutlineClose } from 'react-icons/ai'

class CreateActionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      task: "",
      modal: false,
      errors: this.props.errors,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  renderErrors() {
    const errors = this.state.errors.map((error, i) => (
      <li key={`error-${i}`}>{error}</li>
    ));
    return <ul className="plan-errors">{errors}</ul>;
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  ActionStepModal() {
    if (!this.state.modal) {
      return null;
    } else {
      return (
        <div className="action-step-form-frame">
          <form
            className="action-step-form"
            onSubmit={() =>
              this.props
                .createActionStep(this.props.planId, {
                  owner: this.state.owner,
                  task: this.state.task,
                })

                .then(() =>
                  this.setState({
                    owner: !this.state.errors.length ? "" : this.state.owner,
                    task: !this.state.errors.length ? "" : this.state.task,
                    modal: !this.state.errors.length ? false : true,
                  })
                )
            }
          >
            <div className="create-task-top">
              <div className="action-owner">
                <h6>Action Owner</h6>
                <input
                  type="text"
                  value={this.state.owner}
                  placeholder="Who's job is this?"
                  onChange={this.handleChange("owner")}
                />
              </div>
              <p
                className="exit_edit"
                onClick={() => this.setState({ modal: 0 })}
              >
                <AiOutlineClose className="close-x" />
              </p>
            </div>
            <div className="action-task-details">
              <h6>Action Task</h6>
              <textarea
                className="create-task-info-input"
                value={this.state.task}
                placeholder="What's the task?"
                onChange={this.handleChange("task")}
              ></textarea>
            </div>
            <div className="plan-error-container">{this.renderErrors()}</div>
            <button id="new-action-btn">Confirm</button>
            {/* begin-old
                      .then(() =>
                        this.setState({
                          owner: "",
                          task: "",
                          modal: false,
                        })
                      )
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
                    placeholder="What's the task?"
                    onChange={this.handleChange("task")}
                  />
                  <button id="new-action-btn">Confirm</button>
            end-old */}
          </form>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="create-action-button">
        {this.ActionStepModal()}
        <button onClick={() => this.setState({ modal: true })}>
          Create New Task
        </button>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
    planId: ownProps.match.params.disasterId,
    errors: Object.values(state.errors.actionSteps)
})

const mDTP = (dispatch) => ({
    createActionStep: (planId, actionStep) => 
        dispatch(createActionStep(planId, actionStep))
})

export default withRouter(connect(mSTP, mDTP)(CreateActionContainer))