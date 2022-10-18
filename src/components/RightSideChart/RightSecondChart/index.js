import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Col, Row } from "reactstrap";
import BottomTextValue from "../../LeftSideChart/ChartOne/BottomTextValue";

const RightSecondChart = (props) => {
    const { TotalReturn } = props;

    return (
        <>
            <div>
                <div className="chart-first-title">
                    Total Account Value
                </div>
                <div className="chart-first-header">
                    $1,050,000
                </div>
            </div>
            <Row>
                <Col md={6} xl={6} sm={6}>
                    <Doughnut data={TotalReturn} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }} />
                </Col>
                <Col md={6} xl={6} sm={6} className="m-auto">
                    <div className="first-progress-text-container ml-0">
                        <div className={`first-progress-text bg-first-progress`} />
                        $20,000
                    </div>
                    <div className="first-progress-text-container ml-0">
                        <div className={`first-progress-text bg-second-progress`} />
                        $20,000
                    </div>
                    <div className="first-progress-text-container ml-0">
                        <div className={`first-progress-text bg-thired-progress`} />
                        $20,000
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default RightSecondChart;