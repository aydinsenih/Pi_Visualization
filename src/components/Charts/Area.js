import React from "react";
import { Area } from "@ant-design/charts";

const ChartArea = (props) => {
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

    return <Area {...config} />;
};

export default ChartArea;
