/*

QR Scan for Framer
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

import React, { Component } from "react"
import QrReader from "modern-react-qr-reader"
import { addPropertyControls, ControlType } from "framer"

export default function QR_Scan(props) {
    const textStyles = {
        fontFamily: props.font.family,
        fontSize: props.font.fontSize,
        fontWeight: props.font.fontWeight,
        color: props.font.color,
        letterSpacing: props.font.letterSpacing,
        background: props.button.background,
        width: "fit-content",
        paddingLeft: props.button.padding + 12,
        paddingRight: props.button.padding + 12,
        paddingTop: props.button.padding,
        paddingBottom: props.button.padding,
        borderRadius: props.button.radius,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: props.button.margin,
        textDecoration: "none",
    }
    const camStyles = {
        width: "100%",
        opacity: 1,
        borderRadius: props.camRadius,
        overflow: "hidden",
        top: 0,
        left: 0,
    }
    class QRscan extends Component {
        constructor(props) {
            super(props)

            this.state = {
                result: "Scan QR Code",
            }

            this.handleError = this.handleError.bind(this)
            this.handleScan = this.handleScan.bind(this)
        }

        handleScan = (data) => {
            if (data) {
                this.state.result = data
                console.log(this.state.result)
                this.setState({ result: data })
            }
        }

        handleError = (err) => {
            console.error(err)
        }

        render() {
            return (
                <div style={{ minWidth: 260 }}>
                    <QrReader
                        delay={300}
                        facingMode={"environment"}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={camStyles}
                    />
                    <div style={textStyles}>
                        <a
                            href={this.state.result}
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            {this.state.result}
                        </a>
                    </div>
                </div>
            )
        }
    }
    return <QRscan />
}

addPropertyControls(QR_Scan, {
    camRadius: {
        title: "Radius",
        type: ControlType.Number,
        min: 0,
        step: 1,
        defaultValue: 12,
        displayStepper: true,
    },
    button: {
        type: ControlType.Object,
        controls: {
            background: {
                type: ControlType.Color,
                title: "Background",
                defaultValue: "blue",
            },
            radius: {
                title: "Radius",
                type: ControlType.Number,
                min: 0,
                step: 1,
                defaultValue: 12,
                displayStepper: true,
            },
            margin: {
                title: "Margin",
                type: ControlType.Number,
                //min: 0,
                step: 1,
                defaultValue: 20,
                displayStepper: true,
            },
            padding: {
                title: "Padding",
                type: ControlType.Number,
                min: 0,
                step: 1,
                defaultValue: 4,
                displayStepper: true,
            },
        },
    },
    font: {
        type: ControlType.Object,
        controls: {
            family: {
                type: ControlType.String,
                placeholder: "Inter",
                defaultValue: "Inter",
            },
            fontSize: {
                title: "Size",
                type: ControlType.Number,
                min: 0,
                max: 500,
                step: 0.5,
                defaultValue: 14,
                displayStepper: true,
            },
            fontWeight: {
                type: ControlType.Enum,
                options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                defaultValue: 400,
                title: "Weight",
            },
            color: {
                type: ControlType.Color,
                title: "Color",
                defaultValue: "white",
            },
            letterSpacing: {
                title: "Letter",
                type: ControlType.Number,
                defaultValue: 0,
                step: 0.1,
                displayStepper: true,
            },
        },
    },
})
