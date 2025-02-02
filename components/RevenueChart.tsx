"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTheme } from "@/hooks/useTheme";
import Card from "./Card";
import { useContext } from "react";
import { theme } from "@/providers/ThemeContext";

const data = [
  { month: "Jan", value: 30000 },
  { month: "Feb", value: 45000 },
  { month: "Mar", value: 25000 },
  { month: "Apr", value: 20000 },
  { month: "May", value: 15000 },
  { month: "Jun", value: 40000 },
  { month: "Jul", value: 30000 },
  { month: "Aug", value: 30000 },
  { month: "Sep", value: 15000 },
  { month: "Oct", value: 25000 },
  { month: "Nov", value: 40000 },
  { month: "Dec", value: 45000 },
];

export default function RevenueChart() {
  const  isDark = useContext(theme);
  console.log(isDark);
  
  if(isDark){
  return (
    <Card CardTitle="Overview">     
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke={ "#374151" }
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF"  }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value}`}
            tick={{ fill: "#9CA3AF"  }}
          />
          <Bar
            dataKey="value"
            fill="#fff"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      </Card>

  );
}

else{
   return (
    <Card CardTitle="Overview">   
       
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke={ "#E5E7EB"}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value}`}
            tick={{ fill: "#6B7280" }}
          />
          <Bar
            dataKey="value"
            fill="#000"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      </Card>
  );
}
}