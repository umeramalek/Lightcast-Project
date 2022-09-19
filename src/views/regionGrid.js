import React, { Component } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {formatNumber} from './utils';

class RegionGrid extends Component {

    // declaring a variable - which is an objetc that will be used to create the grid 
    regionalGrid() {
        {/* 4 rows will be created */}
        return (<>
        {/* 1st row contains the header information for each region  */}
            <Row className="gridHeaderRow">{ this.headerRow() } </Row>
            {/*3 rows for regional, state and nation with shapes   */}
            <Row className="gridRow">{ this.dataRow(this.props.regionalData.regional, 'Region', 'circle') } </Row>
            <Row className="gridRow">{ this.dataRow(this.props.regionalData.state, 'State', 'square') } </Row>
            <Row className="gridRow">{ this.dataRow(this.props.regionalData.nation, 'Nation', 'triangle') } </Row>
        </>); 
    }


    // header row styling - each column styling with job year and perentage changed
    headerRow(){
        return (<>
            <Col className="gridCol" style={{maxWidth: '50px'}}><span></span></Col>
            <Col lg={7} className="gridCol"><span>Region</span></Col>
            <Col className="gridCol rightAlign"><span>{this.props.regionalData.start_year} Jobs</span></Col>
            <Col className="gridCol rightAlign"><span>{this.props.regionalData.end_year} Jobs</span></Col>
            <Col className="gridCol rightAlign"><span>Change</span></Col>
            <Col className="gridCol rightAlign"><span>% Change</span></Col>
        </>);
    }


    // rowData - an array of objects that represents the data for each row in the table
    // marker - which is used to create markers on the grid with different colors and styles
    dataRow(rowData,name,marker){
        // varaible for each calculation in the data
        const startYear = rowData[0];
        const endYear = rowData[rowData.length-1];
        const change = endYear - startYear;
        const percentage = (change/startYear*100).toFixed(1);  
        return (<>
        {/* each column styled - right alignment, number format (integer, percentage) */}
            <Col className="gridCol" style={{maxWidth: '50px'}}><div className={marker}></div></Col>
            <Col lg={7} className="gridCol"><span>{name}</span></Col>
            <Col className="gridCol rightAlign"><span>{formatNumber(startYear)}</span></Col>
            <Col className="gridCol rightAlign"><span>{formatNumber(endYear)}</span></Col>
            <Col className="gridCol rightAlign"><span>{formatNumber(change)}</span></Col>
            <Col className="gridCol rightAlign"><span>{percentage}%</span></Col>
        </>);
    }


    // rendering regional grid container
    render(){
        return(
        <div>
            <Container fluid className="grid">
                {this.regionalGrid()}
            </Container>
        </div>
        )
    }   
}

export default RegionGrid;

