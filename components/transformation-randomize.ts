/*

Transformation randomizer for Framer
MIT License

// The MIT License

Copyright (c) 2021 Yann Bellot, Inc.

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

import { addPropertyControls, ControlType, Color, Frame } from "framer"
import {
    childControl,
    useClonedChild,
} from "https://framer.com/m/framer/useChild.js"

// Return random value with min and max
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min
}

// Return random value deviation
function getRandomGap(value, rValue, type) {
    // Simple deviation
    if (type === "NUMBER") {
        value = Math.round(value + getRandomValue(-rValue, rValue))
        return value
    }

    // Deviation in 0 to 100.
    if (type === "PURCENT") {
        value = Math.round(value + getRandomValue(-rValue, rValue))
        if (value > 100) {
            value = 100
        }
        if (value < 0) {
            value = 0
        }
        return value
    }

    // Deviation in 0 to 360° in loop (trigonometric circle)
    if (type === "TRIGO") {
        value = Math.round(value + getRandomValue(-rValue, rValue))
        if (value > 360) {
            value = value - 360
        }
        if (value < 0) {
            value = 360 + value
        }
        return value
    }
}

// ID link function
function fIdLink(id) {
    let link = "url(#" + id + ")"
    return link
}

// Mask ID generator
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// Random identifier generator
function generateString(length) {
    let result = ""
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}

// Filters function
export default function Transform_Randomizer(props) {
    // Color filters
    let rotation_transformation = getRandomGap(0, props.rotation, "TRIGO")
    let x_position_transformation = getRandomGap(0, props.xPosition, "NUMBER")
    let y_position_transformation = getRandomGap(0, props.yPosition, "NUMBER")
    let scale_transformation = getRandomValue(1, props.scale)
    let xy_transformation =
        x_position_transformation + "px " + y_position_transformation + "px"

    // Random filter ID generator
    let randomID = generateString(6)
    let filterID = "filter_" + randomID
    let filterURL = "url(#" + filterID + ")"

    // CSS styles
    const divStyles = {
        //width: "200px",
        //height: "200px",
        overflow: "visible",
        transformOrigin: "center",
        rotate: rotation_transformation + "deg",
        translate: xy_transformation,
        transform: "scale" + "(" + scale_transformation + ")",
    }
    const svgStyles = {
        overflow: "visible",
    }
    const childrenStyles = {
        width: "100%",
        height: "100%",
        WebkitFilter: filterURL,
        filter: filterURL,
        overflow: "visible",
    }
    const welcomeStyles = {
        backgroundColor: "#EEE",
        color: "#9966FE",
        fontSize: "large",
        padding: "20px",
        border: "2px #9966FE solid",
        borderRadius: "8px",
        width: "500px",
    }

    // Define message to use Filter
    const welcomeMessage = (
        <div style={welcomeStyles}>
            <h2>Transform Randomizer</h2>
            <p>
                <strong>
                    Transform Randomizer component allows you to create
                    adjustable random variations of scale, rotate and position.
                </strong>
            </p>
            <h3>To use Transform Randomizer :</h3>
            <ul>
                <li>Connect the component to a Child Frame.</li>
                <li>
                    Adjust random variation values in 'Scale', 'Rotate', 'x
                    Position' and 'y Position'.
                </li>
            </ul>
        </div>
    )

    // Return Filter
    if (props.children == 0) {
        return welcomeMessage
    } else {
        return <div style={divStyles}>{props.children}</div>
    }
}

// Property Controls
addPropertyControls(Transform_Randomizer, {
    children: {
        type: ControlType.ComponentInstance,
    },

    // Color filters
    scale: {
        type: ControlType.Number,
        title: "Scale",
        defaultValue: 1,
        min: 0,
        step: 0.01,
        max: 2,
        displayStepper: false,
    },
    rotation: {
        type: ControlType.Number,
        title: "Rotate",
        defaultValue: 0,
        min: 0,
        max: 359,
        unit: "°",
        step: 0.1,
        displayStepper: false,
    },
    xPosition: {
        type: ControlType.Number,
        title: "x Position",
        defaultValue: 0,
        min: 0,
        step: 0.5,
        displayStepper: false,
    },
    yPosition: {
        type: ControlType.Number,
        title: "y Position",
        defaultValue: 0,
        min: 0,
        step: 0.5,
        displayStepper: false,
    },
})
