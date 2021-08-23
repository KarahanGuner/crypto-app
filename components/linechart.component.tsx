import React from 'react'
import {Line} from 'react-chartjs-2';
import { ChartOptions } from 'chart.js'
import 'chartjs-adapter-moment';

const options : ChartOptions = {
    scales: {
      xAxis: {
        type: 'time',
        grid : {
          display : false
      }
      },
      yAxis: {
        ticks: {
          callback: (label) => `$${label}`
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
            label: function (context: {[key: string]: any}) {
              if(context.raw.y > 1) {
                return `$${context.raw.y.toFixed(2)}`;
              } else {
                return `$${Number(context.raw.y).toFixed(10)}`;
              }
            }
        },
        mode: 'index',
        intersect: false
      },
      legend: {
        display: false //This will do the task
      }
    },
    
  }

const LineChart: React.FC<any> = ({chartData}) => {
    const data= {
        datasets: [
          {
            label: 'Price',
            data: chartData,
            backgroundColor: "#6fb2ff70",
            borderColor: "#58a6ff",
            pointRadius: 0,
            fill: true
          },
        ],
      } 

    return (
        <Line data={data} options={options}/>
    )
}

export default LineChart;