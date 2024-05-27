/*

Cursor Follower for Framer
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

//import AnimatedCursor from "react-animated-cursor"
import React, { useEffect, useState } from "react"
import { addPropertyControls, ControlType } from "framer"

let AnimatedCursor = null

export default function Cursor_Follower(props) {
    const [isClient, setIsClient] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsClient(true)

        // Add a delay of 500ms before initializing the AnimatedCursor
        setTimeout(() => {
            import("react-animated-cursor")
                .then((mod) => {
                    AnimatedCursor = mod.default
                    setIsLoaded(true)
                })
                .catch((err) =>
                    console.error("Failed to load animated cursor", err)
                )
        }, 100) // Adjust the delay time as needed
    }, [])
    return (
        <>
            {isClient && isLoaded && AnimatedCursor && (
                <AnimatedCursor
                    // General
                    trailingSpeed={props.trailingSpeed}
                    // Inner cursor
                    innerSize={props.innerCursor.size}
                    innerScale={props.innerCursor.scale}
                    innerStyle={{
                        backgroundColor: props.innerCursor.color,
                        backgroundImage:
                            "url(" + props.innerCursor.image.src + ")",
                        backgroundSize: props.innerCursor.image.size + "%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderWidth: props.innerCursor.border.size,
                        borderColor: props.innerCursor.border.color,
                        borderStyle: "solid",
                        backdropFilter: props.innerCursor.styles,
                        WebkitBackdropFilter: props.innerCursor.styles,
                        mixBlendMode: props.innerCursor.blending,
                    }}
                    // Outer cursor
                    outerSize={props.outerCursor.size}
                    outerScale={props.outerCursor.scale}
                    outerStyle={{
                        backgroundColor: props.outerCursor.color,
                        backgroundImage:
                            "url(" + props.outerCursor.image.src + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: props.outerCursor.image.size + "%",
                        borderWidth: props.outerCursor.border.size,
                        borderColor: props.outerCursor.border.color,
                        borderStyle: "solid",
                        backdropFilter: props.outerCursor.styles,
                        WebkitBackdropFilter: props.outerCursor.styles,
                        mixBlendMode: props.outerCursor.blending,
                    }}
                />
            )}
        </>
    )
}

addPropertyControls(Cursor_Follower, {
    // General
    trailingSpeed: {
        type: ControlType.Number,
        title: "Delay",
        defaultValue: 8,
        min: 0,
        step: 0.1,
        displayStepper: false,
    },

    // Inner cursor
    innerCursor: {
        type: ControlType.Object,
        title: "Inner",
        controls: {
            size: {
                type: ControlType.Number,
                title: "Size",
                defaultValue: 24,
                min: 0,
                step: 0.5,
                displayStepper: false,
            },
            scale: {
                type: ControlType.Number,
                title: "Scale",
                defaultValue: 2,
                min: 0,
                step: 0.1,
                displayStepper: true,
            },
            color: {
                type: ControlType.Color,
                tilte: "Color",
                defaultValue: "rgba(0, 50, 255, 0.8)",
            },
            image: {
                type: ControlType.Object,
                title: "Image",
                controls: {
                    src: {
                        type: ControlType.Image,
                        title: "Source",
                    },
                    size: {
                        type: ControlType.Number,
                        title: "Size",
                        defaultValue: 100,
                        min: 0,
                        step: 0.5,
                        unit: "%",
                        displayStepper: true,
                    },
                },
            },
            border: {
                type: ControlType.Object,
                title: "Border",
                controls: {
                    color: {
                        type: ControlType.Color,
                        title: "Color",
                    },
                    size: {
                        type: ControlType.Number,
                        title: "Size",
                        min: 0,
                        step: 0.5,
                        displayStepper: true,
                    },
                },
            },
            blending: {
                type: ControlType.Enum,
                title: "Blending",
                defaultValue: "normal",
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
            },
            styles: {
                type: ControlType.String,
                title: "Backdrop",
                placeholder: "sepia(100%) blur(8px)",
                displayTextArea: true,
            },
        },
    },
    // Outer cursor
    outerCursor: {
        type: ControlType.Object,
        title: "Outer",
        controls: {
            size: {
                type: ControlType.Number,
                title: "Size",
                defaultValue: 8,
                min: 0,
                step: 0.5,
                displayStepper: false,
            },
            scale: {
                type: ControlType.Number,
                title: "Scale",
                defaultValue: 1,
                min: 0,
                step: 0.1,
                displayStepper: true,
            },
            color: {
                type: ControlType.Color,
                tilte: "Color",
                defaultValue: "rgba(0, 50, 255, 0.3)",
            },
            image: {
                type: ControlType.Object,
                title: "Image",
                controls: {
                    src: {
                        type: ControlType.Image,
                        title: "Source",
                    },
                    size: {
                        type: ControlType.Number,
                        title: "Size",
                        defaultValue: 100,
                        min: 0,
                        step: 0.5,
                        unit: "%",
                        displayStepper: true,
                    },
                },
            },
            border: {
                type: ControlType.Object,
                title: "Border",
                controls: {
                    color: {
                        type: ControlType.Color,
                        title: "Color",
                    },
                    size: {
                        type: ControlType.Number,
                        title: "Size",
                        defaultValue: 0,
                        min: 0,
                        step: 0.5,
                        displayStepper: true,
                    },
                },
            },
            blending: {
                type: ControlType.Enum,
                title: "Blending",
                defaultValue: "normal",
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
            },
            styles: {
                type: ControlType.String,
                title: "Backdrop",
                placeholder: "sepia(100%) blur(8px)",
                displayTextArea: true,
            },
        },
    },
})
