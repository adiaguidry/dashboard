import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NivoDoughnut = () => {
  //   const margin = { top: 30, right: 200, bottom: 30, left: 30 };

  const [styles, setStyle] = useState({
    root: {
      fontFamily: "consolas, sans-serif",
      textAlign: "center",
      position: "relative",
      width: 400,
      height: 400
    },

    totalLabel: {
      fontSize: 24
    }
  });

  const [data, setData] = useState([
    {
      id: "Fast",
      label: "hours",
      value: 16
    },
    {
      id: "Eat",
      label: "hours",
      value: 8
    }
  ]);
  return (
    <div className="adia" style={{ width: 250, height: 250 }}>
      <ResponsivePie
        margin={{ top: 50, right: 250, bottom: 30, left: 185 }}
        data={data}
        colors={["#81a8ff", "#AFF000", " #d9d9d9", "#AFF000", "#45f46f"]}
        innerRadius={0.8}
        slicesLabelsSkipAngle={30}
        sliceLabel={function(e) {
          return e.id + " (" + e.value + ")";
        }}
        enableRadialLabels={false}
        slicesLabelsTextColor="#6351c3"
        theme={{
          background: "#ffffff",
          axis: {
            fontSize: "14px",
            tickColor: "#eee",
            ticks: {
              line: {
                stroke: "#555555"
              },
              text: {
                fill: "##efef"
              }
            },
            legend: {
              text: {
                fill: "#555"
              }
            }
          },
          grid: {
            line: {
              stroke: "#555555"
            }
          }
        }}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 300,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            iitemTextColor: "#555",
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default NivoDoughnut;
