import React from "react";
import { Radar } from "@ant-design/charts";

const ChartRadar = (props) => {
    const { NormNumbers, TotalCount } = props;
    const config = {
        data: NormNumbers.map((n) => ({ name: n.number, value: n.value })),
        xField: "name",
        yField: "value",
        meta: {
            star: {
                alias: "count",
                min: 0,
                nice: true,
            },
        },
        xAxis: {
            line: null,
            tickLine: null,
        },
        yAxis: {
            label: false,
            grid: {
                alternateColor: "rgba(0, 0, 0, 0.04)",
            },
        },
        point: {},
        area: {},
    };
    return <Radar {...config} />;
};

export default ChartRadar;
