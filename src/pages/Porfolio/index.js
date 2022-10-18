import React from "react";
import './styles.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);


const Porfolio = () => {

  return (
    <>
      <h3> No data Found</h3>
    </>
  );
};

export default Porfolio;
