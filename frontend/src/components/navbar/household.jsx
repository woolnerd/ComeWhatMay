import React from 'react';


class Household extends React.Component {

  componentDidMount() {
    this.props.fetchHousehold()
  }

  render() {
    return (
      <div>
        {this.props.household ? (
          <div>The {this.props.household} Profile</div>
        ) : null}
      </div>
    );
  }
}

export default Household;