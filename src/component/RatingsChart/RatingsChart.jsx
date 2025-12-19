import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RatingsChart({ ratings }) {
  const sortedData = [...ratings].sort((a,b)=>b.count-a.count)



  return (
    <div style={{ width: "100%", height: 300 }} className="mt-10">
      <h2 className="text-xl font-semibold mb-2">Ratings</h2>

      <ResponsiveContainer>
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <CartesianGrid horizontal={false} stroke="#eee" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />

          <Bar
            dataKey="count"
            fill="#ff8c32"
            barSize={22}
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
