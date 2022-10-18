import React from "react";
import ProgressBar from 'react-customizable-progressbar';
import { Col, Row } from "reactstrap";
import ProgressLineChart from "./ProgressLineChart";
import BottomTextValue from "./BottomTextValue";

const ChartOne = (props) => {
    const {ProgressBarData} = props;

    return (
        <div className="left-first-proggress">
            {ProgressBarData.headerTitle &&
                <>
                    <div className="chart-first-title">
                        {ProgressBarData.title}
                    </div>
                    <div className="chart-first-header">
                        {ProgressBarData.subTitle}
                    </div>
                </>
            }
       
        <div className="chart-first">
          <Row>
            <Col lg={6} className="progressBar">
              <ProgressBar
                progress={ProgressBarData.percentage}
                strokeColor="#3A7B58"
                trackStrokeColor="rgb(241, 248, 240)"
                strokeLinecap="square"
                strokeWidth={30}
                trackStrokeWidth={30}
              >
                 <div className="indicator">
                {ProgressBarData.percentage}%
            </div>
                </ProgressBar>
            </Col>
            <Col lg={6} className="first-chart-text-container">
              <div className="chart-first-title">
              {ProgressBarData.title}
              </div>
              <div className="chart-first-header">
              {ProgressBarData.subTitle}
              </div>
            </Col>
          </Row>
        </div>
        <div className="progressBar-container">
            <ProgressLineChart progressName={ProgressBarData.progressLine} />
        </div>
        <div>
          <Row>
            <BottomTextValue text={ProgressBarData.amountValue}/>
          </Row>
        </div>
      </div>
    )
};

export default ChartOne