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

// Generic random function

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min
}

// Fonction Figleaf Circle

export function Circle(props) {
    // CIRCLE 1
    // Random color generator for circle borders
    let thisBorderColor = Color(props.borderColors)
    let thisBorderSize = props.borderSize
    let thisBorderHueRandom = getRandomInt(
        -props.borderHueRandom,
        props.borderHueRandom
    )
    let thisBorderSaturRandom = getRandomInt(
        -props.borderSaturRandom,
        props.borderSaturRandom
    )
    let thisBorderLightRandom = getRandomInt(
        -props.borderLightRandom,
        props.borderLightRandom
    )
    let borderHueColorOutput = thisBorderColor.h + thisBorderHueRandom
    let borderSaturColorOutput = thisBorderColor.s * 100 + thisBorderSaturRandom
    if (borderSaturColorOutput > 100) {
        borderSaturColorOutput = 100
    }
    if (borderSaturColorOutput < 0) {
        borderSaturColorOutput = 0
    }
    let borderLightColorOutput = thisBorderColor.l * 100 + thisBorderLightRandom
    if (borderLightColorOutput > 100) {
        borderLightColorOutput = 100
    }
    if (borderLightColorOutput < 0) {
        borderLightColorOutput = 0
    }
    // Border color character string generator for SVG
    let outputBorderColor =
        "hsl(" +
        borderHueColorOutput +
        "," +
        borderSaturColorOutput +
        "%," +
        borderLightColorOutput +
        "%)"

    // Activate or deactivate the border of the circle
    if (props.borderToggle == false) {
        thisBorderSize = 0
    }

    // Random color generator for circle fill
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

    // Random circle generator
    let thisRandomStepDiameter =
        (props.circleDiamPx / 2) * (props.randomStepDiameter / 100)
    console.log(thisRandomStepDiameter)
    let thisRadius =
        props.circleDiamPx / 2 -
        thisBorderSize / 2 -
        getRandomInt(0, thisRandomStepDiameter)
    let thisRandomStep = (props.randomStep * thisRadius) / 100
    const alpha = 0.5522
    let x1random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let x2random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let x3random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let x4random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let y1random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let y2random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let y3random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2
    let y4random = getRandomInt(0, thisRandomStep) + thisBorderSize / 2

    let x1 = thisRadius + x1random
    let y1 = y1random
    let x2 = thisRadius * 2 + x2random
    let y2 = thisRadius + y2random
    let x3 = thisRadius + x3random
    let y3 = thisRadius * 2 + y3random
    let x4 = x4random
    let y4 = thisRadius + y4random

    //  Random handles generator
    let x1handleRandom = getRandomInt(0, thisRandomStep)
    let x2handleRandom = getRandomInt(0, thisRandomStep)
    let x3handleRandom = getRandomInt(0, thisRandomStep)
    let x4handleRandom = getRandomInt(0, thisRandomStep)
    let y1handleRandom = getRandomInt(0, thisRandomStep)
    let y2handleRandom = getRandomInt(0, thisRandomStep)
    let y3handleRandom = getRandomInt(0, thisRandomStep)
    let y4handleRandom = getRandomInt(0, thisRandomStep)

    let x1a = thisRadius - thisRadius * alpha + x1handleRandom + x1random
    let y1a = y1handleRandom + y1random
    let x1b = thisRadius + thisRadius * alpha - x1handleRandom + x1random
    let y1b = 0 - y1handleRandom + y1random
    let x2a = thisRadius * 2 + x2handleRandom + x2random
    let y2a = thisRadius - thisRadius * alpha + y2handleRandom + y2random
    let x2b = thisRadius * 2 - x2handleRandom + x2random
    let y2b = thisRadius + thisRadius * alpha - y2handleRandom + y2random
    let x3a = thisRadius + thisRadius * alpha + x3handleRandom + x3random
    let y3a = thisRadius * 2 + y3handleRandom + y3random
    let x3b = thisRadius - thisRadius * alpha - x3handleRandom + x3random
    let y3b = thisRadius * 2 - y3handleRandom + y3random
    let x4a = x4handleRandom + x4random
    let y4a = thisRadius + thisRadius * alpha + y4handleRandom + y4random
    let x4b = 0 - x4handleRandom + x4random
    let y4b = thisRadius - thisRadius * alpha - y4handleRandom + y4random

    // Random gradient generator for polygon fill
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

    // SVG random circle coordinate string generator
    let randomSvgCircle =
        "M" +
        x1 +
        " " +
        y1 +
        " C" +
        x1b +
        " " +
        y1b +
        ", " +
        x2a +
        " " +
        y2a +
        ", " +
        x2 +
        " " +
        y2 +
        " C" +
        x2b +
        " " +
        y2b +
        ", " +
        x3a +
        " " +
        y3a +
        ", " +
        x3 +
        " " +
        y3 +
        " C" +
        x3b +
        " " +
        y3b +
        ", " +
        x4a +
        " " +
        y4a +
        ", " +
        x4 +
        " " +
        y4 +
        " C" +
        x4b +
        " " +
        y4b +
        ", " +
        x1a +
        " " +
        y1a +
        ", " +
        x1 +
        " " +
        y1

    // Circle 2
    // Random color generator for circle borders
    let thisBorderHueRandom2 = getRandomInt(
        -props.borderHueRandom,
        props.borderHueRandom
    )
    let thisBorderSaturRandom2 = getRandomInt(
        -props.borderSaturRandom,
        props.borderSaturRandom
    )
    let thisBorderLightRandom2 = getRandomInt(
        -props.borderLightRandom,
        props.borderLightRandom
    )
    let borderHueColorOutput2 = thisBorderColor.h + thisBorderHueRandom2
    let borderSaturColorOutput2 =
        thisBorderColor.s * 100 + thisBorderSaturRandom2
    if (borderSaturColorOutput2 > 100) {
        borderSaturColorOutput2 = 100
    }
    if (borderSaturColorOutput2 < 0) {
        borderSaturColorOutput2 = 0
    }
    let borderLightColorOutput2 =
        thisBorderColor.l * 100 + thisBorderLightRandom2
    if (borderLightColorOutput2 > 100) {
        borderLightColorOutput2 = 100
    }
    if (borderLightColorOutput2 < 0) {
        borderLightColorOutput2 = 0
    }
    // Border color character string generator for SVG
    let outputBorderColor2 =
        "hsl(" +
        borderHueColorOutput2 +
        "," +
        borderSaturColorOutput2 +
        "%," +
        borderLightColorOutput2 +
        "%)"

    // Activate or deactivate the border of the circle
    if (props.borderToggle == false) {
        thisBorderSize = 0
    }

    // Random color generator for circle fill
    let thisFillHueRandom2 = getRandomInt(
        -props.fillHueRandom,
        props.fillHueRandom
    )
    let thisFillSaturRandom2 = getRandomInt(
        -props.fillSaturRandom,
        props.fillSaturRandom
    )
    let thisFillLightRandom2 = getRandomInt(
        -props.fillLightRandom,
        props.fillLightRandom
    )
    let fillHueColorOutput2 = thisFillColor.h + thisFillHueRandom2
    let fillSaturColorOutput2 = thisFillColor.s * 100 + thisFillSaturRandom2
    if (fillSaturColorOutput2 > 100) {
        fillSaturColorOutput2 = 100
    }
    if (fillSaturColorOutput2 < 0) {
        fillSaturColorOutput2 = 0
    }
    let fillLightColorOutput2 = thisFillColor.l * 100 + thisFillLightRandom2
    if (fillLightColorOutput2 > 100) {
        fillLightColorOutput2 = 100
    }
    if (fillLightColorOutput2 < 0) {
        fillLightColorOutput2 = 0
    }
    let outputFillColor2 =
        "hsl(" +
        fillHueColorOutput2 +
        "," +
        fillSaturColorOutput2 +
        "%," +
        fillLightColorOutput2 +
        "%)"

    // Random circle generator
    let thisRadius2 =
        props.circleDiamPx / 2 -
        thisBorderSize / 2 -
        getRandomInt(0, thisRandomStepDiameter)
    let thisRandomStep2 = (props.randomStep * thisRadius2) / 100
    let x1random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let x2random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let x3random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let x4random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let y1random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let y2random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let y3random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2
    let y4random2 = getRandomInt(0, thisRandomStep2) + thisBorderSize / 2

    let x12 = thisRadius2 + x1random2
    let y12 = y1random2
    let x22 = thisRadius2 * 2 + x2random2
    let y22 = thisRadius2 + y2random2
    let x32 = thisRadius2 + x3random2
    let y32 = thisRadius2 * 2 + y3random2
    let x42 = x4random2
    let y42 = thisRadius2 + y4random2

    //  Random handles generator
    let x1handleRandom2 = getRandomInt(0, thisRandomStep2)
    let x2handleRandom2 = getRandomInt(0, thisRandomStep2)
    let x3handleRandom2 = getRandomInt(0, thisRandomStep2)
    let x4handleRandom2 = getRandomInt(0, thisRandomStep2)
    let y1handleRandom2 = getRandomInt(0, thisRandomStep2)
    let y2handleRandom2 = getRandomInt(0, thisRandomStep2)
    let y3handleRandom2 = getRandomInt(0, thisRandomStep2)
    let y4handleRandom2 = getRandomInt(0, thisRandomStep2)

    let x1a2 = thisRadius2 - thisRadius2 * alpha + x1handleRandom2 + x1random2
    let y1a2 = y1handleRandom2 + y1random2
    let x1b2 = thisRadius2 + thisRadius2 * alpha - x1handleRandom2 + x1random2
    let y1b2 = 0 - y1handleRandom2 + y1random2
    let x2a2 = thisRadius2 * 2 + x2handleRandom2 + x2random2
    let y2a2 = thisRadius2 - thisRadius2 * alpha + y2handleRandom2 + y2random2
    let x2b2 = thisRadius2 * 2 - x2handleRandom2 + x2random2
    let y2b2 = thisRadius2 + thisRadius2 * alpha - y2handleRandom2 + y2random2
    let x3a2 = thisRadius2 + thisRadius2 * alpha + x3handleRandom2 + x3random2
    let y3a2 = thisRadius2 * 2 + y3handleRandom2 + y3random2
    let x3b2 = thisRadius2 - thisRadius2 * alpha - x3handleRandom2 + x3random2
    let y3b2 = thisRadius2 * 2 - y3handleRandom2 + y3random2
    let x4a2 = x4handleRandom2 + x4random2
    let y4a2 = thisRadius2 + thisRadius2 * alpha + y4handleRandom2 + y4random2
    let x4b2 = 0 - x4handleRandom2 + x4random2
    let y4b2 = thisRadius2 - thisRadius2 * alpha - y4handleRandom2 + y4random2

    // Random gradient generator for polygon fill
    let thisFillGradientHueRandom2 = getRandomInt(
        -props.fillGradientHueRandom,
        props.fillGradientHueRandom
    )
    let thisFillGradientSaturRandom2 = getRandomInt(
        -props.fillGradientSaturRandom,
        props.fillGradientSaturRandom
    )
    let thisFillGradientLightRandom2 = getRandomInt(
        -props.fillGradientLightRandom,
        props.fillGradientLightRandom
    )
    let fillGradientHueColorOutput2 =
        thisFillGradientColor.h + thisFillGradientHueRandom2
    let fillGradientSaturColorOutput2 =
        thisFillGradientColor.s * 100 + thisFillGradientSaturRandom2
    if (fillGradientSaturColorOutput2 > 100) {
        fillGradientSaturColorOutput2 = 100
    }
    if (fillGradientSaturColorOutput2 < 0) {
        fillGradientSaturColorOutput2 = 0
    }
    let fillGradientLightColorOutput2 =
        thisFillGradientColor.l * 100 + thisFillGradientLightRandom2
    if (fillGradientLightColorOutput2 > 100) {
        fillGradientLightColorOutput2 = 100
    }
    if (fillGradientLightColorOutput2 < 0) {
        fillGradientLightColorOutput2 = 0
    }
    let outputFillGradientColor2 =
        "hsl(" +
        fillGradientHueColorOutput2 +
        "," +
        fillGradientSaturColorOutput2 +
        "%," +
        fillGradientLightColorOutput2 +
        "%)"

    // SVG random circle coordinate string generator
    let randomSvgCircle2 =
        "M" +
        x12 +
        " " +
        y12 +
        " C" +
        x1b2 +
        " " +
        y1b2 +
        ", " +
        x2a2 +
        " " +
        y2a2 +
        ", " +
        x22 +
        " " +
        y22 +
        " C" +
        x2b2 +
        " " +
        y2b2 +
        ", " +
        x3a2 +
        " " +
        y3a2 +
        ", " +
        x32 +
        " " +
        y32 +
        " C" +
        x3b2 +
        " " +
        y3b2 +
        ", " +
        x4a2 +
        " " +
        y4a2 +
        ", " +
        x42 +
        " " +
        y42 +
        " C" +
        x4b2 +
        " " +
        y4b2 +
        ", " +
        x1a2 +
        " " +
        y1a2 +
        ", " +
        x12 +
        " " +
        y12
    // Random circle SVG code generator

    let randomMorphSvgCircles =
        randomSvgCircle + "; " + randomSvgCircle2 + "; " + randomSvgCircle

    let outputMorphFillColors =
        outputFillColor + "; " + outputFillColor2 + "; " + outputFillColor

    let outputMorphFillGradient1 =
        outputFillColor +
        "; " +
        outputFillGradientColor +
        "; " +
        outputFillColor

    let outputMorphFillGradient2 =
        outputFillColor2 +
        "; " +
        outputFillGradientColor2 +
        "; " +
        outputFillColor2

    let outputMorphBorderColors =
        outputBorderColor + "; " + outputBorderColor2 + "; " + outputBorderColor

    let morphDuration = props.morphDuration

    // Circle with color background
    if (props.fillToggle == 1) {
        // Without morph
        if (props.morphToggle == false) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        //viewBox={outputViewBox}
                        //preserveAspectRatio={outputAspectRation}
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <path
                            d={randomSvgCircle}
                            fill={outputFillColor}
                            stroke={outputBorderColor}
                            strokeWidth={thisBorderSize}
                        />
                    </svg>
                </Frame>
            )
        }
        // With morph
        if (props.morphToggle == true) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <path
                            fill={outputFillColor}
                            strokeWidth={thisBorderSize}
                            stroke={outputBorderColor}
                        >
                            <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur={morphDuration}
                                values={randomMorphSvgCircles}
                            />
                            <animate
                                repeatCount="indefinite"
                                attributeName="fill"
                                dur={morphDuration}
                                values={outputMorphFillColors}
                            />
                            <animate
                                repeatCount="indefinite"
                                attributeName="stroke"
                                dur={morphDuration}
                                values={outputMorphBorderColors}
                            />
                        </path>
                    </svg>
                </Frame>
            )
        }
    }

    // Circle with gradient background

    if (props.fillToggle == 2) {
        // With morph
        if (props.morphToggle == true) {
            // Circle with linear gradient background
            if (props.fillGradientToggle == false) {
                return (
                    <Frame
                        backgroundColor={"none"}
                        width={"100%"}
                        height={"100%"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"100%"}
                            height={"100%"}
                        >
                            <defs>
                                <linearGradient
                                    id="linearGradient"
                                    x1={props.fillGradientX1 / 100}
                                    y1={props.fillGradientY1 / 100}
                                    x2={props.fillGradientX2 / 100}
                                    y2={props.fillGradientY2 / 100}
                                >
                                    <stop
                                        offset="0%"
                                        stopColor={outputFillColor}
                                    >
                                        <animate
                                            attributeName="stop-color"
                                            values={outputMorphFillGradient1}
                                            dur={morphDuration}
                                            repeatCount="indefinite"
                                        ></animate>
                                    </stop>
                                    <stop
                                        offset="100%"
                                        stopColor={outputFillColor2}
                                    >
                                        <animate
                                            attributeName="stop-color"
                                            values={outputMorphFillGradient2}
                                            dur={morphDuration}
                                            repeatCount="indefinite"
                                        ></animate>
                                    </stop>
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#linearGradient)"
                                strokeWidth={thisBorderSize}
                                stroke={outputBorderColor}
                            >
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="d"
                                    dur={morphDuration}
                                    values={randomMorphSvgCircles}
                                />
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="stroke"
                                    dur={morphDuration}
                                    values={outputMorphBorderColors}
                                />
                            </path>
                        </svg>
                    </Frame>
                )
            }
            // Circle with radial gradient background
            if (props.fillGradientToggle == true) {
                return (
                    <Frame
                        backgroundColor={"none"}
                        width={"100%"}
                        height={"100%"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"100%"}
                            height={"100%"}
                        >
                            <defs>
                                <radialGradient
                                    cx={props.fillGradientCx / 100}
                                    cy={props.fillGradientCy / 100}
                                    r={props.fillGradientR / 100}
                                    fx={props.fillGradientFx / 100}
                                    fy={props.fillGradientFy / 100}
                                    id="radialGradient"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor={outputFillColor}
                                    >
                                        <animate
                                            attributeName="stop-color"
                                            values={outputMorphFillGradient1}
                                            dur={morphDuration}
                                            repeatCount="indefinite"
                                        ></animate>
                                    </stop>
                                    <stop
                                        offset="100%"
                                        stopColor={outputFillColor2}
                                    >
                                        <animate
                                            attributeName="stop-color"
                                            values={outputMorphFillGradient2}
                                            dur={morphDuration}
                                            repeatCount="indefinite"
                                        ></animate>
                                    </stop>
                                </radialGradient>
                            </defs>
                            <path
                                fill="url(#radialGradient)"
                                strokeWidth={thisBorderSize}
                                stroke={outputBorderColor}
                            >
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="d"
                                    dur={morphDuration}
                                    values={randomMorphSvgCircles}
                                />
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="stroke"
                                    dur={morphDuration}
                                    values={outputMorphBorderColors}
                                />
                            </path>
                        </svg>
                    </Frame>
                )
            }
        }
        // Without morph
        if (props.morphToggle == false) {
            // Circle with linear radient background
            if (props.fillGradientToggle == false) {
                return (
                    <Frame
                        backgroundColor={"none"}
                        width={"100%"}
                        height={"100%"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"100%"}
                            height={"100%"}
                        >
                            <defs>
                                <linearGradient
                                    id="linearGradient"
                                    x1={props.fillGradientX1 / 100}
                                    y1={props.fillGradientY1 / 100}
                                    x2={props.fillGradientX2 / 100}
                                    y2={props.fillGradientY2 / 100}
                                >
                                    <stop
                                        offset="0%"
                                        stopColor={outputFillColor}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor={outputFillGradientColor}
                                    />
                                </linearGradient>
                            </defs>
                            <path
                                d={randomSvgCircle}
                                fill="url(#linearGradient)"
                                stroke={outputBorderColor}
                                strokeWidth={thisBorderSize}
                            />
                        </svg>
                    </Frame>
                )
            }
            // Circle with radial radient background
            if (props.fillGradientToggle == true) {
                return (
                    <Frame
                        backgroundColor={"none"}
                        width={"100%"}
                        height={"100%"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"100%"}
                            height={"100%"}
                        >
                            <defs>
                                <radialGradient
                                    cx={props.fillGradientCx / 100}
                                    cy={props.fillGradientCy / 100}
                                    r={props.fillGradientR / 100}
                                    fx={props.fillGradientFx / 100}
                                    fy={props.fillGradientFy / 100}
                                    id="radialGradient"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor={outputFillColor}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor={outputFillGradientColor}
                                    />
                                </radialGradient>
                            </defs>
                            <path
                                d={randomSvgCircle}
                                fill="url(#radialGradient)"
                                stroke={outputBorderColor}
                                strokeWidth={thisBorderSize}
                            />
                        </svg>
                    </Frame>
                )
            }
        }
    }

    // Circle with image background
    if (props.fillToggle == 3) {
        // Without morph
        if (props.morphToggle == false) {
            return (
                <Frame backgroundColor="none" width="100%" height="100%">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <defs>
                            <clipPath
                                id="maskCircle"
                                clipPathUnits="userSpaceOnUse"
                            >
                                <path
                                    d={randomSvgCircle}
                                    fill={outputFillColor}
                                    stroke={outputBorderColor}
                                    strokeWidth={thisBorderSize}
                                />
                            </clipPath>
                        </defs>

                        <image
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMinYMin slice"
                            href={props.fillImage}
                            clipPath="url(#maskCircle)"
                        />
                    </svg>
                </Frame>
            )
        }
        // With morph
        if (props.morphToggle == true) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <defs>
                            <clipPath
                                id="maskCircle"
                                clipPathUnits="userSpaceOnUse"
                            >
                                <path
                                    fill={outputFillColor}
                                    strokeWidth={thisBorderSize}
                                    stroke={outputBorderColor}
                                >
                                    <animate
                                        repeatCount="indefinite"
                                        attributeName="d"
                                        dur={morphDuration}
                                        values={randomMorphSvgCircles}
                                    />
                                    <animate
                                        repeatCount="indefinite"
                                        attributeName="stroke"
                                        dur={morphDuration}
                                        values={outputMorphBorderColors}
                                    />
                                </path>
                            </clipPath>
                        </defs>

                        <image
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMinYMin slice"
                            href={props.fillImage}
                            clipPath="url(#maskCircle)"
                        />
                    </svg>
                </Frame>
            )
        }
    }
}
// Framer input interface for control form, colors and randoms properties

