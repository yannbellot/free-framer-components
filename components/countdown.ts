/*

Scroll Sound for Framer
A component to play sound in scroll
MIT License

// The MIT License

Copyright (c) 2023 Yann Bellot, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

import ReactDOM from "react-dom"
import Countdown from "react-countdown"
import { addPropertyControls, ControlType } from "framer"

export default function CountDown(props) {
    const contentStyles = {
        fontFamily: props.font,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.color,
        letterSpacing: props.letterSpacing,
        padding: "0",
        margin: "0",
    }
    let hours =
        props.hour * 3600000 +
        props.min * 60000 -
        props.gmt * 3600000 +
        props.sec * 1000
    let duree = Date.parse(props.date) + hours - Date.now()
    let overText
    if (props.children == 0) {
        overText = <p style={contentStyles}>The countdown is over.</p>
    } else {
        overText = props.children
    }
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return overText
        } else {
            return (
                <p style={contentStyles}>
                    {days}
                    {props.dayLabel} {hours}:{minutes}:{seconds}
                </p>
            )
        }
    }
    return <Countdown date={Date.now() + duree} renderer={renderer} />
}

addPropertyControls(CountDown, {
    date: {
        type: ControlType.Date,
        title: "Date",
        defaultValue: "2024-01-01T00:00:00.000Z",
    },
    hour: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Hour",
        defaultValue: 0,
        min: 0,
        max: 23,
        step: 1,
    },
    min: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Minutes",
        defaultValue: 0,
        min: 0,
        max: 59,
        step: 1,
    },
    sec: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Secondes",
        defaultValue: 0,
        min: 0,
        max: 59,
        step: 1,
    },
    gmt: {
        type: ControlType.Number,
        displayStepper: true,
        title: "GMT",
        defaultValue: 0,
        step: 1,
        min: -12,
        max: 12,
    },
    dayLabel: {
        type: ControlType.String,
        title: "Day label",
        displayTextArea: false,
        placeholder: "Days",
        defaultValue: "D",
    },
    children: {
        type: ControlType.ComponentInstance,
        title: "Ended child",
    },
    font: {
        type: ControlType.String,
        placeholder: "Inter",
        defaultValue: "Inter",
    },
    fontSize: {
        title: "Size",
        type: ControlType.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: 16,
        displayStepper: true,
    },
    fontWeight: {
        type: ControlType.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        defaultValue: 400,
        title: "Weight",
    },
    color: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "tomato",
    },
    letterSpacing: {
        title: "Letter",
        type: ControlType.Number,
        defaultValue: 0,
        step: 0.1,
        displayStepper: true,
    },
})
