/*

Image Magnifier for Framer
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

import {
    GlassMagnifier,
    Magnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
} from "react-image-magnifiers"

import { addPropertyControls, ControlType } from "framer"

export default function Image_Magnifier(props) {
    const largeImage = props.largeImage
    const smallImage = props.smallImage
    const glassSize = props.glassSize + "%"

    if (props.type === "default") {
        return (
            <Magnifier
                imageSrc={smallImage}
                imageAlt={props.altTxtImg}
                largeImageSrc={largeImage}
            />
        )
    }
    if (props.type === "glass") {
        return (
            <GlassMagnifier
                imageSrc={smallImage}
                imageAlt={props.altTxtImg}
                largeImageSrc={largeImage}
                magnifierSize={glassSize}
                square={props.glassType}
                magnifierBorderColor={props.glassColor}
                magnifierBorderSize={props.glassBorder}
                magnifierOffsetX={props.offsetX}
                magnifierOffsetY={props.offsetY}
            />
        )
    }
}

Image_Magnifier.defaultProps = {
    smallImage: "https://yannbellot.fr/images/placeholderImg.png",
    largeImage: "https://yannbellot.fr/images/placeholderImg.png",
}

addPropertyControls(Image_Magnifier, {
    smallImage: {
        type: ControlType.Image,
        title: "Small",
    },
    largeImage: {
        type: ControlType.Image,
        title: "Large",
    },
    altTxtImg: {
        type: ControlType.String,
        title: "Alt text",
        placeholder: "Alternative text to image",
    },
    type: {
        type: ControlType.Enum,
        title: "Type",
        defaultValue: "default",
        displaySegmentedControl: true,
        options: ["default", "glass"],
        optionTitles: ["Classic", "Glass"],
    },
    glassType: {
        type: ControlType.Boolean,
        title: "Shape",
        defaultValue: false,
        enabledTitle: "Square",
        disabledTitle: "Circle",
        hidden(props) {
            return props.type !== "glass"
        },
    },
    glassSize: {
        type: ControlType.Number,
        title: "Size",
        defaultValue: 25,
        min: 1,
        max: 100,
        unit: "%",
        step: 1,
        displayStepper: false,
        hidden(props) {
            return props.type !== "glass"
        },
    },
    glassBorder: {
        type: ControlType.Number,
        title: "Border",
        defaultValue: 4,
        min: 1,
        max: 100,
        step: 0.5,
        displayStepper: false,
        hidden(props) {
            return props.type !== "glass"
        },
    },
    glassColor: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "white",
        hidden(props) {
            return props.type !== "glass"
        },
    },
    offsetX: {
        type: ControlType.Number,
        title: "Offset X",
        defaultValue: 0,
        step: 0.5,
        min: -100,
        max: 100,
        displayStepper: false,
        hidden(props) {
            return props.type !== "glass"
        },
    },
    offsetY: {
        type: ControlType.Number,
        title: "Offset Y",
        defaultValue: 0,
        step: 0.5,
        min: -100,
        max: 100,
        displayStepper: false,
        hidden(props) {
            return props.type !== "glass"
        },
    },
})
