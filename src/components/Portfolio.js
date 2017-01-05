import React, { Component } from 'react';
import '../styles/portfolio.css';
import canvas from '../images/canvas.png';
import wireframe from '../images/wireframe.png';
import menuImg from "../images/ProScreenshots/menu-screenshot.png"
import emeraldDesigns from '../images/ProScreenshots/emerald.png'
import foodHutImg from '../images/ProScreenshots/foodhut.png';
import miniWikiImg from '../images/ProScreenshots/mini-wiki-screenshot.png';
import treasureGramImg from '../images/ProScreenshots/lutreasuregram.png';
import zenithImg from '../images/ProScreenshots/zenith-screenshot.png';
import petShelterImg from '../images/ProScreenshots/petshelter_shot.png';
import pomodoroClockImg from '../images/ProScreenshots/pomodoro_clock_shot.png';
import quoteMachineImg from '../images/ProScreenshots/quotemachine.png';
import jsCalculatorImg from '../images/ProScreenshots/jscalculator_shot.png';
import tictactoeImg from '../images/ProScreenshots/tictactoe_shot.png';

export default class Portfolio extends Component{
    render(){
        // portfolio items
        var portfilioItems = [
            {link:"https://brianlusina.github.io/Menu", canvasImg:canvas, wireframeImg:wireframe, projectImg:menuImg, title:"Menu"},
            {link:"https://brianlusina.github.io/Emerald-Designs/", canvasImg:canvas, wireframeImg:wireframe, projectImg:emeraldDesigns, title:"Emerald"},
            {link:"http://foodhut.herokuapp.com/", canvasImg:canvas, wireframeImg:wireframe, projectImg:foodHutImg, title:"Food Hut"},
            {link:"https://brianlusina.github.io/Wiki-Page", canvasImg:canvas, wireframeImg:wireframe, projectImg:miniWikiImg, title:"Mini Wiki"},
            {link:"https://lutreasuregram.herokuapp.com/", canvasImg:canvas, wireframeImg:wireframe, projectImg:treasureGramImg, title:"Treasure Gram"},
            {link:"https://brianlusina.github.io/Zenith-site", canvasImg:canvas, wireframeImg:wireframe, projectImg:zenithImg, title:"Zenith"},
            {link:"https://play.google.com/store/apps/details?id=com.petshelter.pets", canvasImg:canvas, wireframeImg:wireframe, projectImg:petShelterImg, title:"Pet shelter"},
            {link:"https://brianlusina.github.io/PomodoroClock", canvasImg:canvas, wireframeImg:wireframe, projectImg:pomodoroClockImg, title:"Pomodoro Clock"},
            {link:"https://brianlusina.github.io/QuoteMachine", canvasImg:canvas, wireframeImg:wireframe, projectImg:quoteMachineImg, title:"Quote Machine"},
            {link:"https://brianlusina.github.io/JS-Calculator", canvasImg:canvas, wireframeImg:wireframe, projectImg:jsCalculatorImg, title:"JS Calculator"},
            {link:"https://brianlusina.github.io/TicTacToe", canvasImg:canvas, wireframeImg:wireframe, projectImg:tictactoeImg, title:"Tic Tac Toe"},
        ];
        
        // map each item to a view
        var renderItems = portfilioItems.map((item, index) => {
            return (
                <li key={index} className="grid__item">
                    <a className="grid__link" href={item.link}>
                        <img className="grid__img layer" src={item.canvasImg} alt="Canvas Dummy" />
                        <img className="grid__img layer" src={item.wireframeImg} alt="Wireframe Dummy" />
                        <img className="grid__img layer grid__pro_img" src={item.projectImg} alt={item.title} />
                        <span className="grid__title">{item.title}</span>
                    </a>
                </li>
            )                     
        });
        
        // return the view
        return(
            <div className="isolayer isolayer--scroll1 isolayer--shadow">
            	<ul className="grid grid--effect-flip">
                    {renderItems}
                </ul>
            </div>
        )
    }
}