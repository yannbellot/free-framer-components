/*

FIGLEAF V1.3 for Framer
A component for subtle and natural random variation
MIT License

// The MIT License

Copyright (c) 2021 Yann Bellot, Inc.

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

import { ControlType } from "framer"

// Return random value with min and max
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min
}

// Return random value deviation
function getRandomGap(value, rValue, type) {
    // Simple deviation
    if (type === "NUMBER") {
        value = Math.round(value + getRandomValue(-rValue, rValue))
        return value
    }

    // Deviation in 0 to 100.
    if (type === "PURCENT") {
        value = Math.round(value + getRandomValue(-rValue, rValue))
        if (value > 100) {
            value = 100
        }
        if (value < 0) {
            value = 0
        }
        return value
    }

    // Deviation in 0 to 360° in loop (trigonometric circle)
    if (type === "TRIGO") {
        value = Math.round(value + getRandomValue(-rValue, rValue))
        if (value > 360) {
            value = value - 360
        }
        if (value < 0) {
            value = 360 + value
        }
        return value
    }
}

// ID link function
function fIdLink(id) {
    let link = "url(#" + id + ")"
    return link
}

// Mask ID generator
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// Random identifier generator
function generateString(length) {
    let result = ""
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}

// Function exports
export { getRandomValue, getRandomGap, fIdLink, generateString }
