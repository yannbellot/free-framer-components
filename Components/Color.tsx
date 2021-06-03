/*

FIGLEAF V1.0 for Framer X
A component for subtle and natural random variation
MIT License

// The MIT License

Copyright (c) 2020 Yann Bellot, Inc.

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

import * as React from "react"
import { Frame, addPropertyControls, ControlType, Color } from "framer"
import { motion } from "framer-motion"

// Generic random function
function getRandomInt(min, max) {
    return Math.random() * (max - min) + min
}

// Fonction Figleaf Frame_
export function Color_Frame(props) {
    // Color 1
    // Random color generator for polygon fill
    let thisFillColor = Color(props.fillColor)
    let thisFillHueRandom = getRandomInt(
        -props.fillHueRandom,
        props.fillHueRandom
    )
    let thisFillSaturRandom = getRandomInt(
        -props.fillSaturRandom,
        props.fillSaturRandom
    )
    let thisFillLightRandom = getRandomInt(
        -props.fillLightRandom,
        props.fillLightRandom
    )
    let fillHueColorOutput = thisFillColor.h + thisFillHueRandom
    let fillSaturColorOutput = thisFillColor.s * 100 + thisFillSaturRandom
    if (fillSaturColorOutput > 100) {
        fillSaturColorOutput = 100
    }
    if (fillSaturColorOutput < 0) {
        fillSaturColorOutput = 0
    }
    let fillLightColorOutput = thisFillColor.l * 100 + thisFillLightRandom
    if (fillLightColorOutput > 100) {
        fillLightColorOutput = 100
    }
    if (fillLightColorOutput < 0) {
        fillLightColorOutput = 0
    }
    let outputFillColor =
        "hsl(" +
        fillHueColorOutput +
        "," +
        fillSaturColorOutput +
        "%," +
        fillLightColorOutput +
        "%)"

    // Random gradient generator for Frame_ fill
    let thisFillGradientDeg = props.fillGradientDeg
    let thisFillGradientDegRandom = getRandomInt(
        -props.fillGradientDegRandom,
        props.fillGradientDegRandom
    )
    let fillGradientDegOutput = thisFillGradientDeg + thisFillGradientDegRandom
    let thisFillGradientColor = Color(props.fillGradientColor)
    let thisFillGradientHueRandom = getRandomInt(
        -props.fillGradientHueRandom,
        props.fillGradientHueRandom
    )
    let thisFillGradientSaturRandom = getRandomInt(
        -props.fillGradientSaturRandom,
        props.fillGradientSaturRandom
    )
    let thisFillGradientLightRandom = getRandomInt(
        -props.fillGradientLightRandom,
        props.fillGradientLightRandom
    )
    let fillGradientHueColorOutput =
        thisFillGradientColor.h + thisFillGradientHueRandom
    let fillGradientSaturColorOutput =
        thisFillGradientColor.s * 100 + thisFillGradientSaturRandom
    if (fillGradientSaturColorOutput > 100) {
        fillGradientSaturColorOutput = 100
    }
    if (fillGradientSaturColorOutput < 0) {
        fillGradientSaturColorOutput = 0
    }
    let fillGradientLightColorOutput =
        thisFillGradientColor.l * 100 + thisFillGradientLightRandom
    if (fillGradientLightColorOutput > 100) {
        fillGradientLightColorOutput = 100
    }
    if (fillGradientLightColorOutput < 0) {
        fillGradientLightColorOutput = 0
    }
    let outputFillGradientColor =
        "hsl(" +
        fillGradientHueColorOutput +
        "," +
        fillGradientSaturColorOutput +
        "%," +
        fillGradientLightColorOutput +
        "%)"
    let fillLinearGradient =
        "linear-gradient(" +
        fillGradientDegOutput +
        "deg, " +
        outputFillColor +
        ", " +
        outputFillGradientColor +
        ")"
    let fillRadialGradient =
        "radial-gradient(" +
        outputFillColor +
        ", " +
        outputFillGradientColor +
        ")"

    // Frame with color background
    if (props.fillToggle == 1) {
        return <Frame background={outputFillColor} width="100%" height="100%" />
    }

    // Frame with gradient
    if (props.fillToggle == 2) {
        // Frame with radial gradient
        if (props.fillGradientToggle == true) {
            return (
                <Frame
                    background={fillRadialGradient}
                    width="100%"
                    height="100%"
                />
            )
        }
        // Frame with linear gradient
        if (props.fillGradientToggle == false) {
            return (
                <Frame
                    background={fillLinearGradient}
                    width="100%"
                    height="100%"
                />
            )
        }
    }
}

// Framer input interface for control colors and randoms properties
addPropertyControls(Color_Frame, {
    // Fill color control properties
    fillToggle: {
        type: ControlType.Enum,
        title: "Fill",
        options: [1, 2],
        optionTitles: ["Solid", "Gradient"],
    },
    fillGradientToggle: {
        // Fill gradient type propertie
        type: ControlType.Boolean,
        title: "Type",
        enabledTitle: "Radial",
        disabledTitle: "Linear",
        defaultValue: false,
        hidden(props) {
            return props.fillToggle === 1
        },
    },
    fillGradientDeg: {
        type: ControlType.Number,
        title: "Deg",
        defaultValue: 0,
        min: 0,
        max: 360,
        unit: "°",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 1
        },
    },
    fillGradientDegRandom: {
        type: ControlType.Number,
        title: "~deg",
        defaultValue: 0,
        min: 0,
        max: 360,
        unit: "°",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 1
        },
    },
    fillColor: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "hsl(220, 100%, 50%)",
    },
    fillHueRandom: {
        type: ControlType.Number,
        title: "~hue",
        defaultValue: 0,
        min: 0,
        max: 360,
        unit: "°",
        step: 1,
        displayStepper: false,
    },
    fillSaturRandom: {
        type: ControlType.Number,
        title: "~saturation",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
    },
    fillLightRandom: {
        type: ControlType.Number,
        title: "~luminosity",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
    },

    // Fill gradient color properties
    fillGradientColor: {
        type: ControlType.Color,
        title: "Stop-color",
        defaultValue: "hsl(324, 100%, 50%)",
        hidden(props) {
            return props.fillToggle === 1
        },
    },
    fillGradientHueRandom: {
        type: ControlType.Number,
        title: "~hue",
        defaultValue: 0,
        min: 0,
        max: 360,
        unit: "°",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 1
        },
    },
    fillGradientSaturRandom: {
        type: ControlType.Number,
        title: "~saturation",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 1
        },
    },
    fillGradientLightRandom: {
        type: ControlType.Number,
        title: "~luminosity",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 1
        },
    },
})
