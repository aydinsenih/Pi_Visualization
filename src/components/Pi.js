import axios from "axios";
import { useState } from "react";
import { InputNumber, Button } from "antd";

const BASEURL = "http://api.pi.delivery/v1/pi";

const Pi = (props) => {
    const [pi, setPi] = useState({
        numbers: new Array(10).fill(0),
        count: 0,
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
        console.log(copyArr);
        setPi({
            numbers: [...copyArr],
            count: pi.count + numbers.length,
        });
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
        </div>
    );
};

export default Pi;
