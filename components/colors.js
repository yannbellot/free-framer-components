/*

FIGLEAF V1.4 for Framer
A component for subtle and natural random variation
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
export default function Colors(props) {
    // Color filters
    let hueRotateFilter = getRandomGap(0, props.hueRotate, "TRIGO")
    let saturateFilter = getRandomGap(100, props.saturate * 100, "NUMBER")
    let brightnessFilter = getRandomGap(100, props.brightness * 100, "NUMBER")
    let opacityFilter = getRandomGap(100, props.opacity * 100, "PURCENT")
    let invertFilter = getRandomGap(0, props.invert * 100, "PURCENT")
    let grayscaleFilter = getRandomGap(0, props.grayscale * 100, "PURCENT")
    let contrastFilter = getRandomGap(100, props.contrast * 100, "PURCENT")
    let sepiaFilter = getRandomGap(0, props.sepia * 100, "PURCENT")
    let blurFilter = getRandomGap(0, props.blur, "NUMBER")
    let filters =
        "hue-rotate(" +
        hueRotateFilter +
        "deg) saturate(" +
        saturateFilter +
        "%) " +
        "brightness(" +
        brightnessFilter +
        "%) " +
        "opacity(" +
        opacityFilter +
        "%) " +
        "invert(" +
        invertFilter +
        "%) " +
        "invert(" +
        grayscaleFilter +
        "%) " +
        "contrast(" +
        contrastFilter +
        "%) " +
        "sepia(" +
        sepiaFilter +
        "%) " +
        "blur(" +
        blurFilter +
        "px) "
    //console.log(filters)

    // Random filter ID generator
    let randomID = generateString(6)
    let filterID = "filter_" + randomID
    let filterURL = "url(#" + filterID + ")"

    // CSS styles
    const divStyles = {
        width: "200px",
        height: "200px",
        overflow: "visible",
        WebkitFilter: filters,
        filter: filters,
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
            <h2>Filter</h2>
            <p>
                <strong>
                    Colors component allows you to create adjustable random
                    color variations of the hue, saturation, brightness,
                    opacity, contrast, invert, sepia, grayscale and blur.
                </strong>
            </p>
            <h3>To use Colors :</h3>
            <ul>
                <li>Connect the component to a Child Frame.</li>
                <li>
                    Adjust random variation values in 'Hue', 'Saturation',
                    'Brightness', 'Opacity', 'Contrast', 'Invert', 'Sepia',
                    'Grayscale' and 'Blur'.
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
addPropertyControls(Colors, {
    children: {
        type: ControlType.ComponentInstance,
    },

    // Color filters
    hueRotate: {
        type: ControlType.Number,
        title: "Hue",
        defaultValue: 0,
        min: 0,
        max: 360,
        unit: "°",
        step: 1,
        displayStepper: false,
    },
    saturate: {
        type: ControlType.Number,
        title: "Saturation",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: false,
    },
    brightness: {
        type: ControlType.Number,
        title: "Brightness",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: false,
    },
    opacity: {
        type: ControlType.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: false,
    },
    contrast: {
        type: ControlType.Number,
        title: "Contrast",
        defaultValue: 0,
        min: 0,
        max: 2,
        step: 0.01,
        displayStepper: false,
    },
    invert: {
        type: ControlType.Number,
        title: "Invert",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: false,
    },
    sepia: {
        type: ControlType.Number,
        title: "Sepia",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: false,
    },
    grayscale: {
        type: ControlType.Number,
        title: "Grayscale",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: false,
    },
    blur: {
        type: ControlType.Number,
        title: "Blur",
        defaultValue: 0,
        min: 0,
        max: 100,
        step: 1,
        displayStepper: false,
    },
})
