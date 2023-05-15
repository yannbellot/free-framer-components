/*

Scroll Progress for Framer
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
import useFetch from "react-fetch-hook"
import { addPropertyControls, ControlType } from "framer"

export default function Strapi(props) {
    const apiURL =
        props.apiUrl + "/api/" + props.collection + "/" + props.entry + "/"
    const imageURL = props.apiUrl + "/uploads/" + props.imageName
    const { isLoading, error, data } = useFetch(apiURL)
    const errorStyles = {
        background: "#EEEEEE",
        color: "rgb(255, 98, 26)",
        padding: "8px",
        margin: "0 -8px 0 -8px ",
        fontWeight: "bold",
    }
    const messageStyles = {
        background: "rgb(72, 69, 255)",
        color: "white",
        padding: "0 8px 0 8px",
        border: "0",
        fontWeight: "medium",
        borderRadius: "6px",
        overflow: "hidden",
        width: "220px",
    }
    const loadingStyles = {
        background: "rgb(72, 69, 255)",
        color: "white",
        padding: "8px",
        margin: "0",
        fontWeight: "bold",
    }
    const contentStyles = {
        fontFamily: props.font,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.color,
        textAlign: props.textAlign,
        letterSpacing: props.letterSpacing,
        lineHeight: props.lineHeight,
        padding: "0",
        margin: "0",
    }

    if (isLoading) return <p style={loadingStyles}>Loading...</p>
    if (error)
        if (props.type === true) {
            return (
                <div style={messageStyles}>
                    <p style={errorStyles}>Loading error!</p>
                    <p>
                        To display a resource, please enter valid API URL,
                        Collection & Field.
                    </p>
                </div>
            )
        } else {
            return (
                <div style={messageStyles}>
                    <p style={errorStyles}>Loading error!</p>
                    <p>
                        To display an image, please enter valid API URL & File
                        name.
                    </p>
                </div>
            )
        }
    const field = eval("data.data.attributes." + props.field)
    if (data) {
        if (props.type === true) {
            if (props.tag == "h1") {
                return (
                    <div>
                        <h1 style={contentStyles}>{field}</h1>
                    </div>
                )
            }
            if (props.tag == "h2") {
                return (
                    <div>
                        <h2 style={contentStyles}>{field}</h2>
                    </div>
                )
            }
            if (props.tag == "h3") {
                return (
                    <div>
                        <h3 style={contentStyles}>{field}</h3>
                    </div>
                )
            }
            if (props.tag == "h4") {
                return (
                    <div>
                        <h4 style={contentStyles}>{field}</h4>
                    </div>
                )
            }
            if (props.tag == "h5") {
                return (
                    <div>
                        <h5 style={contentStyles}>{field}</h5>
                    </div>
                )
            }
            if (props.tag == "h6") {
                return (
                    <div>
                        <h6 style={contentStyles}>{field}</h6>
                    </div>
                )
            }
            if (props.tag == "p") {
                return (
                    <div>
                        <p style={contentStyles}>{field}</p>
                    </div>
                )
            }
        }
        if (props.type === false) {
            return <img src={imageURL} />
        }
    }
}

addPropertyControls(Strapi, {
    apiUrl: {
        type: ControlType.String,
        title: "URL",
        defaultValue: "",
        placeholder: "Your API URL",
        description:
            "[Strapi documentation](https://docs.strapi.io/dev-docs/intro)",
    },
    type: {
        type: ControlType.Boolean,
        title: "Type",
        defaultValue: true,
        enabledTitle: "Texte",
        disabledTitle: "Image",
    },
    collection: {
        type: ControlType.String,
        title: "Collection",
        defaultValue: "",
        placeholder: "Your collection name",
        hidden(props) {
            return props.type === false
        },
    },
    imageName: {
        type: ControlType.String,
        title: "File name",
        defaultValue: "",
        placeholder: "Your file name",
        hidden(props) {
            return props.type === true
        },
    },
    entry: {
        type: ControlType.Number,
        title: "Entry",
        defaultValue: 1,
        displayStepper: true,
        min: 1,
        hidden(props) {
            return props.type === false
        },
    },
    field: {
        type: ControlType.String,
        title: "Field",
        defaultValue: "",
        placeholder: "Your field name",
        hidden(props) {
            return props.type === false
        },
    },
    font: {
        type: ControlType.String,
        placeholder: "Inter",
        defaultValue: "Inter",
        hidden(props) {
            return props.type === false
        },
    },
    fontSize: {
        title: "Size",
        type: ControlType.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: 16,
        displayStepper: true,
        hidden(props) {
            return props.type === false
        },
    },
    fontWeight: {
        type: ControlType.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        defaultValue: 400,
        title: "Weight",
        hidden(props) {
            return props.type === false
        },
    },
    color: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "black",
        hidden(props) {
            return props.type === false
        },
    },
    textAlign: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        title: "Align",
        options: ["left", "center", "right"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "left",
        hidden(props) {
            return props.type === false
        },
    },
    letterSpacing: {
        title: "Letter",
        type: ControlType.Number,
        defaultValue: 0,
        step: 0.1,
        displayStepper: true,
        hidden(props) {
            return props.type === false
        },
    },

    lineHeight: {
        type: ControlType.Number,
        title: "Line",
        min: 0,
        max: 5,
        displayStepper: true,
        step: 0.1,
        defaultValue: 1.3,
        hidden(props) {
            return props.type === false
        },
    },
    tag: {
        type: ControlType.Enum,
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
        defaultValue: "p",
        title: "Tag",
        hidden(props) {
            return props.type === false
        },
    },
})
