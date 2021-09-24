import React from 'react'
import ActionStepContainer from '../action_steps/action_step_container'
import CreateActionStep from '../action_steps/create_action_step';
import DrillComponent from '../action_steps/action_step_index';
import DrillHistoryComponent from './drill_history'

class DisasterPlanShow extends React.Component {
    constructor(props){
        super(props)
        let plan = this.props.plan
        if (plan){
            this.state = {
                disasterType: plan.disasterType,
                name: plan.name,
                profileId: plan.profileId,
                targetTime: plan.targetTime,
                _id: plan._id,
                modal: 0
            }
        } else {
            this.state = {
                disasterType: "",
                name: "",
                profileId: "",
                targetTime: "",
                _id: "",
                modal: 0
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.fetchDisasterPlan()
        .then((res) => 
        this.setState({
            disasterType: res.plan.data.disasterType,
            name: res.plan.data.name,
            profileId: res.plan.data.profileId,
            targetTime: res.plan.data.targetTime,
            _id: res.plan.data._id,
            modal: 0
        }))
    }


    handleChange(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }

    DisasterPlanModal(){
        switch (this.state.modal) {
            case 0:
                return null
            case 1:
                return (
                    <div className='create-disaster-plan-modal-layout'>
                        <form onSubmit={() =>         
                            this.props.updateDisasterPlan({
                                disasterType: this.state.disasterType,
                                name: this.state.name,
                                profileId: this.state.profileId,
                                targetTime: this.state.targetTime,
                                _id: this.state._id,
                            })
                            .then(() => this.setState({modal: 0}))}>

                            <label>Plan Name
                                <input
                                    type="text" 
                                    placeholder="Name your plan"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}/>
                            </label>

                            <label>Disaster Type
                                <select value={this.state.disasterType} onChange={this.handleChange('disasterType')}>
                                    <option disabled value="" >-Please select-</option>
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

                            <label>How fast can you do it?
                                <h5>please select in minutes</h5>
                                <input 
                                    type="number" 
                                    min={5} 
                                    max={60} 
                                    value={this.state.targetTime}
                                    onChange={this.handleChange(('targetTime'))}/>
                            </label>
                            <button>Update Plan</button>
                        </form>
                    </div>
                )
            case 2:
                return (
                    <div className='delete-action-modal'>
                        <h2>Are you sure you want to delete this plan?</h2>
                        <button 
                            onClick={()=> this.setState({modal: 0})}>
                            Cancel
                        </button>
                        <button 
                            onClick={()=> this.props.deleteDisasterPlan()
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
        if(!this.props.plan){
            return null
        }
        const actions = this.props.plan.actions.map(
            (action, id) =>
                <ActionStepContainer key={id} action={action}/>
        )
        let plan = this.props.plan
        return(
            <div className='disaster-show-frame'>
                <div className='plan-info-and-actions'>
                    <div className='plan-info'>
                        <h4>{plan.name}</h4>
                        <h4>{plan.targetTime}</h4>
                        <h4>{plan.disasterType}</h4>
                        <CreateActionStep 
                            planId={this.props.planId} 
                            createActionStep={this.props.createActionStep}/>
                    </div>
                    <div className='plan-crud-buttons'>
                        <button 
                            onClick={()=> this.setState({modal: 1})}>
                            Update Plan
                        </button>
                        <button 
                            onClick={()=> this.setState({modal: 2})}>
                            Delete Plan
                        </button>
                    </div>
                </div>
                {actions}
                {this.DisasterPlanModal()}
                <div>
                    <div className="drill-container">
                        <DrillComponent />
                    </div>
                    <div>
                        <DrillHistoryComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default DisasterPlanShow;