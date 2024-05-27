/*

iCal Link for Framer
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
import ICalendarLink from "react-icalendar-link"

export default function Ical_Link(props) {
    let startHour =
        props.startHour * 3600000 +
        props.startMin * 60000 -
        props.gmt * 3600000 +
        props.startSec * 1000
    let startTime = Date.parse(props.startDate) + startHour
    let endHour =
        props.endHour * 3600000 +
        props.endMin * 60000 -
        props.gmt * 3600000 +
        props.endSec * 1000
    let endTime = Date.parse(props.endDate) + endHour
    const event = {
        title: props.title,
        description: props.description,
        startTime: startTime,
        endTime: endTime,
        location: props.location,
        //attendees: ["Hello World <hello@world.com>", "Hey <hey@test.com>"],
    }
    const welcomeStyles = {
        backgroundColor: "#EEE",
        color: "#9966FE",
        fontSize: "large",
        border: "2px #9966FE solid",
        borderRadius: "8px",
        padding: "0 20px 0 20px",
        width: "auto",
        height: "auto",
    }
    const welcomeMessage = (
        <div style={welcomeStyles}>
            <h2>iCalendar link</h2>
        </div>
    )
    if (props.children == 0) {
        return welcomeMessage
    } else {
        return (
            <>
                <ICalendarLink event={event}>{props.children}</ICalendarLink>
            </>
        )
    }
}
addPropertyControls(Ical_Link, {
    children: {
        type: ControlType.ComponentInstance,
        title: "View",
    },
    title: {
        type: ControlType.String,
        title: "Title",
        placeholder: "Your title",
    },
    description: {
        type: ControlType.String,
        title: "Description",
        placeholder: "Your description...",
        displayTextArea: true,
    },
    gmt: {
        type: ControlType.Number,
        displayStepper: true,
        title: "GMT",
        defaultValue: 0,
        step: 1,
        min: -12,
        max: 12,
    },
    startDate: {
        type: ControlType.Date,
        title: "Start date",
    },
    startHour: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Hour",
        defaultValue: 0,
        min: 0,
        max: 23,
        step: 1,
    },
    startMin: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Minutes",
        defaultValue: 0,
        min: 0,
        max: 59,
        step: 1,
    },
    startSec: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Secondes",
        defaultValue: 0,
        min: 0,
        max: 59,
        step: 1,
    },
    endDate: {
        type: ControlType.Date,
        title: "End date",
    },
    endHour: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Hour",
        defaultValue: 0,
        min: 0,
        max: 23,
        step: 1,
    },
    endMin: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Minutes",
        defaultValue: 0,
        min: 0,
        max: 59,
        step: 1,
    },
    endSec: {
        type: ControlType.Number,
        displayStepper: true,
        title: "Secondes",
        defaultValue: 0,
        min: 0,
        max: 59,
        step: 1,
    },
    location: {
        type: ControlType.String,
        title: "Location",
        placeholder: "Rozengracht 207B, 1016 LZ Amsterdam, Netherlands",
    },
    /*attendees: {
        type: ControlType.Array,
        control: {
            type: ControlType.String,
            title: "Attendee",
            placeholder: "John",
        },
        defaultValue: [0, 0.75, 0.25],
        maxCount: 5,
    },*/
})
