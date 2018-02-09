import React from "react";
import { Button, Dropdown, Header, Image } from "semantic-ui-react";
import api from "../../api";
import dogegif from "../images/giphy-downsized-large.gif";
import heartsgif from "../images/hearts.gif";
//import ObjectInspector from "react-object-inspector";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doges: [],
      dogeName: [],
      breed: ""
    };
  }
  componentDidMount() {
    api.doges.fetchAll().then(({ data }) =>
      this.setState({
        dogeName: data.message
      })
    );
  }

  onClickFetchBreed = breedN => {
    api.doges.fetchBreed(breedN).then(({ data }) => {
      this.setState({ doges: data.message });
    });
  };

  handleInputChange = event => {
    this.setState({ breed: event.target.id });
  };

  render() {
    const { doges, breed, dogeName } = this.state;

    var dogeOptions = [];
    for (var i = 0; i < dogeName.length; i++) {
      dogeOptions.push({
        id: dogeName[i],
        key: dogeName[i],
        text: dogeName[i],
        value: dogeName[i]
      });
    }

    return (
      <div className="ui container">
        <div className="ui divider" />
        <Header
          as="h1"
          className="ui blue header"
          textAlign="center"
          color="pink"
        >
          {"Daily Dose of Doge <3"}
        </Header>
        <Image src={heartsgif} size="small" floated="left" />
        <Image src={heartsgif} size="small" floated="right" />
        <Image src={dogegif} size="medium" circular centered />
        <br />
        <p>
          We all love dogs. In fact, who doesn't? Daily Dose of Doges (DDD) is a
          site that contains hundreds of thousands of dog pics. Start your
          search below and get your daily dose of DOG PICS!
        </p>
        <Dropdown
          placeholder="Enter Breed Name..."
          fluid
          search
          selection
          options={dogeOptions}
          onChange={this.handleInputChange}
        />
        <br />
        <Button
          animated="fade"
          className="pink fluid animated"
          size="medium"
          onClick={() => this.onClickFetchBreed(breed)}
        >
          <Button.Content visible>Search</Button.Content>
          <Button.Content hidden>Show me Doge Pics!</Button.Content>
        </Button>

        {/*This part shows the images*/}

        <br />
        <div className="image-scroller">
          {doges.map((image, index) => (
            <div key={index}>
              <Image src={image} circular centered />
              <br />
            </div>
          ))}
        </div>
        <div className="ui divider" />
      </div>
    );
  }
}

export default HomePage;
