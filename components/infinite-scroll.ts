/*

Infinite Scroll for Framer
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
import { render } from "react-dom"
import InfiniteScroll from "react-infinite-scroll-component"
import { addPropertyControls, ControlType } from "framer"

/**/

export default function Infinite_Scroll(props) {
    let scrollHeight
    if (props.heightUnit === true) {
        scrollHeight = props.fixedHeight
    }
    if (props.heightUnit === false) {
        scrollHeight = props.relativeHeight + "vh"
    }
    const { style } = props
    const timer = props.timer * 1000
    const messageStyles = {
        fontFamily: props.font.family,
        fontSize: props.font.fontSize,
        fontWeight: props.font.fontWeight,
        color: props.font.color,
        letterSpacing: props.font.letterSpacing,
        textAlign: props.font.textAlign,
        width: "100%",
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

    const padding = props.isMixed
        ? `${props.top}px ${props.right}px ${props.bottom}px ${props.left}px`
        : `${props.contentPadding}px`

    const contentStyles = {
        backgroundColor: "none",
        width: "fit-content",
        margin: props.contentAlign,
    }

    const welcomeMessage = (
        <div style={welcomeStyles}>
            <h2>Infiny Scroll</h2>
            <p>
                <strong>
                    A component that allows you to load your content as the user
                    scrolls.
                </strong>
            </p>
        </div>
    )

    class Infinyscroll extends React.Component {
        state = {
            items: Array.from({ length: props.preload }),
            hasMore: true,
        }

        fetchMoreData = () => {
            if (this.state.items.length >= props.children.length) {
                this.setState({ hasMore: false })
                return
            }
            // a fake async api call like which sends
            // 20 more records in .5 secs
            setTimeout(() => {
                this.setState({
                    items: this.state.items.concat(
                        Array.from({ length: props.load })
                    ),
                })
            }, timer)
        }

        render() {
            if (props.children == 0) {
                return welcomeMessage
            } else {
                return (
                    <InfiniteScroll
                        style={{
                            overflowX: "hidden",
                            padding: padding,
                        }}
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={
                            <div
                                style={{
                                    padding: "20px",
                                    textAlign: "center",
                                }}
                            >
                                <img src={props.loaderImage} width="30px" />
                            </div>
                        }
                        height={scrollHeight}
                        endMessage={
                            <div style={messageStyles}>
                                <p>{props.endMessage}</p>
                            </div>
                        }
                    >
                        {this.state.items.map((i, index) => (
                            <div key={index} style={contentStyles}>
                                {props.children[index]}
                            </div>
                        ))}
                    </InfiniteScroll>
                )
            }
        }
    }
    return <Infinyscroll />
}

addPropertyControls(Infinite_Scroll, {
    children: {
        type: ControlType.Array,
        control: {
            type: ControlType.ComponentInstance,
        },
    },
    heightUnit: {
        type: ControlType.Boolean,
        title: "Height",
        defaultValue: true,
        enabledTitle: "Fixed",
        disabledTitle: "Relative",
    },
    fixedHeight: {
        type: ControlType.Number,
        title: " ",
        defaultValue: 200,
        min: 1,
        step: 1,
        displayStepper: true,
        hidden(props) {
            return props.heightUnit === false
        },
    },
    relativeHeight: {
        type: ControlType.Number,
        title: " ",
        defaultValue: 100,
        min: 1,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.heightUnit === true
        },
    },
    contentAlign: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        title: "Align",
        options: ["auto 0 0 0", "0 auto 0 auto", "0 0 0 auto"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "0 auto 0 auto",
    },
    contentPadding: {
        type: ControlType.FusedNumber,
        title: "Padding",
        defaultValue: 0,
        toggleKey: "isMixed",
        toggleTitles: ["All", "Individual"],
        valueKeys: ["top", "right", "bottom", "left"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
    },
    preload: {
        type: ControlType.Number,
        title: "Display",
        defaultValue: 5,
        min: 1,
        step: 1,
        displayStepper: true,
    },
    load: {
        type: ControlType.Number,
        title: "Loader",
        defaultValue: 5,
        min: 1,
        step: 1,
        displayStepper: true,
    },
    loaderImage: {
        type: ControlType.Image,
        title: "Image",
    },
    timer: {
        type: ControlType.Number,
        title: "Timer",
        defaultValue: 0.5,
        min: 1,
        step: 0.1,
        unit: " s",
        displayStepper: true,
    },
    endMessage: {
        type: ControlType.String,
        placeholder: "Scroll end message",
        defaultValue: "End of scroll",
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
                defaultValue: "black",
            },
            letterSpacing: {
                title: "Letter",
                type: ControlType.Number,
                defaultValue: 0,
                step: 0.1,
                displayStepper: true,
            },
            textAlign: {
                type: ControlType.Enum,
                displaySegmentedControl: true,
                title: "Align",
                options: ["left", "center", "right"],
                optionTitles: ["Left", "Center", "Right"],
                defaultValue: "center",
            },
        },
    },
})
