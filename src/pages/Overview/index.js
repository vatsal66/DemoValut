import React from "react";
import { Col, Row } from "reactstrap";
import './styles.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Chart, registerables } from 'chart.js';
import ChartOne from "../../components/LeftSideChart/ChartOne";
import RightFirst from "../../components/RightSideChart/RightFirstChart";
import RightSecond from "../../components/RightSideChart/RightSecondChart";
import ProfitLossChart from "../../components/ProfitLossChart";
import AccountPerformace from "../../components/AccountPerfomace";

Chart.register(...registerables);

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const ProgressBarData1 = {
  headerTitle: true,
  title: "Total Account Value",
  subTitle: "$1,050,000",
  percentage: 71,
  progressLine: ["first-progressBar", "second-progressBar", "thired-progressBar", "forth-progressBar", "fifth-progressBar"],
  amountValue: [
    {
      className: "bg-first-progress",
      price: "$400,000"
    },
    {
      className: "bg-second-progress",
      price: "$100,000"
    },
    {
      className: "bg-thired-progress",
      price: "$50,000"
    },
    {
      className: "bg-four-progress",
      price: "$150,000"
    },  
    {
      className: "bg-five-progress",
      price: "$50,000"
    },
  ]
};

const ProgressBarData2 = {
  headerTitle: false,
  title: "Cash",
  subTitle: "$300,000",
  percentage: 29,
  progressLine: ["first-progressBar", "second-progressBar", "thired-progressBar"],
  amountValue: [
    {
      className: "bg-first-progress",
      price: "$400,000"
    },
    {
      className: "bg-second-progress",
      price: "$100,000"
    },
    {
      className: "bg-thired-progress",
      price: "$50,000"
    }
  ]
};

const TotalReturn = {
  // labels: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 40, 20],
      backgroundColor: [
        "#3A7B58",
        "#8FC866",
        "#DAECC4"
      ],
      borderColor: [
        "#3A7B58",
        "#8FC866",
        "#DAECC4"
      ],
      borderWidth: 1
    }
  ]
};

const labels3 = ["Core Model", "Thematic 1", "Thematic 2", "Crypto Trading", "Stock Trading", "dsa", "dsa", "Core Model", "Thematic 1", "Thematic 2", "Crypto Trading", "Stock Trading", "dsa", "dsa"]
const data3 = {
  labels: labels3,
  datasets: [{
    label: 'My First Dataset',
    data: [0, 20, 10, 1, 25, 10, 50, 0, 20, 10, 1, 25, 10, 50],
    fill: false,
    borderColor: '#3A7B58',
    tension: 0.1
  }]
};

const labels = ["Core Model", "Thematic 1", "Thematic 2", "Crypto Trading", "Stock Trading"];

const data2 = {
  labels: labels,
  datasets: [{
    label: "Demo",
    data: [20, -20, 30, -10, -5],
    backgroundColor: [
      '#3A7B58',
      '#DAECC4',
      '#3A7B58',
      '#DAECC4',
      '#DAECC4',
    ],
    borderColor: [
      '#3A7B58',
      '#DAECC4',
      '#3A7B58',
      '#DAECC4',
      '#DAECC4',
    ],
    borderWidth: 1
  }]
};

const Overview = () => {

  return (
    <>
      <Row>
        <Col lg={4} className="left-container">

          <ChartOne ProgressBarData={ProgressBarData1}/>
          <ChartOne ProgressBarData={ProgressBarData2}/>

        </Col>
        <Col lg={8} className="right-container">
          <Row className="right-bottom-container">
            <Col lg={6}>
              <RightFirst />
            </Col>
            <Col lg={6}>
              <RightSecond TotalReturn={TotalReturn} />
            </Col>
          </Row>
          <ProfitLossChart data2={data2} />

          <AccountPerformace data3={data3} />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
