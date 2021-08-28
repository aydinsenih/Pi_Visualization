import React from "react";
import { Pie } from "@ant-design/charts";

const ChartPie = (props) => {
    const { NormNumbers, TotalCount } = props;
    const data = NormNumbers;

    const config = {
        data: data,
        appendPadding: 10,
        radius: 0.8,
        height: 500,
        colorField: "number",
        angleField: "value",
        label: {
            type: "inner",
            offset: "-50%",
            content: "{name}\n{percentage}",
            style: {
                textAlign: "center",
                fontSize: 14,
            },
        },
        interactions: [
            { type: "element-selected" },
            { type: "element-active" },
        ],
    };

    return <Pie {...config} />;
};

export default ChartPie;
