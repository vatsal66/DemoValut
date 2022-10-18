import React, { useEffect, useState } from "react";

const RightFirstChart = () => {
    return (
        <div>
            <div className="chart-first-title">
                Total Account Value
            </div>
            <div className="chart-first-header">
                $1,050,000
            </div>

            <div className="circle-cart">
                <div className="circle-cart-firts">
                    <div className="circle-chart-text">
                        <div className="first-text">$1,000,000</div>
                        <div className="second-text">Brought</div>
                    </div>
                </div>
                <div className="circle-cart-second">
                    <div className="circle-chart-text-second">
                        <div className="first-text">$50,000</div>
                        <div className="second-text">Withdrawn</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightFirstChart;