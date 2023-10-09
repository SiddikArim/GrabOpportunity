import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Assingment A",
    marks: 57,
    total: 3,
    amt: 2400
  },
  {
    name: "Assingment B",
    marks: 60,
    total: 0,
    amt: 2210
  },
  {
    name: "Assingment C",
    marks: 60,
    total: 0,
    amt: 2290
  },
  {
    name: "Assingment D",
    marks: 59,
    total: 1,
    amt: 2000
  },
  {
    name: "Assingment E",
    marks: 27,
    total: 3,
    amt: 2181
  }
];

export default function App() {
  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-xl underline">My Assingment Marks <span className="textColor text-2xl">Statistics</span></h2>
      <BarChart
        width={900}
        height={500}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="marks" stackId="a" fill="#8884d8" />
        <Bar dataKey="total" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
