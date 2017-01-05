import React, { Component } from 'react';
import './styles/about.css'

export default class About extends Component{
    render(){
        return(
            <a className="pater" href="#">
                <h2 className="pater__title" aria-label="About"></h2>
                <p className="pater__desc">
                    I am Brian Lusina, an Android and web developer. 
                    Developing and creating sites and apps that are both simple and fun to use is my passion.
                </p>
            </a>
        )
    }
}
        