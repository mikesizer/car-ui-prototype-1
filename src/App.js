import React, { Component } from 'react';
import indicatorIcon from './indicator-icon.svg';
import changingLaneIcon from './change-lane.gif';
import roadIcon from './road-icon.gif';
import infoIcon from './info.svg';
import styled, { keyframes } from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Flash = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const Indicator = styled.img`
  opacity: 0;
  animation: ${props => (
    props.blinking ? `${Flash} 0.8s infinite` : 'none'
  )};
  position: absolute;
  left: 100px;
`;

const Road = styled.img`
  position: absolute;
  margin-top: 256px;
`;

const Speed = styled.p`
  position: absolute;
  margin-top: 64px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 173px;
  color: #222;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 15px;
`;


class App extends Component {
  constructor(){
    super()

    this.state = {
      blinking: false,
      speed: 56,
    }
  }
  toggleIndicater = () => {
    this.setState((prevState) => (
      {
        blinking: !prevState.blinking,
	speed: 58,
      }
    ));
  }
  render() {

    const {
      state: {
        blinking,
	speed,
      },
      toggleIndicater,
    } = this;

    return (
      <Container>

        <Indicator
          blinking={blinking}
	  src={indicatorIcon}
	  width="40"
	/>

	<Speed>{speed}</Speed>

	<img
	  src={infoIcon}
	  height="400"
	/>

	<Road
          src={blinking ? changingLaneIcon : roadIcon}
	  height="100"
	/>

	<Controls>
	  <Button onClick={toggleIndicater}>Indicate left</Button>
	</Controls>

      </Container>
    );
  }
}

export default App;
