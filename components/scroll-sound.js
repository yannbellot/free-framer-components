/*

Scroll Sound for Framer
A component to play sound in scroll
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
import {
    useScrollPosition,
    useScrollXPosition,
    useScrollYPosition,
} from "react-use-scroll-position"

export default function ScrollSound(props) {
    const { x, y } = useScrollPosition()
    const scrollX = useScrollXPosition()
    const scrollY = useScrollYPosition()

    if (scrollY > props.scrollTag) {
        return <audio src={props.file} autoPlay></audio>
    }
}

addPropertyControls(ScrollSound, {
    file: {
        type: ControlType.File,
        allowedFileTypes: ["mp3"],
        title: "File",
    },
    scrollTag: {
        type: ControlType.Number,
        title: "Scroll",
        defaultValue: 0,
        min: 0,
        step: 1,
        displayStepper: true,
    },
})
