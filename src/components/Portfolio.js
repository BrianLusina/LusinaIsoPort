import React from "react";
import canvas from "../images/canvas.png";
import wireframe from "../images/wireframe.png";
import menuImg from "../images/ProScreenshots/menu-screenshot.png";
import emeraldDesigns from "../images/ProScreenshots/emerald.png";
import foodHutImg from "../images/ProScreenshots/foodhut.png";
import miniWikiImg from "../images/ProScreenshots/mini-wiki-screenshot.png";
import treasureGramImg from "../images/ProScreenshots/lutreasuregram.png";
import zenithImg from "../images/ProScreenshots/zenith-screenshot.png";
import petShelterImg from "../images/ProScreenshots/petshelter_shot.png";
import pomodoroClockImg from "../images/ProScreenshots/pomodoro_clock_shot.png";
import quoteMachineImg from "../images/ProScreenshots/quotemachine.png";
import jsCalculatorImg from "../images/ProScreenshots/jscalculator_shot.png";
import tictactoeImg from "../images/ProScreenshots/tictactoe_shot.png";
import simongameImg from "../images/ProScreenshots/simongame.png";
import babystepsImg from "../images/ProScreenshots/babysteps.png";
import africariseImg from "../images/ProScreenshots/africarise.png";
import markdownjournalImg from "../images/ProScreenshots/markdown-journal.png";
import camperleaderboardImg from "../images/ProScreenshots/camperleaderboard.png";
import d3barchart from "../images/ProScreenshots/d3barchart_shot.png";
import d3forcedirected from "../images/ProScreenshots/d3forcedirectedgraph_shot.png";
import d3heatmap from "../images/ProScreenshots/d3heatmap_shot.png";
import d3meteorstrike from "../images/ProScreenshots/d3meteorstrike_shot.png";
import d3scatterplot from "../images/ProScreenshots/d3scatterplot_shot.png";

/**
 * Portfolio stateless component
 * */
const Portfolio = () => {

    // portfolio items
    let portfolioItems = [
        {
            link: "https://menurestaurant.surge.sh/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: menuImg,
            title: "Menu"
        },
        {
            link: "https://emeralddesigns.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: emeraldDesigns,
            title: "Emerald"
        },
        {
            link: "http://foodhut.herokuapp.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: foodHutImg,
            title: "Food Hut"
        },
        {
            link: "https://miniwiki.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: miniWikiImg,
            title: "Mini Wiki"
        },
        {
            link: "https://lutreasuregram.herokuapp.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: treasureGramImg,
            title: "Treasure Gram"
        },
        {
            link: "https://zenith.surge.sh/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: zenithImg,
            title: "Zenith"
        },
        {
            link: "https://play.google.com/store/apps/details?id=com.petshelter.pets",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: petShelterImg,
            title: "Pet shelter"
        },
        {
            link: "https://pomodoroclock.surge.sh/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: pomodoroClockImg,
            title: "Pomodoro Clock"
        },
        {
            link: "https://quotemachine.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: quoteMachineImg,
            title: "Quote Machine"
        },
        {
            link: "https://jscalculator.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: jsCalculatorImg,
            title: "JS Calculator"
        },
        {
            link: "https://tictactoe-game.surge.sh/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: tictactoeImg,
            title: "Tic Tac Toe"
        },
        {
            link: "http://africarise.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: africariseImg,
            title: "Africa Rise"
        },
        {
            link: "https://simongame.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: simongameImg,
            title: "Simon Game"
        },
        {
            link: "https://babysteps.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: babystepsImg,
            title: "Baby Steps"
        },
        {
            link: "http://markdownjournal.surge.sh/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: markdownjournalImg,
            title: "Mardown Journal"
        },
        {
            link: "http://camperleaderboard.netlify.com",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: camperleaderboardImg,
            title: "Leaderboard"
        },
        {
            link: "http://d3barchart.netlify.com",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: d3barchart,
            title: "D3 BarChart"
        },
        {
            link: "http://d3forcedirectedgraph.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: d3forcedirected,
            title: "D3 Force Directed Graph"
        },
        {
            link: "http://d3heatmap.netlify.com",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: d3heatmap,
            title: "D3 Heat Map"
        },
        {
            link: "https://d3meteorstrike.netlify.com/",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: d3meteorstrike,
            title: "Meteor Strike"
        },
        {
            link: "https://d3scatterplot.netlify.com",
            canvasImg: canvas,
            wireFrameImg: wireframe,
            projectImg: d3scatterplot,
            title: "D3 ScatterPlot"
        }
    ];


    // map each item to a view
    let renderItems = portfolioItems.map((item, index) => {
        return (
            <li key={index} className="grid__item">
                <a className="grid__link" href={item.link}>
                    <img className="grid__img layer" src={item.canvasImg} alt="Canvas Dummy"/>
                    <img className="grid__img layer" src={item.wireFrameImg} alt="Wireframe Dummy"/>
                    <img className="grid__img layer grid__pro_img" src={item.projectImg} alt={item.title}/>
                    <span className="grid__title">{item.title}</span>
                </a>
            </li>
        )
    });

    return(
        <div className="isolayer isolayer--scroll1 isolayer--shadow">
            <ul className="grid grid--effect-flip">
                {renderItems}
            </ul>
        </div>
    );
};

export default Portfolio