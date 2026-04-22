import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { Navbar } from "../components/Navbar"
import { useGSAP } from "@gsap/react"
import Hero from "../components/Hero"
import Cocktails from "../components/Cocktails"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  const tl = gsap.timeline({ duration: 0.5, repeat: -1, yoyo: true})
  useGSAP(() => {
    tl.to('#green-box', {x: 100,})
    tl.from('#red-box', {x: 500, y: 100, borderRadius: '100%', rotation:'100%', scale: 3})
    tl.fromTo('#white-box', {x: 1000, y: -300, borderRadius: '100%', rotation: '100%', scale: -2}, {x:0, y:0, borderRadius: '50%', scale:0})
    gsap.from('#stagger-box', {y: 50, opacity: 0, stagger: 0.2, scrollTrigger: { trigger: "#box", start: "top 80%"}})
  }, [])
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      
    </main>
  )
}

export default App