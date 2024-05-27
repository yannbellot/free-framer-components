/*

Tooltip for Framer
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

import { addPropertyControls, ControlType } from "framer"
import { Tooltip } from "react-tooltip"

export default function Simple_Tooltip(props) {
    const { style } = props
    return (
        <>
            <a
                data-tooltip-id="myTooltipId"
                data-tooltip-content={props.text}
                data-tooltip-place={props.position}
                data-tooltip-variant={props.type}
            >
                {props.children}
            </a>
            <Tooltip id="myTooltipId" />
        </>
    )
}
addPropertyControls(Simple_Tooltip, {
    children: {
        type: ControlType.ComponentInstance,
    },
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: "Hello world !",
        placeholder: "Your tooltip text",
    },
    type: {
        type: ControlType.Enum,
        displaySegmentedControl: false,
        title: "Type",
        options: ["dark", "light", "success", "warning", "error", "info"],
        optionTitles: ["Dark", "Light", "Success", "Warning", "Error", "Info"],
        defaultValue: "dark",
    },
    position: {
        type: ControlType.Enum,
        displaySegmentedControl: false,
        title: "Position",
        options: ["top", "right", "bottom", "left"],
        optionTitles: ["Top", "Right", "Bottom", "Left"],
        defaultValue: "top",
    },
})
