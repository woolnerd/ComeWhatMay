import React from 'react'
import ActionStepContainer from '../action_steps/action_step_container'

class DisasterPlanShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            targetTime: '',
            disasterType:'',
            profileId: '',
            modal: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        debugger
        this.props.fetchDisasterPlan()
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
                break;
            case 1:
                return (
                    <div className='create-disaster-plan-modal-layout'>
                    <form onSubmit={() =>
                        this.props.updateDisasterPlan(
                            {
                                name: this.state.name,
                                targetTime: this.state.targetTime,
                                disasterType: this.state.disasterType,
                                profileId: this.state.profileId
                            })
                            .then(()=>this.setState({ modal: 0 }))}>
                        
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
                break;
            case 2:
                return (
                    <div className='delete-action-modal'>
                        <button 
                            onClick={()=> this.setState({modal: 0})}>
                            Cancel
                        </button>
                        <button 
                            onClick={()=> this.props.deleteDisasterPlan()
                                .then(() => this.setState({modal: 0}))}>
                            Delete Action
                        </button>
                    </div>
                )
                break;
            default:
                break;
        }
    }

    render(){
        const actions = this.props.plan.actions.map(
            (action, id) =>
                <ActionStepContainer key={id} action={action}/>
        )
        const plan = this.props.plan
        return(
            <div className='disaster-show-frame'>
                <div className='plan-info-and-actions'>
                    <div className='plan-info'>
                        <h4>{plan.name}</h4>
                        <h4>{plan.targetTime}</h4>
                        <h4>{plan.disasterType}</h4>
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
            </div>
        )
    }
}

export default DisasterPlanShow;