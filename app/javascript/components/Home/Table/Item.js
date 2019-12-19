import React, { Component } from 'react';
import Thumbnamil from './Thumbnail';
import styled from 'styled-components'

const Button = styled.a`
display: inline-block;
text-decoration: none;
font-weight: bold;
cursor: pointer;
border-radius: 0;
background: #fff;
padding: 10px 20px;
font-size: 15px;
color: #333 !important;
box-shadow: 0px 0px 0px 3px #473228,
    -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row pb-4 pt-4">
                <div className="col-md-10 offset-md-1">
                    <div className="text-center">
                        <div className="card px-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <Thumbnamil></Thumbnamil>
                                </div>
                                <div className="col-md-8">
                                    <div className="pt-4 pb-4">
                                        <h4>{this.props.title}</h4>
                                        <p>{this.props.description}</p>
                                        <div className="cta-wrapper">
                                            <Button onClick={this.props.handleVideoChange} className="btn cta-btn">Watch this video</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;