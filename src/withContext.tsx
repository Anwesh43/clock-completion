import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const withContext = (MainComponent: React.FC<any>) => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : onClick, minDeg} = useAnimatedScale()
        const mainProps = {
            onClick, 
            scale,
            w, 
            h, 
            minDeg 
        }
        return (<MainComponent {...props} {...mainProps}></MainComponent>)
    }
}

export default withContext 