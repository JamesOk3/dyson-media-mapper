import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

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
        chartInstanceRef.current.update();
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
                max: 16
              }
            }
          }
        });
      }
    }
  }, [data]);

  return (
    <div className="h-[95%] p-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">Monthly User Growth (Per Month)</h2>
      <canvas ref={chartRef} width={500} height={500} />
    </div>
  );
}

export default MonthlyUsersChart