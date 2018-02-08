import React from "react";
import { Button, Input } from "semantic-ui-react";
import api from "../../api";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doges: [],
      breed: ""
    };
  }

  onClickFetch = () => {
    api.doges.fetchAll().then(({ data }) =>
      this.setState({
        doges: data
      })
    );
  };

  onClickFetch = breedN => {
    api.doges.fetchAll(breedN).then(({ data }) => {
      this.setState({ doges: data });
    });
  };

  handleInputChange = event => {
    this.setState({ breed: event.target.value });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui divider" />
        <h1 className="ui blue header">Daily Dose of Doge</h1>
        <br />
        <Input
          focus
          fluid
          onInput={this.handleInputChange}
          placeholder="Enter Breed Name..."
        />
        <br />
        <br />
        <Button
          animated="fade"
          className="blue fluid animated"
          size="medium"
          onClick={() => this.onClickFetch(this.state.breed)}
        >
          <Button.Content visible>Search</Button.Content>
          <Button.Content hidden>Get Doge Pics</Button.Content>
        </Button>
        <div className="ui divider" />
      </div>
    );
  }
}

export default HomePage;
