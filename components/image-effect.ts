/*

Image Effect for Framer
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
import ImageEffect from "react-image-effects"
import { addPropertyControls, ControlType } from "framer"

export default function Image_Effect(props) {
    const { style } = props
    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                backgroundImage:
                    'url("https://yannbellot.fr/images/back-img.png")',
                backgroundRepeat: "repeat",
                ...style,
            }}
        >
            <ImageEffect
                url={props.image}
                effect={props.effect}
                width="100%"
                height="100%"
            />
        </div>
    )
}
addPropertyControls(Image_Effect, {
    image: {
        type: ControlType.Image,
        title: "Image",
    },
    effect: {
        type: ControlType.Enum,
        title: "Effect",
        defaultValue: "airbrush",
        options: [
            "none",
            "airbrush",
            "chalkboard",
            "collage",
            "colored-chalkboard",
            "colored-pencil",
            "emboss",
            "flannel",
            "hallucination",
            "infrared",
            "low-ink-h",
            "low-ink-v",
            "mirror-h",
            "mirror-v",
            "mosaic",
            "night-vision",
            "pencil",
            "photo-border",
            "selective-color",
            "warhol",
            "watercolor",
        ],
        optionTitles: [
            "None",
            "Airbrush",
            "Chalkboard",
            "Collage",
            "Colored chalkboard",
            "Colored pencil",
            "Emboss",
            "Flannel",
            "Hallucination",
            "Infrared",
            "Horizontal low ink",
            "Vertical low ink",
            "Horizontal mirror",
            "Vertical mirror",
            "Mosaic",
            "Night vision",
            "Pencil",
            "Photo border",
            "Selective color",
            "Warhol",
            "Watercolor",
        ],
    },
})
