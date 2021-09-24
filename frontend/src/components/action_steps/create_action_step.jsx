import React from 'react'

class CreateActionStep extends React.Component {
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
            return(
                <div className='action-step-form-frame'>
                    <form onSubmit={
                        ()=> this.props.createActionStep(
                            this.props.planId, {   
                                owner: this.state.owner, 
                                task: this.state.task, 
                                })
                                .then(()=> this.setState({modal: false}))}>

                        <label>Action Owner</label>
                            <input 
                                type="text"
                                value={this.state.owner}
                                placeholder="Who's job is this?"
                                onChange={this.handleChange('owner')} />
                        
                        <label>Action Task</label>
                            <input 
                                type="text"
                                value={this.state.task}
                                placeholder="What's the task"
                                onChange={this.handleChange('task')} />
                        <button>Create Action</button>
                    </form>
                </div>
            )}  
    }

    render(){
        return (
            <div className="create-action-button">
                {this.ActionStepModal()}
                <button 
                    onClick={()=> this.setState({modal: true})}>
                    Create Task
                </button>
            </div>
        )
    }
}

export default CreateActionStep;