import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
    const videoRef = useRef()
    const isMobile = useMediaQuery({maxWidth: '768px'})
    useGSAP(() => {
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})
        const heroSplit = new SplitText('.title', {type: 'chars, words'})
        heroSplit.chars.forEach((chars) => chars.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {yPercent: 100, ease: 'back.inOut', stagger: 0.02, opacity:0, duration:1.2})
        gsap.from(paragraphSplit.lines, {yPercent: 100, delay: 1.2, opacity:0, stagger: 0.06})

        gsap.timeline({scrollTrigger:{trigger: '#hero', start:'top top', end: 'bottom top', scrub:true}})
        .to('.right-leaf', {rotation: 15, y: 50, x: 50, ease: 'none'}, 0)
        .to('.left-leaf', {rotation: 15, y: 50, x: -50, ease: 'none'}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%'
        const endValue = isMobile ? '120% top' : 'bottom top'

        const tl = gsap.timeline({
            scrollTrigger:{trigger: 'video', start: startValue, end: endValue, scrub: true, pin: true}
        })
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {currentTime: videoRef.current.duration})
        }
    }, [])
  return (
    <>
        <section className="noisy" id="hero">
            <h1 id="mojito" className="title">MOJITO</h1>

            <img src="/images/hero-left-leaf.png" className="left-leaf" alt="left leaf image" />
            <img src="/images/hero-right-leaf.png" className="right-leaf" alt="right leaf image" />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">Sip the Spirit <br/> of Summer</p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                    
                </div>
            </div>
        </section>

        <div className="video absolute inset-0">
            <video src ="/videos/output.mp4" muted playsInline preload="auto" ref={videoRef}/>
        </div>
    </>
  )
}


export default Hero
