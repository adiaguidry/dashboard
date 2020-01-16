import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NivoPie = () => {
  //   const margin = { top: 30, right: 200, bottom: 30, left: 30 };

  const [data, setData] = useState([
    {
      id: "Work",
      label: "Work",
      value: 120
    },
    {
      id: "Eat",
      label: "Eat",
      value: 35
    },
    {
      id: "Commute",
      label: "Commute",
      value: 33
    }
  ]);
  return (
    <div className="adia" style={{ width: 250, height: 250 }}>
      <ResponsivePie
        margin={{ top: 0, right: 220, bottom: 30, left: 210 }}
        data={data}
        colors={["#81a8ff", "#fff", " #fff"]}
        innerRadius={0}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        theme={
          {
            //   background: "#ffffff",
            //   axis: {
            //     fontSize: "14px",
            //     tickColor: "#eee",
            //     ticks: {
            //       line: {
            //         stroke: "#555555"
            //       },
            //       text: {
            //         fill: "##efef"
            //       }
            //     },
            //     legend: {
            //       text: {
            //         fill: "#555"
            //       }
            //     }
            //   },
            //   grid: {
            //     line: {
            //       stroke: "#555555"
            //     }
            //   }
          }
        }
        legends={
          [
            //   {
            //     anchor: "right",
            //     direction: "column",
            //     justify: false,
            //     translateX: 290,
            //     translateY: 0,
            //     itemsSpacing: 2,
            //     itemWidth: 100,
            //     itemHeight: 20,
            //     itemDirection: "left-to-right",
            //     itemOpacity: 0.85,
            //     iitemTextColor: "#555",
            //     symbolSize: 20,
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemOpacity: 1
            //         }
            //       }
            //     ]
            //   }
          ]
        }
      />
    </div>
  );
};

export default NivoPie;
