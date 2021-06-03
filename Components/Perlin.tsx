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

// Figleaf Turbulence Fonction
export function Perlin_Frame(props) {
    // Perlin <feTurbulence> variables
    let thisBaseFrequencyTurb = props.baseFrequencyTurb
    let thisOctaveTurb = props.octaveTurb
    let thisSeedRandomTurb = getRandomInt(1, 1000)
    let thisSeedTurb = props.seedTurb

    // Discrete <feComponentTransfer> variables
    let thisRedDiscrete = props.Red_discrete
    let thisGreenDiscrete = props.Green_discrete
    let thisBlueDiscrete = props.Blue_discrete
    let thisAlphaDiscrete = props.Alpha_discrete

    // Discrete <feComponentTransfer> variables
    let thisRedTable = props.Red_table
    let thisGreenTable = props.Green_table
    let thisBlueTable = props.Blue_table
    let thisAlphaTable = props.Alpha_table

    // Turbulence SVG code generator

    // Turbulence width manual seed control
    if (props.seedToggle === false) {
        // Turbulence without <feComponentTransfer> effect
        if (props.effectToggle === 1) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <filter id="turbulence">
                            <feTurbulence
                                baseFrequency={thisBaseFrequencyTurb}
                                numOctaves={thisOctaveTurb}
                                seed={thisSeedTurb}
                            />
                        </filter>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="red"
                            filter="url(#turbulence)"
                        />
                    </svg>
                </Frame>
            )
        }
        // Turbulence with discrete <feComponentTransfer> effect
        if (props.effectToggle === 2) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <filter id="turbulence">
                            <feTurbulence
                                baseFrequency={thisBaseFrequencyTurb}
                                numOctaves={thisOctaveTurb}
                                seed={thisSeedTurb}
                            />

                            <feComponentTransfer>
                                <feFuncR
                                    type="discrete"
                                    tableValues={thisRedDiscrete}
                                ></feFuncR>
                                <feFuncG
                                    type="discrete"
                                    tableValues={thisGreenDiscrete}
                                ></feFuncG>
                                <feFuncB
                                    type="discrete"
                                    tableValues={thisBlueDiscrete}
                                ></feFuncB>
                                <feFuncA
                                    type="discrete"
                                    tableValues={thisAlphaDiscrete}
                                ></feFuncA>
                            </feComponentTransfer>
                        </filter>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="red"
                            filter="url(#turbulence)"
                        />
                    </svg>
                </Frame>
            )
        }
        // Turbulence with table <feComponentTransfer> effect
        if (props.effectToggle === 3) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <filter id="turbulence">
                            <feTurbulence
                                baseFrequency={thisBaseFrequencyTurb}
                                numOctaves={thisOctaveTurb}
                                seed={thisSeedTurb}
                            />

                            <feComponentTransfer>
                                <feFuncR
                                    type="table"
                                    tableValues={thisRedTable}
                                ></feFuncR>
                                <feFuncG
                                    type="table"
                                    tableValues={thisGreenTable}
                                ></feFuncG>
                                <feFuncB
                                    type="table"
                                    tableValues={thisBlueTable}
                                ></feFuncB>
                                <feFuncA
                                    type="table"
                                    tableValues={thisAlphaTable}
                                ></feFuncA>
                            </feComponentTransfer>
                        </filter>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="red"
                            filter="url(#turbulence)"
                        />
                    </svg>
                </Frame>
            )
        }
    }

    // Turbulence width random seed control
    if (props.seedToggle === true) {
        // Turbulence without <feComponentTransfer> effect
        if (props.effectToggle === 1) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <filter id="turbulence">
                            <feTurbulence
                                baseFrequency={thisBaseFrequencyTurb}
                                numOctaves={thisOctaveTurb}
                                seed={thisSeedRandomTurb}
                            />
                        </filter>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="red"
                            filter="url(#turbulence)"
                        />
                    </svg>
                </Frame>
            )
        }

        // Turbulence with discrete <feComponentTransfer> effect
        if (props.effectToggle === 2) {
            return (
                <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <filter id="turbulence">
                            <feTurbulence
                                baseFrequency={thisBaseFrequencyTurb}
                                numOctaves={thisOctaveTurb}
                                seed={thisSeedRandomTurb}
                            />

                            <feComponentTransfer>
                                <feFuncR
                                    type="discrete"
                                    tableValues={thisRedDiscrete}
                                ></feFuncR>
                                <feFuncG
                                    type="discrete"
                                    tableValues={thisGreenDiscrete}
                                ></feFuncG>
                                <feFuncB
                                    type="discrete"
                                    tableValues={thisBlueDiscrete}
                                ></feFuncB>
                                <feFuncA
                                    type="discrete"
                                    tableValues={thisAlphaDiscrete}
                                ></feFuncA>
                            </feComponentTransfer>
                        </filter>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="red"
                            filter="url(#turbulence)"
                        />
                    </svg>
                </Frame>
            )
        }
    }
    // Turbulence with table <feComponentTransfer> effect
    if (props.effectToggle === 3) {
        return (
            <Frame backgroundColor={"none"} width={"100%"} height={"100%"}>
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <filter id="turbulence">
                        <feTurbulence
                            baseFrequency={thisBaseFrequencyTurb}
                            numOctaves={thisOctaveTurb}
                            seed={thisSeedRandomTurb}
                        />

                        <feComponentTransfer>
                            <feFuncR
                                type="table"
                                tableValues={thisRedTable}
                            ></feFuncR>
                            <feFuncG
                                type="table"
                                tableValues={thisGreenTable}
                            ></feFuncG>
                            <feFuncB
                                type="table"
                                tableValues={thisBlueTable}
                            ></feFuncB>
                            <feFuncA
                                type="table"
                                tableValues={thisAlphaTable}
                            ></feFuncA>
                        </feComponentTransfer>
                    </filter>
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="red"
                        filter="url(#turbulence)"
                    />
                </svg>
            </Frame>
        )
    }
}

