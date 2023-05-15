/*

Perlin Distortion for Framer
A component for subtle and natural random distortions
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
export default function Perlin_Distortion(props) {
    // Random filter ID generator
    let randomID = generateString(6)
    let filterID = "filter_" + randomID
    let filterURL = "url(#" + filterID + ")"

    // Perlin distortion filter
    let xFrequency = props.xFrequency
    let yFrequency = props.yFrequency
    let baseFrequency = xFrequency + " " + yFrequency
    let filterScale = -props.filterScale
    let octaveTurb = props.octaveTurb
    let seedTurb = props.seedTurb
    if (props.seed === true) {
        seedTurb = getRandomValue(1, 10000)
    }
    let smoothing = props.smoothing

    // Perlin filter animate
    let animateDur = props.animateDur
    let animateIntensity = props.animateIntensity
    let yFrequencyAnimate = yFrequency * (1 + animateIntensity)
    let xFrequencyAnimate = xFrequency * (1 + animateIntensity)
    //console.log(yFrequency + " > " + yFrequencyAnimate)
    let animateValue =
        xFrequency +
        "," +
        yFrequency +
        ";" +
        xFrequencyAnimate +
        "," +
        yFrequencyAnimate +
        ";" +
        xFrequency +
        "," +
        yFrequency
    let svgAnimation

    if (props.animate === true)
        svgAnimation = (
            <animate
                attributeName="baseFrequency"
                values={animateValue}
                dur={animateDur}
                repeatCount="indefinite"
            ></animate>
        )
    else {
        svgAnimation = 0
    }

    // CSS styles
    const divStyles = {
        width: "200px",
        height: "200px",
        overflow: "visible",
    }
    const svgStyles = {
        overflow: "visible",
    }
    const childrenStyles = {
        width: "100%",
        height: "100%",
        WebkitFilter: filterURL,
        filter: filterURL + "blur(" + smoothing + "px)",
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
            <h2>Distortions</h2>
            <p>
                <strong>
                    Distortion component allows you to create adjustable random
                    distortion with a Perlin effect.
                </strong>
            </p>
            <h3>To use Distortions :</h3>
            <ul>
                <li>Choose 'Yes' in 'Distortion'.</li>
                <li>Adjust 'Intensity' of distortion.</li>
                <li>Adjust 'xFrequency' and 'yFrequency'.</li>
                <li>Adjust 'Octave'.</li>
                <li>Adjust 'Smoothing'</li>
                <li>
                    Choose 'Manual' in 'Seed' if you want to define seed manualy
                    and adjust 'Value' of seed.
                </li>
            </ul>
        </div>
    )

    // Return Filter
    if (props.children == 0) {
        return welcomeMessage
    } else {
        return (
            <>
                <svg style={svgStyles}>
                    <filter
                        id={filterID}
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency={baseFrequency}
                            result={filterID}
                            numOctaves={octaveTurb}
                            seed={seedTurb}
                            id={filterID}
                        >
                            {svgAnimation}
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2={filterID}
                            scale={filterScale}
                        ></feDisplacementMap>
                    </filter>
                    <foreignObject style={divStyles}>
                        <div style={childrenStyles}>{props.children}</div>
                    </foreignObject>
                </svg>
            </>
        )
    }
}

// Property Controls
addPropertyControls(Perlin_Distortion, {
    children: {
        type: ControlType.ComponentInstance,
    },

    // Distortion filter
    filterScale: {
        type: ControlType.Number,
        title: "Intensity",
        defaultValue: 20,
        min: 0,
        max: 1000,
        step: 1,
        displayStepper: false,
    },
    xFrequency: {
        type: ControlType.Number,
        title: "x Frequency",
        defaultValue: 0.01,
        min: 0,
        max: 1,
        step: 0.0001,
        displayStepper: false,
    },
    yFrequency: {
        type: ControlType.Number,
        title: "y Frequency",
        defaultValue: 0.01,
        min: 0,
        max: 1,
        step: 0.0001,
        displayStepper: false,
    },
    octaveTurb: {
        type: ControlType.Number,
        title: "Octave",
        defaultValue: 3,
        min: 1,
        max: 5,
        step: 1,
        displayStepper: false,
    },
    smoothing: {
        type: ControlType.Number,
        title: "Smoothing",
        defaultValue: 0.3,
        min: 0,
        max: 1,
        step: 0.1,
        displayStepper: false,
    },
    /*animate: {
        type: ControlType.Boolean,
        title: "Animation",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    animateIntensity: {
        type: ControlType.Number,
        title: "Amplitude",
        defaultValue: 0.3,
        min: 0.1,
        max: 2,
        step: 0.01,
        displayStepper: false,
        hidden(props) {
            return props.animate === false
        },
    },
    animateDur: {
        type: ControlType.Number,
        title: "During",
        defaultValue: 30,
        min: 0.2,
        max: 120,
        unit: "sec",
        step: 0.1,
        displayStepper: false,
        hidden(props) {
            return props.animate === false
        },
    },*/
    seed: {
        type: ControlType.Boolean,
        title: "Seed",
        defaultValue: true,
        enabledTitle: "Random",
        disabledTitle: "Manual",
    },
    seedTurb: {
        type: ControlType.Number,
        title: "Value",
        defaultValue: 1,
        min: 1,
        max: 1000,
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.seed === true
        },
    },
})
