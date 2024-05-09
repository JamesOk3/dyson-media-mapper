import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
/**
 * A function that represents the proportion of users (Registered vs Guests) that visit per month
 *
 * @return {JSX.Element} This component which will be used in the Dashboard page and will display a pie graph for authorized users
 *
 * @author Hiruy Alemseged
 * Date: May 3rd, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function UserActivityChart() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); 

  const data = {
    labels: ['Users', 'Guests'],
    values: [76, 24],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstanceRef.current) {
        
        chartInstanceRef.current.data.labels = data.labels.map((label, index) => `${label}: ${data.values[index]}%`);
        chartInstanceRef.current.data.datasets[0].data = data.values;
       
      } else {
       
        chartInstanceRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: data.labels.map((label, index) => `${label}: ${data.values[index]}%`),
            datasets: [{
              data: data.values,
              backgroundColor: [
                'purple',
                'blue',
              ],
            }],
          },
        });
      }
    }
  }, [data]);

  return (
    <div>
      <h2 className="text-xl font-semibold">User Engagement Breakdown (Monthly Average)</h2>
      <canvas ref={chartRef} width={400} height={400} />
    </div>
  );
}

export default UserActivityChart;