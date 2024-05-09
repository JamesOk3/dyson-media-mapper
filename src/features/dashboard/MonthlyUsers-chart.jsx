import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
/**
 * A function that represents the increase of users on the platform per month.
 *
 * @return {JSX.Element} This component which will be used in the Dashboard page and will display a line graph for authorized users
 *
 * @author Hiruy Alemseged
 * Date: May 3rd, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function MonthlyUsersChart() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); 

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [6, 2, 15, 7, 4], 
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstanceRef.current) {
        chartInstanceRef.current.data.labels = data.labels;
        chartInstanceRef.current.data.datasets[0].data = data.values;
      } else {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line', 
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Monthly User', 
              data: data.values,
              backgroundColor: 'bg-blue-100', 
              borderColor: 'border-blue-100', 
              borderWidth: 1,
              tension: 0.1 
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
                min: 5,
                max: 20
              }
            }
          }
        });
      }
    }
  }, [data]);

  return (
    <div>
      <h2 className="text-xl font-semibold">Monthly User Growth (Per Month)</h2>
      <canvas ref={chartRef} width={500} height={500} />
    </div>
  );
}

export default MonthlyUsersChart