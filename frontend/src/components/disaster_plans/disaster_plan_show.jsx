import React from 'react'
import ActionStepContainer from '../action_steps/action_step_container'
import CreateActionContainer from '../action_steps/create_action_step';
import DrillComponent from '../action_steps/action_step_index';
import DrillHistoryComponent from './drill_history'
import { AiOutlineClose } from 'react-icons/ai'
import "./drill.css"

class DisasterPlanShow extends React.Component {
  constructor(props) {
    super(props);
    let plan = this.props.plan;
    if (plan) {
      this.state = {
        disasterType: plan.disasterType,
        name: plan.name,
        profileId: plan.profileId,
        targetTime: plan.targetTime,
        _id: plan._id,
        modal: 0,
      };
    } else {
      this.state = {
        disasterType: "",
        name: "",
        profileId: "",
        targetTime: "",
        _id: "",
        modal: 0,
      };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchDisasterPlan().then((res) =>
      this.setState({
        disasterType: res.plan.data.disasterType,
        name: res.plan.data.name,
        profileId: res.plan.data.profileId,
        targetTime: res.plan.data.targetTime,
        _id: res.plan.data._id,
        modal: 0,
        errors: this.props.errors,
      })
    );
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
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

  DisasterPlanModal() {
    switch (this.state.modal) {
      case 0:
        return null;
      case 1:
        return (
          <div className="create-disaster-plan-modal-layout">
            <div className="modal-child">
              <form
                className="dis-plan-form"
                onSubmit={() =>
                  this.props
                    .updateDisasterPlan({
                      disasterType: this.state.disasterType,
                      name: this.state.name,
                      profileId: this.state.profileId,
                      targetTime: this.state.targetTime,
                      _id: this.state._id,
                    })
                    .then(() =>
                      this.setState({
                        modal: !this.state.errors.length ? 0 : 1,
                      })
                    )}>
                <div className="create-plan-modal-title-close">
                  <div className="plan-header">
                    <h2 className="make-plan">Update Your Plan</h2>

                    <p
                      className="exit_edit"
                      onClick={
                          () => this.setState({ modal: "false" }, 
                          () => this.props.clearPlanErrors()
                        )}>
                      <AiOutlineClose id="close-x" />
                    </p>
                  </div>
                </div>
                <label>
                  Plan Name
                  <input
                    type="text"
                    placeholder="Name your plan"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                  />
                </label>

                {/* <p  className="exit_edit" 
                                onClick={() => this.setState({modal: 0})}>
                                <AiOutlineClose className="close-x" />
                            </p> */}
                <div className="dis-type">
                  <label>
                    Disaster Type
                    <select
                      value={this.state.disasterType}
                      onChange={this.handleChange("disasterType")}>

                      <option value="" disabled >-Please select-</option>
                      <option value="Tornado">Tornado</option>
                      <option value="Hurricane">Hurricane</option>
                      <option value="Flood">Flood</option>
                      <option value="Fire">Fire</option>
                      <option value="Earthquake">Earthquake</option>
                      <option value="Tsunami">Tsunami</option>
                      <option value="Blizzard">Blizzard</option>
                      <option value="Volcano">Volcano</option>
                      <option value="Pandemic">Pandemic</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
                <label className="how-fast-label">
                  How fast can you do it?
                  <h5 className="dis-info">please select in minutes</h5>
                  <input
                    type="number"
                    min={5}
                    max={60}
                    value={this.state.targetTime}
                    onChange={this.handleChange("targetTime")}
                  />
                </label>
                <div className="btn-cont">
                  <button id="dis-btn">Update Your Plan</button>
                </div>
                <div className="plan-error-container">
                  {this.renderErrors()}
                </div>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="create-disaster-plan-modal-layout">
            <div className="modal-child">
              <div className="dis-plan-form min-height">
                <h5>Are you sure you want to delete this plan?</h5>
                <div className="delete-plan-buttons">
                  <button
                    id="plan-btn"
                    onClick={() => this.setState({ modal: 0 })}>
                    Cancel
                  </button>
                  <button
                    id="plan-btn"
                    onClick={() =>
                      this.props
                        .deleteDisasterPlan()
                        .then(
                          this.props.history.push(
                            `/profile/${this.props.plan.profileId}`
                          )
                        )
                        .then(() => this.setState({ modal: 0 }))
                    }>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    if (!this.props.plan) {
      return null;
    }
    const actions = this.props.plan.actions.map((action, id) => {
      return <ActionStepContainer key={id} action={action} />;
    });
    let plan = this.props.plan;
    return (
      <div className="disaster-show-frame">
        <div className="plan-info-and-actions">
          <div className="plan-info-container">
            <div className="plan-info">
              <h2>
                {plan.name}
              </h2>
              <div className="plan-header-info">
                <h4>
                  <span>Drill Target </span>
                  {plan.targetTime}min
                </h4>
                <div id="case-of">
                  <span>In the case of </span>
                  <h4>{plan.disasterType}</h4>
                </div>
              </div>
            </div>
            <div className="plan-crud-buttons">
            <button onClick={
              () => this.setState({ 
                disasterType: plan.disasterType,
                name: plan.name,
                profileId: plan.profileId,
                targetTime: plan.targetTime,
                _id: plan._id,
                modal: 1 
              })}>
              Update Plan
            </button>
            <button onClick={() => this.setState({ modal: 2 })}>
              Delete Plan
            </button>
          </div>
        </div>
      </div>
      <div className="div-for-line"></div>

        <CreateActionContainer />
        {actions}
        {this.DisasterPlanModal()}
        <div className="drill-container-flex">
          <div className="drill-container">
            <DrillComponent />
          </div>
          <div>
            <DrillHistoryComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default DisasterPlanShow;