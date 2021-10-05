import React from 'react';


class Household extends React.Component {
    constructor(props){
        super(props);

        this.state = {household: ""}
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.household !== this.props.household) {
            this.setState({household: this.props.household});
        }
    }

    componentDidMount(){
        this.setState({household: this.props.household})
        this.forceUpdate();
    }



    render() {
        return (

        <div>
            {this.state.household ? <div>The {this.state.household} Profile</div> 
            : null }
        </div>
        )
       
    }


}

export default Household;