import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates';
import { URL } from '../../../config';

class NewsSlider extends Component {

    state = {
        articles:[]
    }

    UNSAFE_componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response =>{
            this.setState({
                articles:response.data
            })
        })
    }

    render(){
       
        return(
            <div>
                <SliderTemplates data={this.state.articles} type={this.props.type} settings={this.props.settings}/>
            </div>
        )
    }
}

export default NewsSlider;