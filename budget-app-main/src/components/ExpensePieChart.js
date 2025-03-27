import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ExpensePieChart = ({ expenseData }) => {
  // display pie chart without data
  if (!expenseData || Object.keys(expenseData).length === 0) {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <Pie
              data={[{ name: "No Data", value: 100 }]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="#d3d3d3" />
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // Transform the input data into the format expected by Recharts
  const chartData = Object.entries(expenseData).map(([name, value]) => ({
    name,
    value,
  }));

  // Color palette for the pie segments
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#8dd1e1",
  ];

  // Custom styles to prevent the black outline on click
  const containerStyle = {
    width: "100%",
    height: 300,
    outline: "none", // This prevents the outline on the container
  };

  return (
    <div style={containerStyle} className="no-outline">
      <ResponsiveContainer>
        <PieChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;