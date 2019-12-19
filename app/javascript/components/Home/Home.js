import React, { Component } from 'react'
import Jombotron from './Jombotron'
import Table from './Table/Table';
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {         
      course_modules: [
        
    ] };
  }

  componentDidMount(){
    axios.get('/episodes.json')
    .then(data=>{
      let res = []
      data.data.data.map((data)=>{
        res.push({id: data.id, title: data.title, description: data.description, active: false})

        this.setState({course_modules: res});
      })
    }).catch(data => {

    })
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