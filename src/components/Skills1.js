import React from "react";
import BarChart from "react-bar-chart";


export default function Skill1() {
  const data = [
    { text: "Jan", value: 150 },
    { text: "Feb", value: 300 },
    { text: "Mar", value: 100 },
    { text: "April", value: 140 }
  ];

  const margin = { top: 40, right: 0, bottom: 30, left: 200 };

  return (
    <div className="App">
      <div style={{ width: "20%" }}>
        <BarChart
          ylabel="Quantity"
          width={500}
          height={300}
          margin={margin}
          data={data}
        />
      </div>
    </div>
  );
}

