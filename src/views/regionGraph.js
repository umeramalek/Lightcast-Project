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