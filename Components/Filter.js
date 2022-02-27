/*

FIGLEAF V1.3 for Framer
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

// Import basic functions
import {
    getRandomGap,
    getRandomValue,
    generateString,
} from "./BasicFunctions.tsx"

// Filters function
export default function Filter(props) {
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
    let mixBlendMode = props.mixBlendMode
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
    console.log(filters)

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
    if (props.seedToggle === true) {
        seedTurb = getRandomValue(1, 10000)
    }
    let smoothing = props.smoothing

    // CSS styles
    const divStyles = {
        width: "200px",
        height: "200px",
        overflow: "visible",
        filter: filters,
        mixBlendMode: mixBlendMode,
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
            <h2>Filter</h2>
            <p>
                <strong>
                    Filter component allows you to create adjustable random
                    visual effects: Perlin visual distortions, variation of the
                    hue, saturation, brightness, opacity, contrast, invert,
                    sepia, grayscale and blur.
                </strong>
            </p>
            <h3>To use color filters :</h3>
            <ul>
                <li>Connect the component to a Child Frame.</li>
                <li>
                    Adjust random variation values in 'Hue', 'Saturation',
                    'Brightness', 'Opacity', 'Contrast', 'Invert', 'Sepia',
                    'Grayscale' and 'Blur'.
                </li>
            </ul>
            <h3>To use Perlin distortions filter :</h3>
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
    }
    if (props.children == 1 || props.toggle === false) {
        return <div style={divStyles}>{props.children}</div>
    }
    if (props.children == 1 || props.toggle === true) {
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
                        />
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
addPropertyControls(Filter, {
    children: {
        type: ControlType.ComponentInstance,
    },
    // Mix blend mode filters
    mixBlendMode: {
        type: ControlType.Enum,
        defaultValue: "a",
        displaySegmentedControl: false,
        options: [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
        ],
        optionTitles: [
            "Normal",
            "Multiply",
            "Screen",
            "Overlay",
            "Darken",
            "Lighten",
            "Color dodge",
            "Color burn",
            "Hard light",
            "Soft light",
            "Difference",
            "Exclusion",
            "Hue",
            "Saturation",
            "Color",
            "Luminosity",
        ],
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
    // Distortion filter
    toggle: {
        type: ControlType.Boolean,
        title: "Distortion",
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: false,
    },
    filterScale: {
        type: ControlType.Number,
        title: "Intensity",
        defaultValue: 20,
        min: 0,
        max: 1000,
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.toggle === false
        },
    },
    xFrequency: {
        type: ControlType.Number,
        title: "x Frequency",
        defaultValue: 0.01,
        min: 0,
        max: 1,
        step: 0.0001,
        displayStepper: false,
        hidden(props) {
            return props.toggle === false
        },
    },
    yFrequency: {
        type: ControlType.Number,
        title: "y Frequency",
        defaultValue: 0.01,
        min: 0,
        max: 1,
        step: 0.0001,
        displayStepper: false,
        hidden(props) {
            return props.toggle === false
        },
    },
    octaveTurb: {
        type: ControlType.Number,
        title: "Octave",
        defaultValue: 3,
        min: 1,
        max: 5,
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.toggle === false
        },
    },
    smoothing: {
        type: ControlType.Number,
        title: "Smoothing",
        defaultValue: 0.3,
        min: 0,
        max: 1,
        step: 0.1,
        displayStepper: false,
        hidden(props) {
            return props.toggle === false
        },
    },
    seedToggle: {
        type: ControlType.Boolean,
        title: "Seed",
        defaultValue: true,
        enabledTitle: "Random",
        disabledTitle: "Manual",
        hidden(props) {
            return props.toggle === false
        },
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
            return props.seedToggle === true || props.toggle === false
        },
    },
})
