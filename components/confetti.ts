/*

Confetti for Framer
A component to use "react-confetti" (https://www.npmjs.com/package/react-confetti)
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

import React from "react"
import Confetti from "react-confetti"
import { addPropertyControls, ControlType } from "framer"

export default function Confettis(props) {
    let sizeC = props.scaleC * 200
    let xOrigin = (sizeC / 100) * props.xOrigin
    let yOrigin = (sizeC / 100) * props.yOrigin
    return (
        <div style={{ width: sizeC, height: sizeC }}>
            <Confetti
                style={{ width: "100%", height: "100%" }}
                confettiSource={{ x: xOrigin, y: yOrigin, w: 0, h: 0 }}
                width={sizeC}
                height={sizeC}
                numberOfPieces={props.pieceNumber}
                friction={props.friction}
                wind={props.wind}
                gravity={props.gravity}
                colors={props.colors}
                opacity={props.opacityC}
                recycle={props.recycle}
                run={props.run}
            />
        </div>
    )
}

addPropertyControls(Confettis, {
    scaleC: {
        type: ControlType.Number,
        title: "Scale",
        defaultValue: 1,
        min: 0,
        max: 10,
        step: 0.1,
        displayStepper: false,
    },

    xOrigin: {
        type: ControlType.Number,
        title: "x Origin",
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 1,
        displayStepper: false,
    },
    yOrigin: {
        type: ControlType.Number,
        title: "y Origin",
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 1,
        displayStepper: false,
    },
    pieceNumber: {
        type: ControlType.Number,
        title: "Pieces",
        defaultValue: 100,
        min: 0,
        step: 1,
        displayStepper: true,
    },
    friction: {
        type: ControlType.Number,
        title: "Friction",
        defaultValue: 0.99,
        min: 0,
        max: 1,
        step: 0.1,
        displayStepper: true,
    },
    wind: {
        type: ControlType.Number,
        title: "Wind",
        defaultValue: 0,
        min: 0,
        max: 0.99,
        step: 0.01,
        displayStepper: true,
    },
    gravity: {
        type: ControlType.Number,
        title: "Gravity",
        defaultValue: 0.1,
        min: 0,
        max: 0.99,
        step: 0.01,
        displayStepper: true,
    },
    colors: {
        type: ControlType.Array,
        control: {
            type: ControlType.Color,
        },
        defaultValue: ["pink", "yellow", "purple"],
    },
    recycle: {
        type: ControlType.Boolean,
        title: "Recycle",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    run: {
        type: ControlType.Boolean,
        title: "Run",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
})
