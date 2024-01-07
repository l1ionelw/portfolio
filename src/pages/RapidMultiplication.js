import {useEffect, useState} from "react";

export default function App() {
    const [values, setValues] = useState([]);
    const [answer, setAnswer] = useState("");
    const [state, setState] = useState("Answering");
    useEffect(() => {
        setValues([random(0, 9), random(0, 9)])
    }, [])

    function updateAnswer(value) {
        setAnswer(value)
    }

    function submitAnswer(event) {
        if (event.key === "Enter") {
            if (parseInt(answer) === (values[0] * values[1])) {
                console.log("answer correct")
                setValues([random(0, 9), random(0, 9)])
                setAnswer("")
                setState("Answering")
            } else {
                console.log("wrong answer")
                setState("Wrong")
            }
        }
    }

    return (
        <div>
            <h1>Rapid Multiplication</h1>
            <h1>{values[0]} x {values[1]}</h1>
            <input value={answer} type={"number"} aria-label={"answer"} onKeyDown={submitAnswer} onChange={(e) => {
                updateAnswer(e.target.value)
            }}/>
            <div hidden={!(state === "Answering")}>
                <p></p>
            </div>
            <div hidden={!(state === "Wrong")}>
                <p>Wrong answer!</p>
            </div>
        </div>
    )
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}