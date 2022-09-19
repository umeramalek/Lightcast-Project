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