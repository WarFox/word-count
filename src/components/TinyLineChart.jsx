import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

class TinyLineChart extends React.Component {
  render() {
    const { data, width, height, dataKey } = this.props;
    return (
      <LineChart width={width} height={height} data={data}>
        <Line
          type="monotone"
          dataKey="length"
          stroke="#8884d8"
          strokeWidth={1}
          />
        <XAxis dataKey={dataKey} hide={true} />
        <Tooltip />
      </LineChart>
    );
  }
}

export default TinyLineChart;
