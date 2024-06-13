import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  // Create a local react state of the this component with a content property set to nothing.
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
      preCondition: "",
      acceptCondition: ""
    };
  }
  // The handleChange function updates the react state with the new input value provided from the user.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  handleChange = (event) => {
    let inputName = event.target.name;
    if (inputName==="Add New Item") {
      this.setState({
        content: event.target.value,
        date: Date().toLocaleString('en-US'),
      });
    }
    else if (inputName==="Pre-Condition") {
      this.setState({
        preCondition: event.target.value,
        date: Date().toLocaleString('en-US'),
      });
    }
    else if (inputName==="Acceptance Condition") {
      this.setState({
        acceptCondition: event.target.value,
        date: Date().toLocaleString('en-US'),
      });
    }
  };
  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
        date: ""
      });
    }
  };
  render() {
    return (
      // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
      // one div element.
      // 2. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 3. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 4. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="Add New Item"
          name="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
          data-testid="new-item-textfield"
          style={{marginTop:10}}
        />
        <TextField 
          label="Pre-Condition"
          name="Pre-Condition"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.preCondition}
          style={{marginTop:10}}
        />
        <TextField 
          label="Acceptance Condition"
          name="Acceptance Condition"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.acceptCondition}
          style={{marginTop:10}}
        />
        <Button
          style={{ marginLeft: "10px", marginTop: "10px"}}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
