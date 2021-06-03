import * as React from "react"
import { Frame, addPropertyControls, ControlType, Color } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

// Generic random function
function getRandomInt(min, max) {
    return Math.random() * (max - min) + min
}

// Fonction Figleaf Textures
export function Texture(props) {
    // Straight lines texture
    if (props.typeToggle == "a") {
        // Random color generator for lines borders
        let thisBorderColor = Color(props.borderColors)
        let thisBorderSize = props.borderSize
        let thisRandomBorderSize =
            getRandomInt(-props.randomBorderSize, props.randomBorderSize) / 100
        let outputBorderSize =
            thisBorderSize + thisBorderSize * thisRandomBorderSize
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
        let borderSaturColorOutput =
            thisBorderColor.s * 100 + thisBorderSaturRandom
        if (borderSaturColorOutput > 100) {
            borderSaturColorOutput = 100
        }
        if (borderSaturColorOutput < 0) {
            borderSaturColorOutput = 0
        }
        let borderLightColorOutput =
            thisBorderColor.l * 100 + thisBorderLightRandom
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

        // Random generator of straight lines
        let thisTextureStep = props.textureStep
        let thisRandonStep = (props.randomTextureStep / 100) * thisTextureStep
        let thisLinesNumber = props.formWidthPx / thisTextureStep
        let x1 = 0
        let y1 = 0
        let x2 = 0
        let y2 = props.formHeightPx
        let randomLine = "M" + x1 + " " + y1 + " L" + x2 + " " + y2 + " Z "
        for (let i = 0; i < thisLinesNumber; i++) {
            x1 =
                x1 +
                thisTextureStep +
                getRandomInt(-thisRandonStep, thisRandonStep)
            x2 =
                x2 +
                thisTextureStep +
                getRandomInt(-thisRandonStep, thisRandonStep)
            randomLine =
                randomLine + "M" + x1 + " " + y1 + " L" + x2 + " " + y2 + " Z "
        }

        // Console display : svg code of straight lines texture
        console.log(
            "<svg><path d=" +
                randomLine +
                "stroke=" +
                outputBorderColor +
                "strokeWidth=" +
                outputBorderSize +
                "/></svg>"
        )
        // Return : straight lines texture
        return (
            <Frame
                backgroundColor={"transparent"}
                width={"100%"}
                height={"100%"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"100%"}
                    height={"100%"}
                >
                    <path
                        d={randomLine}
                        stroke={outputBorderColor}
                        strokeWidth={outputBorderSize}
                    />
                </svg>
            </Frame>
        )
    }

    // Image grid texture
    if (props.typeToggle == "b") {
        let thisImageFile = props.imageFile
        let thisXstep = props.imageXstep
        let thisImageRandomXstep = props.imageRandomXstep
        let thisYstep = props.imageYstep
        let thisImageRandomYstep = props.imageRandomYstep

        let thisImageRotation = props.imageRotation
        let thisImageRandomRotation = props.imageRandomRotation
        let thisImageScale = props.imageScale
        let thisImageRandomScale = props.imageRandomScale

        let thisXstepsNumber = props.formWidthPx / thisXstep
        let thisYstepsNumber = props.formHeightPx / thisYstep

        let imagesOutput = []
        let outputImageXstep = 0
        let outputImageYstep = 0

        let outputImageRotate = thisImageRotation
        let outputImageScale = thisImageRandomScale

        let thisDivID

        console.log(thisXstepsNumber)
        console.log(thisXstepsNumber)

        for (let i = 0; i < thisYstepsNumber; i++) {
            for (let j = 0; j < thisXstepsNumber; j++) {
                thisDivID = "image_" + i
                outputImageYstep =
                    thisYstep * i +
                    (thisYstep *
                        getRandomInt(
                            -thisImageRandomYstep,
                            thisImageRandomYstep
                        )) /
                        100
                outputImageXstep =
                    thisXstep * j +
                    (thisXstep *
                        getRandomInt(
                            -thisImageRandomXstep,
                            thisImageRandomXstep
                        )) /
                        100
                outputImageRotate =
                    thisImageRotation +
                    getRandomInt(
                        -thisImageRandomRotation,
                        thisImageRandomRotation
                    )
                outputImageScale =
                    thisImageScale * getRandomInt(1, thisImageRandomScale)

                imagesOutput.push(
                    <div
                        id={thisDivID}
                        style={{
                            position: "fixed",
                            display: "block",
                            left: outputImageXstep,
                            top: outputImageYstep,
                            transform:
                                "rotate(" +
                                outputImageRotate +
                                "deg) scale(" +
                                outputImageScale +
                                "," +
                                outputImageScale +
                                ")",
                        }}
                    >
                        <img src={thisImageFile} />
                    </div>
                )
            }
        }
        // Return : image grid texture
        return (
            <Frame
                backgroundColor={"transparent"}
                width={"100%"}
                height={"100%"}
            >
                {imagesOutput}
            </Frame>
        )
    }
}
// Properties controls
addPropertyControls(Texture, {
    // General properties
    typeToggle: {
        type: ControlType.Enum,
        defaultValue: "a",
        options: ["a", "b"],
        optionTitles: ["Line", "Image"],
        title: "Type",
    },
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
    // Straight lines texture properties
    textureStep: {
        type: ControlType.Number,
        title: "Gap",
        defaultValue: 10,
        unit: "px",
        max: 100,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "b" || props.typeToggle == "c"
        },
    },
    randomTextureStep: {
        type: ControlType.Number,
        title: "~gap",
        defaultValue: 0,
        max: 1000,
        min: 0,
        unit: "%",
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "b" || props.typeToggle == "c"
        },
    },
    borderSize: {
        type: ControlType.Number,
        title: "Border",
        defaultValue: 1,
        max: 1024,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "b" || props.typeToggle == "c"
        },
    },
    randomBorderSize: {
        type: ControlType.Number,
        title: "~border",
        defaultValue: 0,
        max: 100,
        min: 0,
        step: 0.1,
        unit: "%",
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "b" || props.typeToggle == "c"
        },
    },
    borderColors: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "hsl(84, 100%, 49%)",
        hidden(props) {
            return props.typeToggle == "b" || props.typeToggle == "c"
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
            return props.typeToggle == "b" || props.typeToggle == "c"
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
            return props.typeToggle == "b" || props.typeToggle == "c"
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
            return props.typeToggle == "b" || props.typeToggle == "c"
        },
    },
    // Image grid texture properties
    imageFile: {
        title: "Image",
        type: ControlType.File,
        allowedFileTypes: ["png", "jpg", "jpeg", "jpg"],
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageScale: {
        type: ControlType.Number,
        title: "Scale",
        defaultValue: 1,
        max: 1,
        min: 0.01,
        step: 0.01,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageRandomScale: {
        type: ControlType.Number,
        title: "~scale",
        defaultValue: 1,
        max: 1,
        min: 0.01,
        step: 0.01,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageRotation: {
        type: ControlType.Number,
        title: "Rotation",
        defaultValue: 0,
        unit: "°",
        max: 360,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageRandomRotation: {
        type: ControlType.Number,
        title: "~rotation",
        defaultValue: 0,
        unit: "°",
        max: 360,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageXstep: {
        type: ControlType.Number,
        title: "X gap",
        defaultValue: 10,
        max: 100,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageYstep: {
        type: ControlType.Number,
        title: "Y gap",
        defaultValue: 10,
        max: 100,
        min: 0,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageRandomXstep: {
        type: ControlType.Number,
        title: "~x gap",
        defaultValue: 0,
        max: 100,
        min: 0,
        unit: "%",
        step: 0.1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
    imageRandomYstep: {
        type: ControlType.Number,
        title: "~y gap",
        defaultValue: 0,
        max: 100,
        min: 0,
        unit: "%",
        step: 0.1,
        displayStepper: true,
        hidden(props) {
            return props.typeToggle == "a" || props.typeToggle == "c"
        },
    },
})
