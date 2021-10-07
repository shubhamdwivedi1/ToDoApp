import React, { Component } from "react";

class Propsclassbased extends Component {
  render() {
    return (
      <div>
        <h1>
          Good Evening {this.props.name} and you are a {this.props.profession}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Propsclassbased
