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

// Fonction Figleaf Rectangle
export function Rectangle(props) {
    // Rectangle 1
    // Random color generator for polygon borders
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
    // Activate or deactivate the border of the polygon
    if (props.borderToggle == false) {
        thisBorderSize = 0
    }

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

    // Random polygon generator
    let thisWidth = props.formWidthPx
    let thisHeight = props.formHeightPx
    let thisRandomStepPoints = (props.randomStepPoints * thisWidth) / 100
    let thisRandomStepWidth = (props.randomStepWidth * thisWidth) / 100
    let thisRandomStepHeight = (props.randomStepHeight * thisWidth) / 100
    thisWidth = thisWidth - getRandomInt(0, thisRandomStepWidth)
    thisHeight = thisHeight - getRandomInt(0, thisRandomStepHeight)
    // Aligns the random polygon inside, on horseback or outside the reference rectangle
    let x1 = getRandomInt(0, thisRandomStepPoints) + thisBorderSize / 2
    let y1 = getRandomInt(0, thisRandomStepPoints) + thisBorderSize / 2
    let x2 = thisWidth - getRandomInt(0, thisRandomStepPoints) - thisBorderSize
    let y2 = getRandomInt(0, thisRandomStepPoints) + thisBorderSize / 2
    let x3 = thisWidth - getRandomInt(0, thisRandomStepPoints) - thisBorderSize
    let y3 = thisHeight - getRandomInt(0, thisRandomStepPoints) - thisBorderSize
    let x4 = getRandomInt(0, thisRandomStepPoints) + thisBorderSize / 2
    let y4 = thisHeight - getRandomInt(0, thisRandomStepPoints) - thisBorderSize
    // Disable random function for one or more segments
    let thisDisableRandom = props.segmentsToggle
    let thisTopRandom = props.topRandom
    let thisRightRandom = props.rightRandom
    let thisBottomRandom = props.bottomRandom
    let thisLeftRandom = props.leftRandom
    if (thisDisableRandom == true && thisTopRandom == true) {
        y1 = thisBorderSize / 2
        y2 = thisBorderSize / 2
    }
    if (thisDisableRandom == true && thisRightRandom == true) {
        x2 = thisWidth + thisBorderSize / 2
        x3 = thisWidth + thisBorderSize / 2
    }
    if (thisDisableRandom == true && thisBottomRandom == true) {
        y3 = thisHeight + thisBorderSize / 2
        y4 = thisHeight + thisBorderSize / 2
    }
    if (thisDisableRandom == true && thisLeftRandom == true) {
        x1 = thisBorderSize / 2
        x4 = thisBorderSize / 2
    }

    // SVG polygon coordinate string generator
    let randomRect =
        x1 +
        "," +
        y1 +
        " " +
        x2 +
        "," +
        y2 +
        " " +
        x3 +
        "," +
        y3 +
        " " +
        x4 +
        "," +
        y4

    let randomPath =
        "M " +
        x1 +
        " " +
        y1 +
        " L " +
        x2 +
        " " +
        y2 +
        " L " +
        x3 +
        " " +
        y3 +
        " L " +
        x4 +
        " " +
        y4 +
        " Z"

    // Rectangle 2
    // Random color generator for polygon borders
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
    // Activate or deactivate the border of the polygon
    if (props.borderToggle == false) {
        thisBorderSize = 0
    }

    // Random color generator for polygon fill
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

    // Random polygon generator
    let thisWidth2 = props.formWidthPx
    let thisHeight2 = props.formHeightPx
    let thisRandomStepPoints2 = (props.randomStepPoints * thisWidth2) / 100
    let thisRandomStepWidth2 = (props.randomStepWidth * thisWidth2) / 100
    let thisRandomStepHeight2 = (props.randomStepHeight * thisWidth2) / 100
    thisWidth2 = thisWidth2 - getRandomInt(0, thisRandomStepWidth2)
    thisHeight2 = thisHeight2 - getRandomInt(0, thisRandomStepHeight2)
    // Aligns the random polygon inside, on horseback or outside the reference rectangle
    let x12 = getRandomInt(0, thisRandomStepPoints2) + thisBorderSize / 2
    let y12 = getRandomInt(0, thisRandomStepPoints2) + thisBorderSize / 2
    let x22 =
        thisWidth2 - getRandomInt(0, thisRandomStepPoints2) - thisBorderSize
    let y22 = getRandomInt(0, thisRandomStepPoints2) + thisBorderSize / 2
    let x32 =
        thisWidth2 - getRandomInt(0, thisRandomStepPoints2) - thisBorderSize
    let y32 =
        thisHeight2 - getRandomInt(0, thisRandomStepPoints2) - thisBorderSize
    let x42 = getRandomInt(0, thisRandomStepPoints2) + thisBorderSize / 2
    let y42 =
        thisHeight2 - getRandomInt(0, thisRandomStepPoints2) - thisBorderSize
    // Disable random function for one or more segments
    let thisDisableRandom2 = props.segmentsToggle
    let thisTopRandom2 = props.topRandom
    let thisRightRandom2 = props.rightRandom
    let thisBottomRandom2 = props.bottomRandom
    let thisLeftRandom2 = props.leftRandom
    if (thisDisableRandom2 == true && thisTopRandom2 == true) {
        y1 = thisBorderSize / 2
        y2 = thisBorderSize / 2
    }
    if (thisDisableRandom2 == true && thisRightRandom2 == true) {
        x2 = thisWidth2 + thisBorderSize / 2
        x3 = thisWidth2 + thisBorderSize / 2
    }
    if (thisDisableRandom2 == true && thisBottomRandom2 == true) {
        y3 = thisHeight2 + thisBorderSize / 2
        y4 = thisHeight2 + thisBorderSize / 2
    }
    if (thisDisableRandom2 == true && thisLeftRandom2 == true) {
        x1 = thisBorderSize / 2
        x4 = thisBorderSize / 2
    }

    // SVG polygon coordinate string generator
    let randomRect2 =
        x12 +
        "," +
        y12 +
        " " +
        x22 +
        "," +
        y22 +
        " " +
        x32 +
        "," +
        y32 +
        " " +
        x42 +
        "," +
        y42

    let randomPath2 =
        "M " +
        x12 +
        " " +
        y12 +
        " L " +
        x22 +
        " " +
        y22 +
        " L " +
        x32 +
        " " +
        y32 +
        " L " +
        x42 +
        " " +
        y42 +
        " Z"

    let morphDuration = props.morphDuration

    let randomMorphSvgRect = randomRect + "; " + randomRect2 + "; " + randomRect

    let randomMorphSvgPath = randomPath + "; " + randomPath2 + "; " + randomPath

    let outputMorphFillColors =
        outputFillColor + "; " + outputFillColor2 + "; " + outputFillColor

    let outputMorphBorderColors =
        outputBorderColor + "; " + outputBorderColor2 + "; " + outputBorderColor

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

    // Polygon SVG code generator

    // Polygon with color background
    if (props.fillToggle == 1) {
        if (props.morphToggle === false) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <path
                            d={randomPath}
                            points={randomRect}
                            fill={outputFillColor}
                            stroke={outputBorderColor}
                            strokeWidth={thisBorderSize}
                        />
                    </svg>
                </Frame>
            )
        }
        if (props.morphToggle === true) {
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
                                attributeName="points"
                                dur={morphDuration}
                                values={randomMorphSvgRect}
                            />
                            <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur={morphDuration}
                                values={randomMorphSvgPath}
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

    // Polygon with gradient background
    if (props.fillToggle == 2) {
        // Polygon with linear gradient background
        if (props.fillGradientToggle == false) {
            if (props.morphToggle === false) {
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
                                d={randomPath}
                                points={randomRect}
                                fill="url(#linearGradient)"
                                stroke={outputBorderColor}
                                strokeWidth={thisBorderSize}
                            />
                        </svg>
                    </Frame>
                )
            }
            if (props.morphToggle === true) {
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
                                    attributeName="points"
                                    dur={morphDuration}
                                    values={randomMorphSvgRect}
                                />
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="d"
                                    dur={morphDuration}
                                    values={randomMorphSvgPath}
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
        // Polygon with radial gradient background
        if (props.fillGradientToggle == true) {
            if (props.morphToggle === false) {
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
                                d={randomPath}
                                points={randomRect}
                                fill="url(#radialGradient)"
                                stroke={outputBorderColor}
                                strokeWidth={thisBorderSize}
                            />
                        </svg>
                    </Frame>
                )
            }
            if (props.morphToggle === true) {
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
                                                values={
                                                    outputMorphFillGradient1
                                                }
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
                                                values={
                                                    outputMorphFillGradient2
                                                }
                                                dur={morphDuration}
                                                repeatCount="indefinite"
                                            ></animate>
                                        </stop>
                                    </radialGradient>
                                </defs>
                            </defs>
                            <path
                                fill="url(#radialGradient)"
                                strokeWidth={thisBorderSize}
                                stroke={outputBorderColor}
                            >
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="points"
                                    dur={morphDuration}
                                    values={randomMorphSvgRect}
                                />
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="d"
                                    dur={morphDuration}
                                    values={randomMorphSvgPath}
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
    }

    // Polygon with image background
    if (props.fillToggle == 3) {
        if (props.morphToggle === false) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <defs>
                            <clipPath id="mask" clipPathUnits="userSpaceOnUse">
                                <path
                                    d={randomPath}
                                    points={randomRect}
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
                            clipPath="url(#mask)"
                        />
                    </svg>
                </Frame>
            )
        }
        if (props.morphToggle === true) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"100%"}
                        height={"100%"}
                    >
                        <defs>
                            <clipPath id="mask" clipPathUnits="userSpaceOnUse">
                                <path
                                    d={randomPath}
                                    points={randomRect}
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
                            clipPath="url(#mask)"
                        />
                    </svg>
                </Frame>
            )
        }
    }
    if (props.morphToggle === true) {
        return (
            <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"100%"}
                    height={"100%"}
                >
                    <defs>
                        <clipPath id="mask" clipPathUnits="userSpaceOnUse">
                            <path
                                fill={outputFillColor}
                                strokeWidth={thisBorderSize}
                                stroke={outputBorderColor}
                            >
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="points"
                                    dur={morphDuration}
                                    values={randomMorphSvgRect}
                                />
                                <animate
                                    repeatCount="indefinite"
                                    attributeName="d"
                                    dur={morphDuration}
                                    values={randomMorphSvgPath}
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
                        clipPath="url(#mask)"
                    />
                </svg>
            </Frame>
        )
    }
}

