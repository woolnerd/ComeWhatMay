import React from 'react';


class Household extends React.Component {
  constructor(props) {
    super(props);

    this.state = { household: this.props.household };
  }

  async init() {
    const data = await localStorage.getItem("userHousehold");
    this.setState({ household: JSON.parse(data)});
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.household !== this.props.household) {
      this.props.fetchHousehold();
    }
  }

  componentDidMount() {
    this.init().then(()=> this.forceUpdate())
  }

  render() {
    return (
      <div>
        {this.state.household ? (
          <div>The {this.state.household} Profile</div>
        ) : null}
      </div>
    );
  }
}

export default Household;