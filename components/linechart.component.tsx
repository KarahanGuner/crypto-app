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
            backgroundColor: chartData[0].y - chartData[chartData.length-1].y > 0 ? "rgb(235 60 70 / 25%)" : "rgb(30 200 130 / 25%)",
            borderColor: chartData[0].y - chartData[chartData.length-1].y > 0 ? "rgb(235, 60, 70)" : "rgb(30, 200, 130)",
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