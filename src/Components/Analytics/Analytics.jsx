import React from "react";
import "./Analytics.css";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";

function Analytics({ chart_i, chart_ii, chart_iii, title, value, img }) {
  const data = [
    {
      name: "Sept",
      Earnings: 4000,
      Followers: 2400,
    },
    {
      name: "Oct",
      Earnings: 3000,
      Followers: 1398,
    },
    {
      name: "Nov",
      Earnings: 2000,
      Followers: 9800,
    },
    {
      name: "Dec",
      Earnings: 2780,
      Followers: 3908,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  return (
    <div className="analytics">
      {chart_i && (
        <>
          <header>
            <span className="followers">Subscribs:</span>
            <span className="earnings">Earnings:</span>
          </header>
          <BarChart width={250} height={210} data={data}>
            <CartesianGrid strokeDasharray="100 10 " />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Followers" fill="#05454d" />
            <Bar dataKey="Earnings" fill="#810551" />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <>
          <LineChart
            width={280}
            height={210}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Followers" stroke="#05454d" />
            <Line type="monotone" dataKey="Earnings" stroke="#810551" />
          </LineChart>
        </>
      )}

      {chart_iii && (
        <PieChart width={730} height={250}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#05454d"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#810551"
            label
          />
        </PieChart>
      )}

      {title && (
        <>
          <h1 className="title">{title}</h1>
          <h2 className="value">{value}</h2>
          <h2 className="text">
            Peoople are loving your content <br /> 🙌🏻🎉🎐
          </h2>
          <img src={img} alt="" />
        </>
      )}
    </div>
  );
}

export default Analytics;
