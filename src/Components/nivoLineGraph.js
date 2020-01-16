import React, { useState } from "react";
import { ResponsiveBullet } from "@nivo/bullet";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NivoLineGraph = () => {
  const [data, setData] = useState([
    {
      id: "temp.",
      ranges: [3, 7, 20],
      measures: [],
      markers: []
    },
    {
      id: "power",
      ranges: [5, 14, 20],
      measures: [],
      markers: []
    },
    {
      id: "volume",
      ranges: [6, 0, 20],
      measures: [],
      markers: []
    }
  ]);

  return (
    <div className="row">
      <div className="col-md-12" style={{ width: 500, height: 300 }}>
        <ResponsiveBullet
          data={data}
          margin={{ top: 50, right: 30, bottom: 50, left: 15 }}
          layout="vertical"
          spacing={70}
          titleOffsetX={-5}
          titleOffsetY={-30}
          // measureSize={0}
          // markerSize={0}
          // axisPosition="before"
          animate={true}
          motionStiffness={55}
          motionDamping={25}
          tickValues={[]}
        />
      </div>
    </div>
  );
};

export default NivoLineGraph;

// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";

// const NivoLineGraph = () => {
//   const [data1, setData1] = useState({
//     labels: ["carbs", "protien", "fats", "carbs", "protien", "fats"],
//     datasets: [
//       {
//         label: "Macros",
//         data: [4, 13, 5, 6, 17, 21],
//         backgroundColor: [
//           "rgb(69, 244, 111)",
//           "#343a40",
//           "#6c75437d",
//           "rgb(69, 230 113)",
//           "#343434a40",
//           "#81a8ff"
//         ]
//       }
//     ]
//   });

//   const [options, setOptions] = useState({
//     responsive: true,
//     layout: {
//       margin: {
//         left: 100
//       }
//     }
//   });

//   useEffect(() => {
//     console.log();
//   });
//   return (
//     <div className="row">
//       <div
//         className="col-md-12"
//         style={{ position: "relative", width: 500, height: 600 }}
//       >
//         <Bar data={data1} options={{ options }}></Bar>
//       </div>
//     </div>
//   );
// };

// export default NivoLineGraph;
