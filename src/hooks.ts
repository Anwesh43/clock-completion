
const scGap : number = 0.01 
const delay : number = 20 

import {useState, useEffect, CSSProperties} from 'react'

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [minDeg, setMinDeg] = useState(0)
    return {
        scale, 
        minDeg, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            setMinDeg(minDeg + 30)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    }, [])
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const left = `${w / 2}px`
    const top = `${h / 2}px`
    const color = 'indigo'
    const circleSize : number = Math.min(w, h) / 5 
    const minuteSize : number = Math.min(w, h) / 16 
    const hourSize : number = Math.min(w, h) / 25 
    return {
        parentStyle() : CSSProperties {
            return {
                position,
                left, 
                top, 
            }
        },
        circleStyle() : CSSProperties {
            return {
                borderRadius: '50%',
                border: `1px solid ${color}`,
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                left: `${-circleSize / 2}px`,
                top: `${-circleSize / 2}px`
            }
        },
        minuteHandStyle() : CSSProperties {
            const width = Math.min(w, h) / 90
            return {
                height: `${minuteSize}px`,
                width: `${width}px`,
                background: color,
                top: `${-minuteSize}px`,
                left: `${-width / 2}px` 
            }
        },
        hourHandStyle() : CSSProperties {
            const width = Math.min(w, h) / 70
            return {
                height: `${hourSize}px`,
                width: `${width}px`,
                background: color,
                top: `${-hourSize}px`,
                left: `${-width / 2}px` 
            }
        },



    }
}