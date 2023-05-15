/*

Weather for Framer
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
import useFetch from "react-fetch-hook"
import { addPropertyControls, ControlType } from "framer"

export default function Weather(props) {
    let OwKey = props.OwKey
    let lat = props.lat
    let long = props.long
    let unit = props.unit
    let tempUnitSymbol
    let speedUnit
    let speedUnitSymbol
    if (props.unit == "metric") {
        tempUnitSymbol = "°C"
        speedUnit = 3.6
        speedUnitSymbol = "km/h"
    }
    if (props.unit == "imperial") {
        tempUnitSymbol = "°F"
        speedUnit = 3.3
        speedUnitSymbol = "mph"
    }
    const errorStyles = {
        background: "#EEEEEE",
        color: "rgb(255, 98, 26)",
        padding: "8px",
        margin: "0 -8px 0 -8px ",
        fontWeight: "bold",
    }
    const messageStyles = {
        background: "rgb(72, 69, 255)",
        color: "white",
        padding: "0 8px 0 8px",
        border: "0",
        fontWeight: "medium",
        borderRadius: "6px",
        overflow: "hidden",
        width: "220px",
    }
    const loadingStyles = {
        background: "rgb(72, 69, 255)",
        color: "white",
        padding: "8px",
        margin: "0",
        fontWeight: "bold",
    }
    const { isLoading, error, data } = useFetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            long +
            "&lang=" +
            props.lang +
            "&units=" +
            unit +
            "&appid=" +
            OwKey
    )
    if (isLoading) return "Loading..."
    if (error)
        return (
            <div style={messageStyles}>
                <p style={errorStyles}>Loading error!</p>
                <p>
                    To display weather, please enter valid OpenWeather 2.5 API
                    key.
                </p>
            </div>
        )

    let date = new Date()
    let dateNow = Date.now()

    let sunrise = new Date(data.sys.sunrise * 1000)
    let sunriseHour = sunrise.getHours()
    let sunriseMinutes = sunrise.getMinutes()
    let sunset = new Date(data.sys.sunset * 1000)
    let sunsetHour = sunset.getHours()
    let sunsetMinutes = sunset.getMinutes()
    let windSpeed = data.wind.speed * speedUnit * 100
    windSpeed = Math.round(windSpeed)
    windSpeed = windSpeed / 100

    let iconSize = props.icon.iconSize

    let weatherIcon =
        "https://openweathermap.org/img/wn/" +
        data.weather[0].icon +
        iconSize +
        ".png"
    const textStyles = {
        padding: "0px",
        margin: "0px",
        fontFamily: props.font,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.color,
        textAlign: props.textAlign,
        letterSpacing: props.letterSpacing,
        lineHeight: props.lineHeight,
        textTransform: props.transform,
    }

    let iconMargin = props.icon.iconMargin

    if (props.dataType === "w") {
        if (props.icon.iconPosition === "L")
            return (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={weatherIcon}
                        style={{
                            display: "block",
                            marginRight: iconMargin,
                        }}
                    />
                    <p style={textStyles}>{data.weather[0].description}</p>
                </div>
            )
        if (props.icon.iconPosition === "T")
            return (
                <div style={{ textAlign: "center" }}>
                    <img
                        src={weatherIcon}
                        style={{
                            display: "block",
                            marginBottom: iconMargin,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
                    <p style={textStyles}>{data.weather[0].description}</p>
                </div>
            )
        if (props.icon.iconPosition === "R")
            return (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={textStyles}>{data.weather[0].description}</p>
                    <img
                        src={weatherIcon}
                        style={{
                            display: "block",
                            marginLeft: iconMargin,
                        }}
                    />
                </div>
            )
        if (props.icon.iconPosition === "B")
            return (
                <div style={{ textAlign: "center" }}>
                    <p style={textStyles}>{data.weather[0].description}</p>
                    <img
                        src={weatherIcon}
                        style={{
                            display: "block",
                            marginTop: iconMargin,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
                </div>
            )
    }
    if (props.dataType === "t")
        return <p style={textStyles}>{data.main.temp + tempUnitSymbol}</p>
    if (props.dataType === "tmin")
        return <p style={textStyles}>{data.main.temp_min + tempUnitSymbol}</p>
    if (props.dataType === "tmax")
        return <p style={textStyles}>{data.main.temp_max + tempUnitSymbol}</p>
    if (props.dataType === "tfl")
        return <p style={textStyles}>{data.main.feels_like + tempUnitSymbol}</p>
    if (props.dataType === "p")
        return <p style={textStyles}>{data.main.pressure}hPa</p>
    if (props.dataType === "h")
        return <p style={textStyles}>{data.main.humidity}%</p>
    if (props.dataType === "v")
        return <p style={textStyles}>{data.visibility} m</p>
    if (props.dataType === "ws")
        return <p style={textStyles}>{windSpeed + " " + speedUnitSymbol}</p>
    if (props.dataType === "wd")
        return <p style={textStyles}>{data.wind.deg}°</p>
    if (props.dataType === "sr")
        return (
            <p style={textStyles}>
                {sunriseHour}:{sunriseMinutes}
            </p>
        )
    if (props.dataType === "ss")
        return (
            <p style={textStyles}>
                {sunsetHour}:{sunsetMinutes}
            </p>
        )
    if (props.dataType === "c") return <p style={textStyles}>{data.name}</p>
}

addPropertyControls(Weather, {
    OwKey: {
        type: ControlType.String,
        title: "API key",
        defaultValue: "",
        placeholder: "Your OpenWeather key",
        description:
            "[View OpenWeather 2.5](https://openweathermap.org/current) or [Create an API Key](https://home.openweathermap.org/users/sign_in)",
    },
    lat: {
        type: ControlType.String,
        defaultValue: "48.8566",
        placeholder: "Latitude",
    },
    long: {
        type: ControlType.String,
        defaultValue: "2.3522",
        placeholder: "Longitude",
    },
    dataType: {
        type: ControlType.Enum,
        title: "Type",
        defaultValue: "x",
        displaySegmentedControl: false,
        segmentedControlDirection: "vertical",
        options: [
            "w",
            "t",
            "tmin",
            "tmax",
            "tfl",
            "p",
            "h",
            "v",
            "ws",
            "wd",
            "sr",
            "ss",
            "c",
        ],
        optionTitles: [
            "Weather",
            "Temp",
            "Temp min",
            "Temp max",
            "Feel like",
            "Pressure",
            "Humidity",
            "Visibility",
            "Wind speed",
            "Wind deg",
            "Sunrise",
            "Sunset",
            "City",
        ],
    },
    icon: {
        type: ControlType.Object,
        title: "Icon",
        controls: {
            iconSize: {
                type: ControlType.Enum,
                defaultValue: "",
                title: "Icon",
                displaySegmentedControl: true,
                segmentedControlDirection: "horizontal",
                options: ["", "@2x", "@4x"],
                optionTitles: ["S", "M", "XL"],
            },
            iconPosition: {
                type: ControlType.Enum,
                title: "Position",
                defaultValue: "L",
                displaySegmentedControl: true,
                segmentedControlDirection: "horizontal",
                options: ["L", "T", "R", "B"],
                optionTitles: ["L", "T", "R", "B"],
            },
            iconMargin: {
                type: ControlType.Number,
                title: "Margin",
                defaultValue: 0,
                step: 1,
                displayStepper: true,
            },
        },
        hidden(props) {
            return props.dataType !== "w"
        },
    },

    lang: {
        type: ControlType.Enum,
        title: "Language",
        defaultValue: "en",
        displaySegmentedControl: false,
        segmentedControlDirection: "vertical",
        options: [
            "af",
            "al",
            "ar",
            "az",
            "bg",
            "ca",
            "cz",
            "da",
            "de",
            "el",
            "en",
            "eu",
            "fa",
            "fi",
            "fr",
            "gl",
            "he",
            "hi",
            "hr",
            "hu",
            "id",
            "it",
            "ja",
            "kr",
            "la",
            "lt",
            "mk",
            "no",
            "nl",
            "pl",
            "pt",
            "pt_br",
            "ro",
            "ru",
            "sv",
            "sk",
            "sl",
            "sp",
            "sr",
            "th",
            "tr",
            "ua",
            "vi",
            "zh_cn",
            "zh_tw",
            "zu",
        ],
        optionTitles: [
            "Afrikaans",
            "Albanian",
            "Arabic",
            "Azerbaijani",
            "Bulgarian",
            "Catalan",
            "Czech",
            "Danish",
            "German",
            "Greek",
            "English",
            "Basque",
            "Persian (Farsi)",
            "Finnish",
            "French",
            "Galician",
            "Hebrew",
            "Hindi",
            "Croatian",
            "Hungarian",
            "Indonesian",
            "Italian",
            "Japanese",
            "Korean",
            "Latvian",
            "Lithuanian",
            "Macedonian",
            "Norwegian",
            "Dutch",
            "Polish",
            "Portuguese",
            "Português Brasil",
            "Romanian",
            "Russian",
            "Swedish",
            "Slovak",
            "Slovenian",
            "Spanish",
            "Serbian",
            "Thai",
            "Turkish",
            "Ukrainian",
            "Vietnamese",
            "Chinese Simplified",
            "Chinese Traditional",
            "Zulu",
        ],
        hidden(props) {
            return props.dataType !== "w"
        },
    },

    unit: {
        type: ControlType.Enum,
        title: "Unit",
        defaultValue: "metric",
        displaySegmentedControl: true,
        segmentedControlDirection: "horizontal",
        options: ["metric", "imperial"],
        optionTitles: ["metric", "imperial"],
        hidden(props) {
            return (
                props.dataType == "w" ||
                props.dataType == "p" ||
                props.dataType == "h" ||
                props.dataType == "v" ||
                props.dataType == "wd" ||
                props.dataType == "sr" ||
                props.dataType == "ss" ||
                props.dataType == "c"
            )
        },
    },
    font: {
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
        defaultValue: 16,
        displayStepper: true,
    },
    fontWeight: {
        type: ControlType.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        defaultValue: 900,
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
    transform: {
        type: ControlType.Enum,
        options: ["None", "Capitalize", "Uppercase", "Lowercase"],
        defaultValue: "None",
        title: "Transform",
        hidden(props) {
            return props.dataType !== "w" && props.dataType !== "c"
        },
    },
})
