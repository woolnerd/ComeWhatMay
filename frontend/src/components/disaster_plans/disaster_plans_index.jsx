import React from "react";
import { Link } from "react-router-dom";
import "./disaster_plan.css";

class DisasterPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      targetTime: 5,
      disasterType: "",
      modal: "false",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchDisasterPlans();
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }


  createPlanModal() {
    if (this.state.modal === "false") {
      return null;
    } else {
      // debugger
      return (
        <div className="create-disaster-plan-modal-layout">
          <div className="modal-child">
            <form className="dis-plan-form"
              onSubmit={() =>
                this.props
                  .createDisasterPlan(this.props.profileId, {
                    name: this.state.name,
                    targetTime: this.state.targetTime,
                    disasterType: this.state.disasterType,
                  })
                  .then(() => this.setState({ modal: "false" }))
              }
            >
              <label>
                Plan Name
                <input
                  type="text"
                  placeholder="Name your plan"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                />
              </label>
              <label>
                Disaster Type
                <select
                  value={this.state.disasterType}
                  onChange={this.handleChange("disasterType")}
                >
                  <option disabled value="">
                    -Please select-
                  </option>
                  <option value="Tornado">Tornado</option>
                  <option value="Hurricane">Hurricane</option>
                  <option value="Flood">Flood</option>
                  <option value="Fire">Fire</option>
                  <option value="Earthquake">Earthquake</option>
                  <option value="Tsunami">Tsunami</option>
                  <option value="Blizzard">Blizzard</option>
                  <option value="Volcano">Volcano</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                How fast can you do it?
                <h5>(please select in minutes)</h5>
                <input
                  type="number"
                  min={5}
                  max={60}
                  value={this.state.targetTime}
                  onChange={this.handleChange("targetTime")}
                />
              </label>
              <button>Submit New Plan</button>
            </form>
          </div>
        </div>
      );
    }
  }

  render() {
    const plans = this.props.disasterPlans.map((plan, i) => (
      <Link to={`/disaster-plan/${plan._id}`}>
        <div key={i} className="plan-item">
          {plan.name}
        </div>
      </Link>
    ));

        const plans = this.props.disasterPlans.map(
            (plan, i) => 
            <div key={i}className="plan-item">
                <Link 
                    to={{
                        pathname: `/disaster/${plan._id}`,
                        currentPlan: {plan: plan}
                    }}>
                    {plan.name}
                </Link>
            </div>
        )

        return (
            <div>
                <div className="dist-plan-container">
                <button 
                    className="plan-btn btn-style-1"
                    onClick={() => this.setState({ modal: "true"})}>
                    Make a New Plan
                </button>
                    <div className="dist-plans">
                        {plans}
                    </div>
                </div>
                {this.createPlanModal()}
            </div>
        )
    }

}

export default DisasterPlans;
