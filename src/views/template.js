import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 




// declaring a constructor function that takes in the property prop 
//  initial state is sotied in this.state and is initialized with an empty object {}
class Template extends Component {
	constructor(prop){
		super(prop);
		this.state ={
			response: null
		}
	}

	// fetch - then method to to call another function 
	// fetches the data fromt he server. and passes "then" an argument, which shouls return a JSON data back 
	fetchData() {
		fetch('mock-data1.json'
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
				// set state - to update the state of the component with what is returned
			}).then(resp => resp.json()).then((result) => {
				this.setState({
					response: result
				})
			});
	}


}