import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RegionGraph extends Component {
	// constructor function of the component will be passed in the prop argument and it will set the state property with an empty object
	constructor(prop){
		super(prop);
		this.state ={
			regionGraphData: null
		}
	}

	// fetchs the data using then method and set it as state
	fetchData() {
		fetch('mock-data2.json'	// include server api path
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}).then(resp => resp.json()).then((result) => {
				this.setState({
					regionGraphData : result
				});
			});
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		// checks if the regionGraphData is null, if so then return null
		if(!this.state.regionGraphData)
            return null;
		const regionGraphData = this.state.regionGraphData;
		// creates object and set up two axis 
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light2", 
			// giving each axis properties (y axis - percentage, intervals of 10, suffix)
			axisY: {
				title: "Percentage change",
				interval: 10,
				suffix: "%",
				gridThickness: 0,
				lineThickness: 2
			},
			// x-axis - interval, year
			axisX: {
				interval: 2,
				intervalType: 'year',
				gridColor: "lightgray" ,
				gridThickness: 0.5,
				lineThickness: 0
			},
			// function that takes an array of data points and creates a bar graph 
			//  arguments - type(line), type of marker (circle, square, traingle)
			// arguments - color and line color
			//  arguments - tooltip - for each point on the graph, which will show up when you hover over it
			// arguments - array of data points that are created by looping through all regions in regionGraphData and then for each state in stateGrapData and nation in nationGrapData
			data: [{
				type: "line",
				markerType: "circle",
				markerColor: "black",
				lineColor: "black",
				toolTipContent: "Year {x}: {y}%",
				dataPoints: regionGraphData.region.map((d)=> {return {x:d.year,y:d.percentage} })
			},{
				type: "line",
				markerType: "square",
				markerColor: "#0095ff",
				lineColor: "#0095ff",
				toolTipContent: "Year {x}: {y}%",
				dataPoints: regionGraphData.state.map((d)=> {return {x:d.year,y:d.percentage} })
			},{
				type: "line",
				markerType: "triangle",
				markerColor: "lightblue",
				lineColor: "lightblue",
				toolTipContent: "Year {x}: {y}%",
				dataPoints: regionGraphData.nation.map((d)=> {return {x:d.year,y:d.percentage} })
			}]
		};

		// returns the text/line/styling and renders the options object
		return (
			<div style={{paddingTop:'30px'}}>
				<h5>Regional Trends</h5>
				<hr className="headerLine"></hr>
				<CanvasJSChart options = {options} />
			</div>
			);
		}
	}
	
	export default RegionGraph;