// Framer input interface for control form, colors and randoms properties
addPropertyControls(Rectangle, {
    // Size control properties
    formWidthPx: {
        type: ControlType.Number,
        title: "Width",
        defaultValue: 200,
        max: 3000,
        min: 0,
        step: 1,
        displayStepper: true,
    },
    formHeightPx: {
        type: ControlType.Number,
        title: "Height",
        defaultValue: 200,
        max: 5000,
        min: 0,
        step: 1,
        displayStepper: true,
    },
    randomStepWidth: {
        type: ControlType.Number,
        title: "~width",
        defaultValue: 0,
        max: 50,
        min: 0,
        unit: "%",
        step: 0.1,
        displayStepper: true,
    },
    randomStepHeight: {
        type: ControlType.Number,
        title: "~height",
        defaultValue: 0,
        max: 50,
        min: 0,
        unit: "%",
        step: 0.1,
        displayStepper: true,
    },
    randomStepPoints: {
        type: ControlType.Number,
        title: "~distortion",
        defaultValue: 0,
        max: 10,
        min: 0,
        unit: "%",
        step: 0.1,
        displayStepper: true,
    },
    segmentsToggle: {
        type: ControlType.Boolean,
        title: "Undo side",
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: false,
    },
    topRandom: {
        type: ControlType.Boolean,
        title: "~top",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden(props) {
            return props.segmentsToggle === false
        },
    },
    rightRandom: {
        type: ControlType.Boolean,
        title: "~right",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden(props) {
            return props.segmentsToggle === false
        },
    },
    bottomRandom: {
        type: ControlType.Boolean,
        title: "~bottom",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden(props) {
            return props.segmentsToggle === false
        },
    },
    leftRandom: {
        type: ControlType.Boolean,
        title: "~left",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden(props) {
            return props.segmentsToggle === false
        },
    },
    // Fill color control properties
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
        defaultValue: "hsl(220, 100%, 50%)",
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

    // Fill gradient color properties
    fillGradientColor: {
        type: ControlType.Color,
        title: "Stop-color",
        defaultValue: "hsl(324, 100%, 50%)",
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
