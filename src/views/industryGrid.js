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