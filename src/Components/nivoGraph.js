import React, { useState } from "react";
import { ResponsiveBullet } from "@nivo/bullet";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NivoGraph = () => {
  const [data, setData] = useState([
    {
      id: " ",
      ranges: [92, 27, 10, 120],
      measures: [50],
      markers: []
    }
  ]);

  return (
    <div className="row">
      <div className="col-md-12 nivo-graph">
        <ResponsiveBullet
          data={data}
          //   margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
          spacing={6}
          //   titleAlign="start"
          //   titleOffsetX={-70}

          axisPosition={"after"}
          measureSize={0.05}
          animate={true}
          motionStiffness={15}
          motionDamping={4}
        />
      </div>
    </div>
  );
};

export default NivoGraph;
