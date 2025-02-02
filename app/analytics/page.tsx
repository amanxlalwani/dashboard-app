
"use client"

import  Card  from "../../components/Card"
import { Chart } from "react-google-charts"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Users',
      data: [4000, 3000, 2000, 2780, 1890, 2390],
      borderColor: '#FF6384',
      backgroundColor: '#FF6384',
      tension: 0.4,
    },
    {
      label: 'Sales',
      data: [2400, 1398, 9800, 3908, 4800, 3800],
      borderColor: '#36A2EB',
      backgroundColor: '#36A2EB',
      tension: 0.4,
    },
  ],
};

const pieData = [
  { name: 'Mobile', value: 300 },
  { name: 'Desktop', value: 500 },
  { name: 'Tablet', value: 200 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];


const geoData = [
  ["Country", "Users"],
  ["United States", 90],
  ["United Kingdom", 60],
  ["Germany", 70],
  ["France", 100],
  ["Canada", 90],
  ["Australia", 85],
  ["Japan", 80],
  ["Brazil", 75],
  ["India", 200],
  ["China", 65],
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 px-4 my-4">
      <div className="grid gap-4 md:grid-cols-2">

        <Card CardTitle="User Growth & Revenue">
          
            <div className="h-[300px]">
              <Line 
                data={lineData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: '#e5e7eb',
                      },
                    },
                    x: {
                      grid: {
                        color: '#e5e7eb',
                      },
                    },
                  },
                }}
              />
            </div>
          
        </Card>

  
        <Card CardTitle="Device Distribution">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
      
        </Card>
      </div>

      <Card CardTitle="Global User Distribution">
        
            <div className="h-[400px] w-full">
            <Chart
              chartType="GeoChart"
              width="100%"
              height="100%"
              data={geoData}
              options={{
                colorAxis: { colors: ['#e5f5e0', '#31a354'] },
                backgroundColor: 'transparent',
                datalessRegionColor: '#f5f5f5',
                defaultColor: '#f5f5f5',
              }}
            />
          </div>
        
      </Card>
    </div>
  )
}