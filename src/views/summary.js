import React, { Component } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {formatNumber} from './utils';

class Summary extends Component {

    // declares a variable with all the data about jobs for each year
    //  calculates the percentage job in each region above the national average 
    jobsCol(jobsData){
        const percentage = Math.round(jobsData.regional/jobsData.national_avg*100);
        return (<>
            <div style={{fontSize:'40px'}}>{formatNumber(jobsData.regional)}</div>
            <div>Jobs ({jobsData.year})</div>
            <div>{percentage}% <span style={{color:"green"}}>above</span> National Percentage</div>
        </>);
    }

    