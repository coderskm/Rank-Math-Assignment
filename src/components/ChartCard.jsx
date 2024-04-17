import { LineChart, Line } from 'recharts';
import "./ChartCard.css";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 250, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 150, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 50, pv: 2400, amt: 2400 },
  { name: "Page G", uv: 500, pv: 2400, amt: 2400 },
  { name: "Page H", uv: 700, pv: 2400, amt: 2400 },
  { name: "Page I", uv: 50, pv: 2400, amt: 2400 }
];

export default function ChartCard() {
  const renderLineChart = (
  <LineChart width={400} height={200} data={data} style={{width:"100%"}}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
  return (
    <div className='chartcard'>{renderLineChart}</div>
  )
}