addPropertyControls(Circle, {
    // Size control properties
    circleDiamPx: {
        type: ControlType.Number,
        title: "Diameter",
        defaultValue: 190,
        max: 3000,
        min: 0,
        step: 1,
        displayStepper: true,
    },
    randomStepDiameter: {
        type: ControlType.Number,
        title: "~diameter",
        defaultValue: 0,
        max: 50,
        min: 0,
        unit: "%",
        step: 1,
        displayStepper: true,
    },
    randomStep: {
        type: ControlType.Number,
        title: "~distortion",
        defaultValue: 0,
        max: 10,
        min: 0,
        unit: "%",
        step: 0.1,
        displayStepper: true,
    },

    // Fill control properties
    fillToggle: {
        type: ControlType.Enum,
        title: "Fill",
        defaultValue: "Linear",
        options: [1, 2, 3],
        optionTitles: ["Solid", "Gradient", "Image"],
    },
    fillGradientToggle: {
        // Fill gradient type propertie
        type: ControlType.Boolean,
        title: "Type",
        enabledTitle: "Radial",
        disabledTitle: "Linear",
        defaultValue: false,
        hidden(props) {
            return props.fillToggle === 3 || props.fillToggle === 1
        },
    },
    fillColor: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "hsl(324, 100%, 50%)",
        hidden(props) {
            return props.fillToggle === 3
        },
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
        hidden(props) {
            return props.fillToggle === 3
        },
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
        hidden(props) {
            return props.fillToggle === 3
        },
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
        hidden(props) {
            return props.fillToggle === 3
        },
    },

    // Fill gradient control properties
    fillGradientColor: {
        type: ControlType.Color,
        title: "Stop-color",
        defaultValue: "hsl(220, 99%, 50%)",
        hidden(props) {
            return props.fillToggle === 3 || props.fillToggle === 1
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
            return props.fillToggle === 3 || props.fillToggle === 1
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
            return props.fillToggle === 3 || props.fillToggle === 1
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
            return props.fillToggle === 3 || props.fillToggle === 1
        },
    },
    // Fill linear gradient control properties
    fillGradientX1: {
        type: ControlType.Number,
        title: "x1",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === true ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientY1: {
        type: ControlType.Number,
        title: "y1",
        defaultValue: 100,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === true ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientX2: {
        type: ControlType.Number,
        title: "x2",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === true ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientY2: {
        type: ControlType.Number,
        title: "y2",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === true ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    // Fill radial gradient control properties
    fillGradientCx: {
        type: ControlType.Number,
        title: "cx",
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === false ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientCy: {
        type: ControlType.Number,
        title: "cy",
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === false ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientR: {
        type: ControlType.Number,
        title: "r",
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === false ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientFx: {
        type: ControlType.Number,
        title: "fx",
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === false ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },
    fillGradientFy: {
        type: ControlType.Number,
        title: "fy",
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return (
                props.fillGradientToggle === false ||
                props.fillToggle === 3 ||
                props.fillToggle === 1
            )
        },
    },

    // Backgroung image control properties
    fillImage: {
        type: ControlType.Image,
        title: "Img file",
        hidden(props) {
            return props.fillToggle === 2 || props.fillToggle === 1
        },
    },

    // Border control properties
    borderToggle: {
        type: ControlType.Boolean,
        title: "Border",
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: false,
        hidden(props) {
            return props.fillToggle === 3
        },
    },
    borderSize: {
        type: ControlType.Number,
        title: "Size",
        defaultValue: 2,
        max: 1024,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.fillToggle === 3 || props.borderToggle === false
        },
    },
    borderColors: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "hsl(59, 100%, 47%)",
        hidden(props) {
            return props.fillToggle === 3 || props.borderToggle === false
        },
    },
    borderHueRandom: {
        type: ControlType.Number,
        title: "~hue",
        defaultValue: 0,
        min: 0,
        max: 360,
        unit: "°",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 3 || props.borderToggle === false
        },
    },
    borderSaturRandom: {
        type: ControlType.Number,
        title: "~saturation",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 3 || props.borderToggle === false
        },
    },
    borderLightRandom: {
        type: ControlType.Number,
        title: "~luminosity",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.fillToggle === 3 || props.borderToggle === false
        },
    },

    // Morph control properties
    morphToggle: {
        type: ControlType.Boolean,
        title: "Morph",
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: false,
    },
    morphDuration: {
        type: ControlType.Number,
        title: "Duration",
        defaultValue: 0,
        min: 0,
        max: 180,
        step: 0.1,
        displayStepper: true,
        hidden(props) {
            return props.morphToggle === false
        },
    },
})
