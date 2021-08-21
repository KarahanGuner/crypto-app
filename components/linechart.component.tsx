import React from 'react'
import {Line} from 'react-chartjs-2';


const options = {
    scales: {
      xAxis: {
        // The axis for this scale is determined from the first letter of the id as `'x'`
        // It is recommended to specify `position` and / or `axis` explicitly.
        type: 'time',
      }
    }
  }

const LineChart: React.FC<any> = ({chartData}) => {
    

    const data= {
        datasets: [
          {
            label: 'Price',
            data: [{
                x: new Date(2016, 5 ,1),
                y: Math.random() * 100
              },
              {
                x: new Date(2016, 6 ,1),
                y: Math.random() * 100
              },
              {
                x: new Date(2016, 7 ,1),
                y: Math.random() * 100
              },
              {
                x: new Date(2016, 8 ,1),
                y: Math.random() * 100
              },
              {
                x: new Date(2016, 9 ,1),
                y: Math.random() * 100
              },
              {
                x: new Date(2016, 10 ,1),
                y: Math.random() * 100
              },
            ],
            backgroundColor: "rgba(174, 305, 194, 0.5)",
            borderColor: "rgba(174, 305, 194, 0.4)",
            pointRadius: 0,
          },
        ],
      } 

    return (
        <Line data={data} options={options}/>
    )
}

export default LineChart;