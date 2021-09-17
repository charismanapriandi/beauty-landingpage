import { useEffect, useState } from "react"

const useScreen = () => {
    const [screenWidth, setScreenWidth] = useState()

    useEffect(() => {
        const updateSize = () => {
          setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)

        updateSize()
    }, [screenWidth]);

    return screenWidth
}

export default useScreen