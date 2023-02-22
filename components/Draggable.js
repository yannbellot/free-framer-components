/*

Draggable for Framer
A component to make draggable element
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

import type { ComponentType } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
export default function Draggable(props) {
    const welcomeStyles = {
        backgroundColor: "#EEE",
        color: "#9966FE",
        fontSize: "large",
        padding: "20px",
        border: "2px #9966FE solid",
        borderRadius: "8px",
        width: "500px",
    }
    const welcomeMessage = (
        <div style={welcomeStyles}>
            <h2>Draggable</h2>
            <p>
                <strong>
                    Draggable component allows you to create adjustable drag and
                    drop effect.
                </strong>
            </p>
            <h3>To use Draggable :</h3>
            <ul>
                <li>Choose a children Frame.</li>
                <li>Adjust the effect in the right pannel Draggable.</li>
            </ul>
        </div>
    )
    if (props.children == 0) {
        return welcomeMessage
    } else {
        return (
            <motion.div
                drag
                dragSnapToOrigin={props.snapToOrigin}
                dragTransition={{
                    bounceStiffness: props.bounceStiffness,
                    bounceDamping: props.bounceDamping,
                }}
                whileDrag={{
                    scale: props.dragScale,
                    opacity: props.dragOpacity,
                }}
                dragConstraints={{
                    left: -props.Constraints.left,
                    right: props.Constraints.right,
                    top: -props.Constraints.top,
                    bottom: props.Constraints.bottom,
                }}
            >
                {props.children}
            </motion.div>
        )
    }
}

addPropertyControls(Draggable, {
    children: {
        type: ControlType.ComponentInstance,
    },
    snapToOrigin: {
        type: ControlType.Boolean,
        title: "Snap to origin",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    bounceStiffness: {
        type: ControlType.Number,
        title: "Bounce stiffness",
        defaultValue: 100,
        min: 1,
        max: 1000,
        step: 1,
        displayStepper: false,
    },
    bounceDamping: {
        type: ControlType.Number,
        title: "Bounce damping",
        defaultValue: 10,
        min: 1,
        max: 100,
        step: 1,
        displayStepper: false,
    },
    Constraints: {
        type: ControlType.Object,
        controls: {
            left: {
                type: ControlType.Number,
                title: "Left",
                defaultValue: 10000,
                min: 0,
                step: 1,
                displayStepper: true,
            },
            right: {
                type: ControlType.Number,
                title: "Right",
                defaultValue: 10000,
                min: 0,
                step: 1,
                displayStepper: true,
            },
            top: {
                type: ControlType.Number,
                title: "Top",
                defaultValue: 10000,
                min: 0,
                step: 1,
                displayStepper: true,
            },
            bottom: {
                type: ControlType.Number,
                title: "Bottom",
                defaultValue: 10000,
                min: 0,
                step: 1,
                displayStepper: true,
            },
        },
    },
    dragScale: {
        type: ControlType.Number,
        title: "Scale",
        defaultValue: 1,
        min: 0,
        max: 2,
        step: 0.1,
        displayStepper: false,
    },
    dragOpacity: {
        type: ControlType.Number,
        title: "Opacity",
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 0.1,
        displayStepper: false,
    },
})
