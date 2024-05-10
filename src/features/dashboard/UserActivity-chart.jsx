import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

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
        chartInstanceRef.current.update();
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
    <div className="h-[95%] p-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-3">User Engagement Breakdown (Monthly Average)</h2>
      <canvas ref={chartRef} width={400} height={400} />
    </div>
  );
}

export default UserActivityChart;