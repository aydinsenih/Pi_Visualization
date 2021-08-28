import React from "react";
import { Line } from "@ant-design/charts";

const ChartLine = (props) => {
    const { NormNumbers, TotalCount } = props;
    const data = NormNumbers;

    const config = {
        data,
        height: 400,
        xField: "number",
        yField: "value",
        point: {
            size: 5,
            shape: "diamond",
        },
    };

    return <Line {...config} />;
};

export default ChartLine;
