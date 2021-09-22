import React from 'react'
import Link from 'react-router-dom'

class DisasterPlans extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '', 
            targetTime: 5,
            disasterType: '', 
            modal: 'false'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.fetchDisasterPlans()
    }

    handleChange(field){

    }

    createPlanModal(){
        if (this.state.modal === 'false'){
            return null
        } else {
            return (
                <div className='create-disaster-plan-modal-layout'>
                    <form onSubmit={this.props.createDisasterPlan(this.state)
                            .then(()=>this.setState({ modal: "false" }))}>
                        <label>Plan Name
                            <input 
                                type="text" 
                                defaultValue='Plan name'
                                value={this.state.name}
                                onChange={this.handleChange('name')}/>
                        </label>
                        <label>Disaster Type
                            <select value={this.state.disasterType} onChange={this.handleChange('disasterType')}>
                                <option selected value="-Please select-"></option>
                                <option value="Tornado">Tornado</option>
                                <option value="Hurricane">Hurricane</option>
                                <option value="Flood">Flood</option>
                                <option value="Fire">Fire</option>
                                <option value="Earthquake">Earthquake</option>
                                <option value="Tsunami">Tsunami</option>
                                <option value="Blizzard">Blizzard</option>
                                <option value="Volcano">Volcano</option>
                            </select>
                        </label>
                        <label>How fast can you do it?
                            <div>please select in minutes</div>
                            <NumericInput 
                                min={0} 
                                max={100} 
                                value={this.state.targetTime}
                                onChange={this.handleChange(('targetTime'))}/>
                            <input 
                                type="number" 
                                min={0} 
                                max={100} 
                                value={this.state.targetTime}
                                onChange={this.handleChange(('targetTime'))}/>
                        </label>
                        <button>Submit New Plan</button>
                    </form>
                </div>
            )
        }
    }

    render(){

        const plans = this.props.disasterPlans.map(
            plan => 
            <div className="plan-item">
                <Link to={`/disaster-plan/${plan._id}`}>{plan.name}</Link>
            </div>
        )

        return (
            <div>
                <div className="dist-plan-container">
                <button 
                    className="plan-btn btn-style-1"
                    onClick={() => this.setState({modal: "true"})}>
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