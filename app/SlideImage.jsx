/* "use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function SlideImage({ style, src }) {

    const image = useRef(null)

    const [position, setPosition] = useState(false)

    useEffect(() => setPosition(image.current.offsetTop), [])

    useEffect(() => {
        const calcPercent = () => {

        }

        window.addEventListener("scroll", calcPercent)
    })

    return (
        <Image src={src} className={style} ref={image} style={{ transform: [`translateX(${-image.width})`] }} />
    )
} */