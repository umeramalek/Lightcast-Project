import React, { Component } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {formatNumber} from './utils';

class IndustryGrid extends Component {

    industriesGrid() {
        return (<>
        {/* creates a component that renders an array of rows containing data for each industry */}
            <Row className="gridHeaderRow">{ this.headerRow(this.props.industriesData.year) } </Row>
            {this.dataRowLoop()}
        </>); 
    }

    // header row - creates each column for the given title and year and style it
    // font - 7, style it to align right,  
    headerRow(year){
        return (<>
            <Col lg={7} className="gridCol"><span>Industry</span></Col>
            <Col className="gridCol rightAlign"><span>Occupation Jobs in Industry ({year})</span></Col>
            <Col className="gridCol rightAlign"><span>% of Occupation in Industry ({year})</span></Col>
            <Col className="gridCol rightAlign"><span>% of Total Jobs in Industry ({year})</span></Col>
        </>);
    }

     // dataRowLoop - using  for loop iterates through the industries data and creates a row for each industry
    
     dataRowLoop(){
        const rows=[];
        for(let i=0;i< this.props.industriesData.industries.length;i++){
            rows.push(<Row key={i} className="gridRow">{ this.dataRow(this.props.industriesData.industries[i], this.props.industriesData.jobs) } </Row>)
        }
        return rows;
    } 

    // creates a new array called rowData - which loops thorugh the jobs in the data and creates an object for each job and adds that object to the rowData array
    dataRow(rowData, jobs){
        // calculate by dividing the number of occupation jobs by the number of total jobs
        const occPer = (rowData.in_occupation_jobs/jobs*100).toFixed(1);
        // calculate by dividing number of occupation jobs by row data jobs
        const totPer = (rowData.in_occupation_jobs/rowData.jobs*100).toFixed(1);
        // // grid of cells, each containing a title and percentage of people in the occupation
        const backgroundColor = 'linear-gradient(to right, #0096ff17 '+(occPer*2)+'%, white 0%)';
        return (<>
        {/* create columns with styling to produce the resulted data */}
            <Col lg={7} className="gridCol colorBlue" style={{background: backgroundColor}}><span>@ {rowData.title}</span></Col>
            <Col className="gridCol rightAlign"><span>{formatNumber(rowData.in_occupation_jobs)}</span></Col>
            <Col className="gridCol rightAlign"><span>{occPer}%</span></Col>
            <Col className="gridCol rightAlign"><span>{totPer}%</span></Col>
        </>);
    }


    // the function returns an array of objects containing information about companies that employ computer programmers.
    render(){
        return(
        <div style={{paddingTop:'30px'}}>
            <h5>Industries Employing Computer Programmers</h5>
            <hr className="headerLine"></hr>
            <Container fluid className="grid">
                {this.industriesGrid()}
            </Container>
        </div>
        )
    }   
}

export default IndustryGrid;