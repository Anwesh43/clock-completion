
const scGap : number = 0.01 
const delay : number = 20 

import {useState} from 'react'

export const useAnimatScale = () => {
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