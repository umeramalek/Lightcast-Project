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