/*

Scroll Progress for Framer
A component to make a scroll progress bar
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

import { motion, useScroll } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

export default function Scroll_Progress(props) {
    const { scrollYProgress } = useScroll()
    let progressOrigin
    if (props.Origin == "l") {
        progressOrigin = "0%"
    }
    if (props.Origin == "c") {
        progressOrigin = "50%"
    }
    if (props.Origin == "r") {
        progressOrigin = "100%"
    }
    if (props.progressPosition == true) {
        return (
            <>
                <motion.div
                    style={{
                        position: "fixed",
                        top: props.progressMargin,
                        left: "0",
                        right: "0",
                        height: props.progressHeight + "px",
                        width: "100%",
                        background: props.backgroundColor,
                        scaleX: scrollYProgress,
                        transformOrigin: progressOrigin,
                    }}
                />
            </>
        )
    }
    if (props.progressPosition == false) {
        return (
            <>
                <motion.div
                    style={{
                        position: "fixed",
                        bottom: props.progressMargin,
                        left: "0",
                        right: "0",
                        height: props.progressHeight + "px",
                        width: "100%",
                        background: props.backgroundColor,
                        scaleX: scrollYProgress,
                        transformOrigin: progressOrigin,
                        //zIndex: props.progressZindex,
                    }}
                />
            </>
        )
    }
}
addPropertyControls(Scroll_Progress, {
    backgroundColor: {
        type: ControlType.Color,
        defaultValue: "#00F",
    },
    progressHeight: {
        type: ControlType.Number,
        title: "Height",
        defaultValue: 10,
        min: 0,
        step: 1,
        displayStepper: true,
    },
    progressPosition: {
        type: ControlType.Boolean,
        title: "Recycle",
        defaultValue: true,
        enabledTitle: "Top",
        disabledTitle: "Bottom",
    },
    progressMargin: {
        type: ControlType.Number,
        title: "Margin",
        defaultValue: 0,
        min: 0,
        step: 1,
        displayStepper: true,
    },
    Origin: {
        type: ControlType.Enum,
        defaultValue: "l",
        displaySegmentedControl: true,
        segmentedControlDirection: "horizontal",
        options: ["l", "c", "r"],
        optionTitles: ["Left", "Center", "Right"],
    },
})
