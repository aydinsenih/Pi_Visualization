import axios from "axios";
import { useState } from "react";
import { InputNumber, Button } from "antd";
import ChartLine from "./Charts/Line";
import ChartPie from "./Charts/Pie";
import ChartRadar from "./Charts/Radar";

const BASEURL = "http://api.pi.delivery/v1/pi";

const Pi = (props) => {
    const [pi, setPi] = useState({
        numbers: new Array(10).fill(0),
        count: 0,
        StrNumbers: "",
    });
    const [range, setRange] = useState({ start: 0, end: 100 });

    function getNumbers(startNumber, Digits) {
        var config = {
            method: "get",
            url: BASEURL,
            params: { start: startNumber, numberOfDigits: Digits },
        };
        axios(config)
            .then((response) => {
                findNumbers(response.data.content);
                //setPi({ ...pi, strNumbers: response.data.content });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function findNumbers(numbers) {
        let copyArr = [...pi.numbers];
        for (var i = 0; i < numbers.length; i++) {
            copyArr[numbers[i]] = copyArr[numbers[i]] + 1;
        }
        setPi({ ...pi, numbers: [...copyArr], count: numbers.length });
    }

    function NormalizeData() {
        let copyPi = [...pi.numbers];
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push({ number: i, value: copyPi[i] });
        }
        return data;
    }

    function startOnChange(value) {
        setRange({ ...range, start: value });
    }

    function endOnChange(value) {
        setRange({ ...range, end: value });
    }

    return (
        <div>
            <div>Pi</div>
            <InputNumber min={0} defaultValue={0} onChange={startOnChange} />
            <InputNumber min={1} defaultValue={100} onChange={endOnChange} />
            <Button onClick={() => getNumbers(range.start, range.end)}>
                Visulize
            </Button>
            <p>{pi.strNumbers}</p>
            <ChartLine NormNumbers={NormalizeData()} TotalCount={pi.count} />
            <ChartPie NormNumbers={NormalizeData()} TotalCount={pi.count} />
        </div>
    );
};

export default Pi;
