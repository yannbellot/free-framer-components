/*

Data Charts for Framer
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

import React from "react"
import ReactDOM from "react-dom"
import * as V from "victory"
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack,
    VictoryArea,
    VictoryLine,
    VictoryPie,
    VictoryScatter,
    VictoryHistogram,
    LineSegment,
} from "victory"
import { addPropertyControls, ControlType } from "framer"

export default function Data_Charts(props) {
    //console.log(props.myArray[0].dataValue)

    let myData

    if (props.dataTypes === false) {
        myData = props.numbersData
    } else {
        myData = props.mixedData
    }
    let xUnity = " " + props.xUnity
    let yUnity = " " + props.yUnity
    //let chartPaddign = props.chartPadding.isMixed.top

    return (
        <VictoryChart
            domainPadding={{
                x: [props.padding, props.padding],
            }} // left, right, top...
            padding={{
                top: 0,
                right: 0,
                left: props.yPadding,
                bottom: props.xPadding,
            }} // top, left...
            horizontal={props.axis.orientation}
            width={props.width}
            style={{
                parent: {},
                background: {
                    fill: props.background,
                },
            }}
        >
            <VictoryAxis
                dependentAxis={false}
                invertAxis={props.axis.invertX}
                tickFormat={(x) => `${x + xUnity}`}
                label={props.axis.xText}
                standalone={false}
                style={{
                    tickLabels: {
                        fontSize: props.tickLabels.size,
                        padding: props.tickLabels.padding,
                        fill: props.tickLabels.color,
                    },
                    axis: { stroke: props.axis.axisColor },
                    axisLabel: {
                        fontSize: props.axis.size,
                        padding: props.axis.xPadding,
                        //fontWeight: "bold",
                        fill: props.axis.textColor,
                    },
                    grid: {
                        stroke: "red", // color
                    },
                }}
            />
            <VictoryAxis
                dependentAxis={true}
                invertAxis={props.axis.invertY}
                label={props.axis.yText}
                tickFormat={(y) => `${y + yUnity}`}
                style={{
                    tickLabels: {
                        fontSize: props.tickLabels.size,
                        padding: props.tickLabels.padding,
                        fill: props.tickLabels.color,
                    },
                    axis: { stroke: props.axis.axisColor },
                    axisLabel: {
                        fontSize: props.axis.size,
                        padding: props.axis.yPadding,
                        //fontWeight: "bold",
                        fill: props.axis.textColor,
                    },
                    grid: {
                        stroke: "red", // color
                    },
                }}
            />
            <VictoryBar
                // PIE: colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                data={myData}
                x="quarter"
                y="earnings"
                style={{
                    data: {
                        fill: props.fill,
                        stroke: props.borderColor,
                        strokeWidth: props.borderWidth,
                    },
                }}
            />
        </VictoryChart>
    )
}

addPropertyControls(Data_Charts, {
    // Datas set
    dataTypes: {
        type: ControlType.Boolean,
        title: "Data types",
        defaultValue: true,
        enabledTitle: "Mixed",
        disabledTitle: "Numbers",
    },
    numbersData: {
        type: ControlType.Array,
        title: "Data set",
        control: {
            type: ControlType.Object,
            //title: "Input",
            controls: {
                quarter: {
                    type: ControlType.Number,
                    displayStepper: true,
                    title: "x value",
                },
                earnings: {
                    type: ControlType.Number,
                    displayStepper: true,
                    title: "y value",
                },
            },
        },
        defaultValue: [
            { quarter: 1, earnings: 256 },
            { quarter: 2, earnings: 132 },
            { quarter: 3, earnings: 396 },
        ],
        hidden(props) {
            return props.dataTypes === true
        },
    },
    mixedData: {
        type: ControlType.Array,
        title: "Data set",
        control: {
            type: ControlType.Object,
            //title: "Input",
            controls: {
                quarter: {
                    type: ControlType.String,
                    placeholder: "Data name",
                    title: "Name",
                },
                earnings: {
                    type: ControlType.Number,
                    displayStepper: true,
                    title: "Value",
                },
            },
        },
        defaultValue: [
            { quarter: "January", earnings: 132 },
            { quarter: "February", earnings: 396 },
            { quarter: "March", earnings: 256 },
        ],
        hidden(props) {
            return props.dataTypes === false
        },
    },

    // Chart
    width: {
        type: ControlType.Number,
        displayStepper: false,
        title: "Width",
        defaultValue: 400,
        min: 0,
        max: 2000,
    },
    padding: {
        type: ControlType.Number,
        displayStepper: false,
        title: "Padding",
        defaultValue: 30,
        max: 100,
        min: 0,
    },
    background: {
        type: ControlType.Color,
        defaultValue: "pink",
        title: "Background",
    },
    fill: {
        type: ControlType.Color,
        defaultValue: "tomato",
        title: "Fill",
    },
    borderColor: {
        type: ControlType.Color,
        defaultValue: "blue",
        title: "Stroke",
    },
    borderWidth: {
        type: ControlType.Number,
        displayStepper: false,
        title: "Stroke width",
        defaultValue: 0,
        max: 10,
        min: 0,
    },
    xUnity: {
        type: ControlType.String,
        title: "x suffix",
        defaultValue: "",
        placeholder: "Suffix or Unity",
    },
    xPadding: {
        type: ControlType.Number,
        displayStepper: false,
        title: "x padding",
        defaultValue: 80,
        max: 300,
        min: 0,
    },
    yUnity: {
        type: ControlType.String,
        title: "y suffix",
        defaultValue: "Kg",
        placeholder: "Suffix or Unity",
    },
    yPadding: {
        type: ControlType.Number,
        displayStepper: false,
        title: "y padding",
        defaultValue: 80,
        max: 300,
        min: 0,
    },

    // Axis view
    axis: {
        type: ControlType.Object,
        title: "Axis",
        controls: {
            axisColor: {
                type: ControlType.Color,
                defaultValue: "tomato",
                title: "Axis",
            },
            xText: {
                type: ControlType.String,
                defaultValue: "",
                title: "X name",
                placeholder: "X axis name...",
            },
            yText: {
                type: ControlType.String,
                defaultValue: "Weight",
                title: "Y name",
                placeholder: "Y axis name...",
            },
            textColor: {
                type: ControlType.Color,
                defaultValue: "tomato",
                title: "Label",
            },
            font: {
                type: ControlType.Boolean,
                title: "Font",
                defaultValue: false,
                enabledTitle: "Custom",
                disabledTitle: "Default",
            },
            fontFamily: {
                type: ControlType.String,
                defaultValue: "Helvetica",
                title: "Family",
                placeholder: "Font familly",
                hidden(props) {
                    return props.font === false
                },
            },
            fontWeight: {
                type: ControlType.Enum,
                title: "Weight",
                defaultValue: "Regular",
                displaySegmentedControl: false,
                segmentedControlDirection: "vertical",
                options: [
                    "Thin",
                    "Extra-light",
                    "Light",
                    "Regular",
                    "Medium",
                    "Semi-bold",
                    "Bold",
                    "Extra-bold",
                    "Black",
                ],
                optionTitles: [
                    "Thin",
                    "Extra-light",
                    "Light",
                    "Regular",
                    "Medium",
                    "Semi-bold",
                    "Bold",
                    "Extra-bold",
                    "Black",
                ],
                hidden(props) {
                    return props.font === false
                },
            },
            size: {
                type: ControlType.Number,
                displayStepper: false,
                title: "Font size",
                defaultValue: 15,
                min: 1,
            },
            xPadding: {
                type: ControlType.Number,
                displayStepper: false,
                title: "X padding",
                defaultValue: 30,
                max: 100,
                min: 0,
            },
            yPadding: {
                type: ControlType.Number,
                displayStepper: false,
                title: "Y padding",
                defaultValue: 65,
                max: 200,
                min: 0,
            },
            orientation: {
                type: ControlType.Boolean,
                title: "Orientation",
                defaultValue: false,
                enabledTitle: "Horizontal",
                disabledTitle: "Vertical",
            },
            invertX: {
                type: ControlType.Boolean,
                title: "Invert X",
                defaultValue: false,
                enabledTitle: "Yes",
                disabledTitle: "No",
            },
            invertY: {
                type: ControlType.Boolean,
                title: "Invert Y",
                defaultValue: false,
                enabledTitle: "Yes",
                disabledTitle: "No",
            },
        },
    },
    /* Data view
    dataBox: {
        type: ControlType.Object,
        title: "Data boxes",
        controls: {
            background: {
                type: ControlType.Color,
                defaultValue: "tomato",
                title: "Background",
            },
            width: {
                type: ControlType.Number,
                displayStepper: false,
                title: "Border",
                defaultValue: 0,
                max: 10,
                min: 0,
            },
            color: {
                type: ControlType.Color,
                defaultValue: "blue",
                title: "Color",
            },
            padding: {
                type: ControlType.Number,
                displayStepper: false,
                title: "Padding",
                defaultValue: 30,
                max: 100,
                min: 0,
            },
        },
    },*/
    tickLabels: {
        type: ControlType.Object,
        title: "Labels",
        controls: {
            size: {
                type: ControlType.Number,
                displayStepper: false,
                title: "Size",
                defaultValue: 15,
                min: 1,
            },
            padding: {
                type: ControlType.Number,
                displayStepper: false,
                title: "Padding",
                defaultValue: 5,
                max: 100,
                min: 0,
            },
            color: {
                type: ControlType.Color,
                defaultValue: "Tomato",
                title: "Color",
            },
        },
    },
})
