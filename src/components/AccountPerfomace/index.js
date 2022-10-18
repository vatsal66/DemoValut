import React from "react";
import { Line } from "react-chartjs-2";

const AccountPerformace = (props) => {
    const {data3} = props;
    return (
        <div className="right-chart-container">
            <div>
              <div className="chart-first-title">
                Account Performance
              </div>
            </div>
            <Line data={data3} />
          </div>
    )
}

export default AccountPerformace;