import React from "react";
import { Bar } from "react-chartjs-2";

const ProfitLossChart = (props) => {
    const {data2} = props;

    return (
        <div className="right-chart-container">
            <div className="chart-first-title">
              Profit and Losses
            </div>
            <div className="chart-first-header">
              +$ 4,375
            </div>

            <div>
              <Bar data={data2} />
            </div>
          </div>
    )
}

export default ProfitLossChart;