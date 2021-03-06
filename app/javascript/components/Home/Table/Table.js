import React, { Component } from 'react'
import Item from './Item'
import Activeitem from './Activeitem';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const items = this.props.course_modules.map((data) => {
            let handleVideoChange = this.props.handleVideoChange.bind(this, data);
            return(
                data.active ? 
                <Activeitem handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description}></Activeitem>  : 
                <Item handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description}></Item>   
            )
        })
        return (
            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">React for Rails Develpers - Videos</h2>
                    </div>

                    {items}
                </div>
            </div>
        );
    }
}

export default Table;