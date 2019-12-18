import React, { Component } from 'react'
import Jombotron from './Jombotron'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {         
      course_modules: [
      { id: 1, title: "1. Setting up project", description: "lorem ipsum", active: false },
      { id: 2, title: "2. Add react to the project", description: "lorem ipsum", active: false },
      { id: 3, title: "3. Building a hello world", description: "lorem ipsum", active: false },
      { id: 4, title: "4. Add react router", description: "lorem ipsum", active: false }
    ] };
  }
  render() {
    return (
      <Jombotron></Jombotron>
    );
  }
}

export default Home;