// "use client"
// import { useEffect, useState } from "react"

// type IntroLoaderProps = {
//     variant?: "home" | "default"
//     trigger?: number
// }

// export default function IntroLoader({ variant = "default", trigger = 0 }: IntroLoaderProps) {
//     const [visible, setVisible] = useState(false)

//     useEffect(() => {
//         setVisible(true)
//         const t = setTimeout(() => setVisible(false), 2000)
//         return () => clearTimeout(t)
//     }, [trigger])

//     if (!visible) return null

//     return (
//         <div className="intro-loader">
//             <div className="intro-logo-wrapper">
//                 <div className="intro-logo">SOL9X</div>

//                 {variant === "home" ? (
//                     <div className="intro-quote">Secure. Intelligent. Scalable.</div>
//                 ) : (
//                     <span className="intro-underline" />
//                 )}
//             </div>
//         </div>
//     )
// }

"use client"
import { useEffect, useState } from "react"


type IntroLoaderProps = {
    variant?: "home" | "default"
    trigger?: number
}

export default function IntroLoader({ variant = "default", trigger = 0 }: IntroLoaderProps) {
    const [visible, setVisible] = useState(true)
    const [step, setStep] = useState(0)
    const [swipe, setSwipe] = useState(false)

    useEffect(() => {
        setStep(0)

        if (variant === "home") {
            const timeline = [
                () => setStep(1), // Precision
                () => setStep(2), // today
                () => setStep(3), // powers
                () => setStep(4), // tomorrow
                () => setStep(5), // SOL9X
            ]


            timeline.forEach((fn, i) => {
                setTimeout(fn, i * 500)
            })

            // give SOL9X time to breathe before swipe
            setTimeout(() => {
                setSwipe(true)            // start animation
                setTimeout(() => {
                    setVisible(false)      // unmount after animation
                }, 1200)                 // match CSS duration
            }, 5 * 500 + 900)


        } else {
            const t = setTimeout(() => setVisible(false), 2000)
            return () => clearTimeout(t)
        }
    }, [trigger, variant])

    if (!visible) return null

    return (
        <div className={`intro-loader ${swipe ? "swipe" : ""}`}>

            <div className="intro-logo-wrapper">

                {variant === "home" ? (
                    <>
                        {step <= 4 && (
                            <div className="intro-quote-stage">
                                {step === 1 && <span>Precision</span>}
                                {step === 2 && <span>Today</span>}
                                {step === 3 && <span>Powers</span>}
                                {step === 4 && <span>Tomorrow</span>}
                            </div>
                        )}

                        {step === 5 && <div className="intro-logo">SOL9X</div>}

                    </>
                ) : (
                    <>
                        <div className="intro-logo">SOL9X</div>
                        <span className="intro-underline" />
                    </>
                )}

            </div>
        </div>
    )
}
