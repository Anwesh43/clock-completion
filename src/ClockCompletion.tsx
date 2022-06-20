import React, { Fragment } from "react";
import {useStyle} from './hooks'
import withContext from "./withContext";

interface CCProps {
    w : number,
    h : number, 
    onClick : Function, 
    scale : number, 
    minDeg : number 
}
const ClockCompletion = (props : CCProps) => {
    const {parentStyle, minuteHandStyle, hourHandStyle, circleStyle} = useStyle(props.w, props.h, props.scale)
    return (<Fragment>
        <div style = {parentStyle(0, 0)}>
            <div style = {circleStyle()} onClick = {() => props.onClick()}> </div>
        </div>
        <div style = {parentStyle(props.minDeg, 30)}>
            <div style = {minuteHandStyle()}> </div>
        </div>
        <div style = {parentStyle(0, 360)}>
            <div style = {hourHandStyle()}> </div>
        </div>
    </Fragment>)
}

export default withContext(ClockCompletion)