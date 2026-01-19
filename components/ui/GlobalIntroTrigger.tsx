"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import IntroLoader from "./IntroLoader"

export default function GlobalIntroTrigger() {
    const pathname = usePathname()
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount((c) => c + 1)
    }, [pathname])

    return <IntroLoader variant="default" trigger={count} />
}
