import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      message: "Forms",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for Submitting Form",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={() => this.changeMessage()}>
        <fieldset>
            <label>
                <p>Name</p>
                <input name = "name" />
            </label>
            <label>
                <p>Age</p>
                <input name = "name" />
            </label>
            <label>
                <p>Passion</p>
                <input name = "name" />
            </label>
        </fieldset>
        <button type = "submit">Submit</button>
        </form>
      </div>
    //   <div className="wrapper">
    //   <h1>How About Them Apples</h1>
    //   <form onSubmit={handleSubmit}>
    //     <fieldset>
    //       <label>
    //         <p>Name</p>
    //         <input name="name" />
    //       </label>
    //     </fieldset>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    );
  }
}

export default Form