import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Summary from "./summary";
import RegionGraph from "./regionGraph";
import RegionGrid from "./regionGrid";
import IndustryGrid from "./industryGrid";




// declaring a constructor function that takes in the property prop 
//  initial state is sotied in this.state and is initialized with an empty object {}
class Template extends Component {
	constructor(prop){
		super(prop);
		this.state ={
			response: null
		}
	}

	// fetch data which will call the API and return a response- then method to to call another function 
	// fetches the data from the server. and passes "then" an argument, which shouls return a JSON data back 
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
	// allows to execute the react code when the component is already placed in the DOM
	componentDidMount() {
		this.fetchData();
	}


	render() {  
		if(!this.state.response){
			return null
		}  
		// declare a variable called response that is used to store the data from the API call
		const response = this.state.response;
		return (	
			<div style={{padding:'40px 20px 40px 20px'}}>
					  {/* give each row its own column - one container for summary, region graph, industry grid and region grid */}
					<Row>
						<Col className='colContainer'>
							<div style={{fontSize:'40px'}}>Occupation Overview</div>
							{/* create an object with occupation(list of occupations) and region(list of regions) properties */}
							<div>{response.occupation.title} in {response.region.title}</div>
						</Col>					
					</Row>	  
					<Row>
						<Col className='colContainer'>
							<Summary summaryData={response.summary} />
						</Col>					
					</Row>
					<Row>
						<Col className='colContainer'>
							<RegionGraph />
						</Col>					
					</Row>		
					<Row>
						<Col className='colContainer'>
							<RegionGrid regionalData={response.trend_comparison} />
						</Col>
					</Row>			
					<Row>
						<Col className='colContainer'>
							<IndustryGrid industriesData={response.employing_industries} />
						</Col>
					</Row>	
				
			</div>
		);
	  }

}

export default Template;
