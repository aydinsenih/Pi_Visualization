import axios from "axios";
import { useState } from "react";

const BASEURL = "http://api.pi.delivery/v1/pi";

const Pi = (props) => {
    const [pi, setPi] = useState({
        numbers: new Array(10).fill(0),
        count: 0,
    });

    function getNumbers(startNumber, Digits) {
        var config = {
            method: "get",
            url: BASEURL,
            params: { start: startNumber, numberOfDigits: Digits },
        };
        axios(config)
            .then((response) => {
                console.log(response.data.content);
                console.log(pi);
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
    return (
        <div>
            <div>Pi</div>
            <button onClick={() => getNumbers(0, 100)}>a</button>
        </div>
    );
};

export default Pi;
