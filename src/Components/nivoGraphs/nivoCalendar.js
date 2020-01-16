import React, { useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import dataset from "./common/data-calendar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NivoCalendar = () => {
  //   const [data, setData] = useState([dataset]);

  return (
    <div className="row">
      <div className="col-md-12" style={{ width: 200, height: 300 }}>
        <ResponsiveCalendar
          data={dataset()}
          from="2015-03-01"
          to="2015-03-27"
          emptyColor="#eeeeee"
          colors={[
            "rgb(71, 118, 222)",
            "#97e3d5",
            "#e8ca0",
            "rgb(69, 244, 111)"
          ]}
          minValue={-51}
          //   margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={30}
          yearLegendOffset={12}
          monthBorderColor="#ffffff"
          monthLegendOffset={6}
          daySpacing={3}
          dayBorderWidth={3}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default NivoCalendar;