// Turbulence input interface for control

// Control perlin <feTurbulence> properties
addPropertyControls(Perlin_Frame, {
    baseFrequencyTurb: {
        type: ControlType.Number,
        title: "Frequency",
        defaultValue: 0.01,
        min: 0.0001,
        max: 1.9999,
        step: 0.001,
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
    seedToggle: {
        type: ControlType.Boolean,
        title: "Seed",
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
            return props.seedToggle === true
        },
    },
    // Rgba <feComponentTransfer> control
    effectToggle: {
        type: ControlType.Enum,
        title: "rgba Effect",
        options: [1, 2, 3],
        optionTitles: ["None", "Discrete", "Table"],
    },
    // Rgba discrete control
    /*Gray_scale: {
        type: ControlType.Boolean,
        title: "Gray scale",
        enabledTitle: "No",
        disabledTitle: "Yes",
        hidden(props) {
            return props.effectToggle === 1
        },
    },*/
    Red_discrete: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 0.5,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 3
        },
        defaultValue: [0, 0.5, 0.25],
        maxCount: 5,
    },
    Green_discrete: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 0,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 3
        },
        defaultValue: [0, 0.75, 0.25],
        maxCount: 5,
    },
    Blue_discrete: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 0,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 3
        },
        defaultValue: [0.25, 0.75, 0],
        maxCount: 5,
    },
    Alpha_discrete: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 1,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 3
        },
        defaultValue: [1, 1, 1],
        maxCount: 5,
    },
    // Rgba table control
    Red_table: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 0.5,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 2
        },
        defaultValue: [0, 0.5, 0.25],
        maxCount: 5,
    },
    Green_table: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 0,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 2
        },
        defaultValue: [0, 0.75, 0.25],
        maxCount: 5,
    },
    Blue_table: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 0,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 2
        },
        defaultValue: [0.25, 0.75, 0],
        maxCount: 5,
    },
    Alpha_table: {
        type: ControlType.Array,
        control: {
            type: ControlType.Number,
            title: "Value",
            defaultValue: 1,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: false,
        },
        hidden(props) {
            return props.effectToggle === 1 || props.effectToggle === 2
        },
        defaultValue: [1, 1, 1],
        maxCount: 5,
    },
})
