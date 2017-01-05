import './styles/header.css';
import React, { Component } from 'react';

export default class Header extends Component{
// <button className="button-menu">
//  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 67.75 43.63"><rect width="67.75" height="8.38"/><rect x="4.15" y="17.63" width="59.45" height="8.38" /><rect y="35.25" width="67.75" height="8.38"/></svg>
// </button>

    render(){
        return(
            <header className="codrops-header">
            	<h1>The Lusina</h1>
				
                <p>Android &amp; Web developer.</p>
				
                <div className="codrops-links">
					
                    <a className="codrops-icon codrops-icon--resume" 
                    href="http://lusinaresume.netlify.com/" target="_blank" title="Resume">
                        <span>Resume</span>
                    </a>
					
                    <a className="codrops-icon codrops-icon--contact" href="#" title="Contact">
                        <span>Contact</span>
                    </a>

				</div>                
            </header>
        )
    }
}
