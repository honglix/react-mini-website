import React, { Component } from 'react'
import Jombotron from './Jombotron'
import Table from './Table/Table';

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

  handleVideoChange = (item, event)=>{
    event.preventDefault();
    
    let course_modules = [...this.state.course_modules];
    course_modules.map((data)=>{
      data.active = false;
    })

    item.active = !item.active

    course_modules[item.id - 1] = item;

    this.setState({
      course_modules: course_modules
    })
  }

  render() {
    return (
      <div>
        <Jombotron></Jombotron>
        <Table course_modules={this.state.course_modules} handleVideoChange={this.handleVideoChange.bind(this)}></Table>
      </div>
    );
  }
}

export default Home;