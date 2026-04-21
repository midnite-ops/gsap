import { useGSAP } from "@gsap/react"
import { navLinks } from "../constants"
import gsap from "gsap"



export const Navbar = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger: {trigger: '.nav', start: 'bottom top'}})
        tl.fromTo('.nav', {backgroundColor: 'transparent'}, {backgroundColor: '#00000050', backgroundFilter: 'blur(10px)', duration: 1})
    })
    
  return (
    <nav className="nav">
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
                <p>Velvet Pour</p>
            </a>
            <ul className="list-none">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={link.href}>{link.title}</a>
                    </li>
                ))}
            </ul>

            
        </div>
        
    </nav>
  )
}
