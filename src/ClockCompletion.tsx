import React, { CSSProperties, Fragment } from "react";
import {useStyle} from './hooks'
import withContext from "./withContext";

interface CCProps {
    w : number,
    h : number, 
    onClick : Function, 
    scale : number, 
    minDeg : number 
}

interface TextPartProps {
    i : number, 
    pStyle : CSSProperties, lineStyle : CSSProperties
    
}

const TextPart = (props : TextPartProps,) => {
    return (
        <div style = {props.pStyle}>
            <div style={props.lineStyle}>
                {props.i}
            </div>
        </div>
    )
}

const getHours = () => {
    const hours = []
    for (let j = 0; j < 12; j++) {
        hours.push(j == 0 ? 12 : j)
    }
    return hours 
}
const ClockCompletion = (props : CCProps) => {
    const {parentStyle, minuteHandStyle, hourHandStyle, circleStyle, dotStyle, textStyle} = useStyle(props.w, props.h, props.scale)
    return (<Fragment>
        <div style = {parentStyle(0, 0)}>
            <div style = {circleStyle()} onClick = {() => props.onClick()}> </div>
        </div>
        <div style = {parentStyle(props.minDeg, 30)}>
            <div style = {hourHandStyle()}> </div>
        </div>
        <div style = {parentStyle(0, 360)}>
            <div style = {minuteHandStyle()}> </div>
        </div>
        <div style = {parentStyle(0, 360)}>
            <div style = {dotStyle()}> </div>
        </div>
        {getHours().map((h : number) => (<TextPart i = {h} pStyle = {parentStyle(30 * h, 0)} lineStyle = {textStyle(h)} key = {`hour_${h}`}/>))}
    </Fragment>)
}

export default withContext(ClockCompletion)