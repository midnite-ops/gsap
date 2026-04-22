import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'})
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {yPercent: 100, duration: 1.8, stagger: 0.05, ease: 'expo.out'})
        gsap.from(paragraphSplit.lines, {yPercent: 100, duration: 1.8, stagger: 0.06, ease: 'expo.out', delay: 1, opacity: 0})

        gsap.timeline({scrollTrigger:{trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true}})
        .to('.left-leaf', {rotation: -15, x: -50, y: 50, ease: 'none'}, 0)
        .to('.right-leaf', {rotation: 15, x: 50, y: 50, ease: 'none'}, 0)
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
    </>
  )
}


export default Hero
